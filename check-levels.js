#!/usr/bin/env node
/* ============================================================
   Reading-level check (see READING-LEVELS.md).

   Measures every reading in readings.js with the shared Flesch-Kincaid
   measure, prints a table, and fails on any reading outside its level
   or any topic whose levels do not step up Quick < Clear < Full < Deep.
   Also checks that the level names and blurbs students see in app.js and
   build-readings.js match the canonical ones word for word.

   Usage: node check-levels.js
   ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

/* Shared reading-level measure (see READING-LEVELS.md). Copy this block into a
   repo's check-levels script unchanged so every site measures the same way. */
const LEVEL_NAMES = ['Quick', 'Clear', 'Full', 'Deep'];
const LEVEL_BLURBS = {
  Quick: 'Short sentences. Key words explained.',
  Clear: 'Plain words, a little more detail.',
  Full: 'The grade-level reading.',
  Deep: 'Adds real quotes from the time and what historians argue.'
};
const LEVEL_LIMITS = { Quick: 5.0, Clear: 7.5, Full: 10.5 }; // Deep: must beat Full

function syllables(word) {
  let w = String(word).toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  const m = w.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}

function fkGrade(html) {
  const text = String(html || '').replace(/<[^>]+>/g, ' ').replace(/\([^)]*\)/g, ' ');
  const sentences = text.split(/[.!?]+["”’')]*(?=\s|$)/).filter(s => s.trim().split(/\s+/).length > 2);
  const words = text.split(/\s+/).filter(w => /[a-z]/i.test(w));
  if (!sentences.length || !words.length) return { grade: 0, wordsPerSentence: 0 };
  const syl = words.reduce((a, w) => a + syllables(w), 0);
  return {
    grade: 0.39 * words.length / sentences.length + 11.8 * syl / words.length - 15.59,
    wordsPerSentence: words.length / sentences.length
  };
}

/* levels: { Quick: html, Clear: html, Full: html, Deep: html } (any may be missing).
   Returns a list of problems for one topic. */
function checkTopic(topic, levels) {
  const problems = [];
  const g = {};
  LEVEL_NAMES.forEach(n => { if (levels[n]) g[n] = fkGrade(levels[n]).grade; });
  Object.keys(LEVEL_LIMITS).forEach(n => {
    if (g[n] != null && g[n] > LEVEL_LIMITS[n]) problems.push(`${topic}: ${n} measures ${g[n].toFixed(1)} (limit ${LEVEL_LIMITS[n]})`);
  });
  for (let i = 1; i < LEVEL_NAMES.length; i++) {
    const a = LEVEL_NAMES[i - 1], b = LEVEL_NAMES[i];
    if (g[a] != null && g[b] != null && !(g[b] > g[a])) problems.push(`${topic}: ${b} (${g[b].toFixed(1)}) does not measure harder than ${a} (${g[a].toFixed(1)})`);
  }
  return problems;
}


/* ---------- this repo ---------- */

const KEY_TO_NAME = { mostSupport: 'Quick', someSupport: 'Clear', standard: 'Full', challenge: 'Deep' };

function runIn(src, filename, sandbox) {
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { filename });
    return sandbox;
}

function loadReadings() {
    const src = fs.readFileSync(path.join(__dirname, 'readings.js'), 'utf8');
    const R = runIn(src, 'readings.js', { window: {} }).window.RV_READINGS;
    if (!R) { console.error('readings.js did not define RV_READINGS'); process.exit(1); }
    return R;
}

/* Pull a `const NAME = <literal>;` out of a source file and evaluate the literal. */
function literal(file, name) {
    const src = fs.readFileSync(path.join(__dirname, file), 'utf8');
    const m = src.match(new RegExp('const\\s+' + name + '\\s*=\\s*([\\[{][\\s\\S]*?[\\]}]);'));
    if (!m) return undefined;
    return runIn('out = ' + m[1], file, {}).out;
}

const problems = [];

/* 1. Names and blurbs in code match the canonical ones. */
const appNames = literal('app.js', 'RV_LEVEL_NAMES');
const appBlurbs = literal('app.js', 'RV_LEVEL_BLURBS');
const buildLevels = literal('build-readings.js', 'LEVELS');
Object.entries(KEY_TO_NAME).forEach(([key, name]) => {
    if (!appNames || appNames[key] !== name) problems.push(`app.js RV_LEVEL_NAMES.${key} is ${JSON.stringify(appNames && appNames[key])}, want "${name}"`);
    if (!appBlurbs || appBlurbs[key] !== LEVEL_BLURBS[name]) problems.push(`app.js RV_LEVEL_BLURBS.${key} is ${JSON.stringify(appBlurbs && appBlurbs[key])}, want "${LEVEL_BLURBS[name]}"`);
    const b = (buildLevels || []).find(l => l.key === key);
    if (!b) { problems.push(`build-readings.js LEVELS has no ${key}`); return; }
    if (b.word !== name) problems.push(`build-readings.js LEVELS ${key}.word is "${b.word}", want "${name}"`);
    if (b.blurb !== LEVEL_BLURBS[name]) problems.push(`build-readings.js LEVELS ${key}.blurb is "${b.blurb}", want "${LEVEL_BLURBS[name]}"`);
});

/* 2. Every reading measures inside its level and the levels step up. */
const R = loadReadings();
const pad = (s, n) => String(s).padEnd(n);
const lpad = (s, n) => String(s).padStart(n);
const sums = {}, counts = {};
console.log(pad('Topic', 28) + LEVEL_NAMES.map(n => lpad(n, 7)).join(''));
for (const id of Object.keys(R)) {
    const levels = {};
    Object.entries(KEY_TO_NAME).forEach(([key, name]) => {
        const html = R[id].levels && R[id].levels[key];
        if (html) levels[name] = html;
    });
    const row = LEVEL_NAMES.map(n => {
        if (!levels[n]) return lpad('-', 7);
        const g = fkGrade(levels[n]).grade;
        sums[n] = (sums[n] || 0) + g; counts[n] = (counts[n] || 0) + 1;
        return lpad(g.toFixed(1), 7);
    }).join('');
    console.log(pad(id, 28) + row);
    LEVEL_NAMES.forEach(n => { if (!levels[n]) problems.push(`${id}: no ${n} reading`); });
    problems.push(...checkTopic(id, levels));
}
console.log(pad('average', 28) + LEVEL_NAMES.map(n => lpad(counts[n] ? (sums[n] / counts[n]).toFixed(1) : '-', 7)).join(''));
console.log(`limits: Quick <= ${LEVEL_LIMITS.Quick}, Clear <= ${LEVEL_LIMITS.Clear}, Full <= ${LEVEL_LIMITS.Full}, Deep > Full\n`);

if (problems.length) {
    console.log(problems.join('\n'));
    console.log(`\n${problems.length} problem${problems.length === 1 ? '' : 's'}`);
    process.exit(1);
}
console.log('0 problems');

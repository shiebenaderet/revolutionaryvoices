#!/usr/bin/env node
/* Logic and consistency check for the crew path (3.4.0).

   The voice bug this exists for: voices were picked on Start, before the styles,
   and most style combinations don't use all three voices, so a student could
   reach My Lines with no boxes at all. Every check below is a way the data in
   crew.js, lines.js, builder-banks.js and index.html can drift apart and leave a
   student with a blank or impossible step, without any error on the page.

     node check-crew.js        exits 1 on any problem

   No packages; it reads the files and runs the same cast logic the page uses
   (cast-core.js) on every style combination and crew size. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const problems = [];
const notes = [];
const fail = msg => problems.push(msg);

/* Pull a `var NAME = <literal>;` out of a script and evaluate just the literal. */
function literal(src, name, file) {
  const start = src.indexOf('var ' + name + ' = ');
  if (start === -1) throw new Error(name + ' not found in ' + file);
  let i = src.indexOf('=', start) + 1, depth = 0, inStr = null, began = false;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (inStr) { if (ch === '\\') i++; else if (ch === inStr) inStr = null; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }
    if (ch === '[' || ch === '{') { depth++; began = true; }
    if (ch === ']' || ch === '}') depth--;
    if (began && depth === 0) break;
  }
  const text = src.slice(src.indexOf('=', start) + 1, i + 1);
  return vm.runInNewContext('(' + text + ')');
}

const crewSrc = read('crew.js');
const linesSrc = read('lines.js');
const html = read('index.html');
const PARTS = literal(crewSrc, 'PARTS', 'crew.js');
const VOICES = literal(crewSrc, 'VOICES', 'crew.js');
const CREW_OPENING = literal(crewSrc, 'CREW_OPENING', 'crew.js');
const JOBS = literal(crewSrc, 'JOBS', 'crew.js');
const KINDS = literal(linesSrc, 'KINDS', 'lines.js');
const BEAT_KIND = literal(linesSrc, 'BEAT_KIND', 'lines.js');
const CAST = require('./cast-core.js');

const sandbox = { window: {} };
vm.runInNewContext(read('builder-banks.js'), sandbox);
const BANKS = sandbox.window.RV_BANKS || {};
const SHARED = sandbox.window.RV_BANK_SHARED || {};
vm.runInNewContext(read('readings.js'), sandbox);
const READINGS = sandbox.window.RV_READINGS || {};

const voiceIds = VOICES.map(v => v.id);

/* ---------------------------------------------------------------- 1. boxes */
const seen = {};
const allBoxes = CREW_OPENING.map(b => ({ b, where: 'crew opening' }));
PARTS.forEach(p => p.styles.forEach(s => s.beats.forEach(b => allBoxes.push({ b, where: p.name + ' / ' + s.name }))));
allBoxes.forEach(({ b, where }) => {
  const [id, title, voice] = b;
  if (seen[id]) fail(`Box id "${id}" is used twice (${seen[id]} and ${where}).`);
  seen[id] = where;
  if (voice !== 'all' && voiceIds.indexOf(voice) === -1) fail(`${where}: box "${title}" has an unknown voice "${voice}".`);
  if (!BEAT_KIND[id]) fail(`${where}: box "${title}" (${id}) has no My Lines kind, so My Lines would show it blank.`);
  else if (!KINDS[BEAT_KIND[id]]) fail(`${where}: box "${title}" maps to My Lines kind "${BEAT_KIND[id]}", which doesn't exist.`);
  /* The plan, the Group Doc and My Lines read each box's guidance and starter from
     the solo writing field with the same id. Crew-only boxes have no solo field. */
  if (where !== 'crew opening' && !new RegExp('id="' + id + '"').test(html)) fail(`${where}: box "${title}" has no field id="${id}" in index.html, so it gets no guidance or starter.`);
});
Object.keys(BEAT_KIND).forEach(id => { if (!seen[id]) notes.push(`My Lines has a kind for "${id}", which no style uses.`); });

/* Each style must have its radio on the page, because Plan checks that radio. */
PARTS.forEach(p => p.styles.forEach(s => {
  if (!new RegExp('name="' + p.radio + '"[^>]*value="' + s.id + '"|value="' + s.id + '"[^>]*name="' + p.radio + '"').test(html)) {
    fail(`${p.name} / ${s.name}: no radio name="${p.radio}" value="${s.id}" in index.html.`);
  }
}));

/* ---------------------------------------------------------------- 2. Quick frames */
const SPECIAL = { text: 1, feeling: 1, sound: 1, voice: 1 };
const slotsUsed = {};
Object.keys(KINDS).forEach(k => {
  const kind = KINDS[k];
  if (!kind.ask) fail(`My Lines kind "${k}" has no question for the student.`);
  if (!kind.frames || !kind.frames.length) { fail(`My Lines kind "${k}" has no sentence frames for Quick.`); return; }
  kind.frames.forEach(f => {
    (f.match(/\[([a-zA-Z]+)(?::[^\]]+)?\]/g) || []).forEach(t => {
      const slot = t.replace(/^\[|(:[^\]]*)?\]$/g, '');
      (slotsUsed[slot] = slotsUsed[slot] || []).push(k);
    });
    (f.match(/\{[^}]+\}/g) || []).forEach(t => {
      if (["{name}", "{name's}", "{podcast}"].indexOf(t) === -1) fail(`My Lines kind "${k}": frame uses ${t}, which nothing fills in.`);
    });
  });
});
if (!(SHARED.feelings || []).length) fail('builder-banks.js: the shared feelings word bank is empty.');
if (!(SHARED.sounds || []).length) fail('builder-banks.js: the shared sounds word bank is empty.');
Object.keys(READINGS).forEach(topic => {
  const bank = BANKS[topic];
  if (!bank) { fail(`Topic "${topic}" has a reading but no Quick word bank in builder-banks.js.`); return; }
  if (!bank.name) fail(`Word bank "${topic}" has no name.`);
  Object.keys(slotsUsed).forEach(slot => {
    if (SPECIAL[slot]) return;
    const words = bank[slot] || [];
    if (words.length < 2) fail(`Word bank "${topic}" has ${words.length} choice(s) for [${slot}] (used by ${[...new Set(slotsUsed[slot])].join(', ')}); a Quick student needs at least 2.`);
  });
});
Object.keys(BANKS).forEach(t => { if (!READINGS[t]) fail(`Word bank "${t}" has no matching reading in readings.js.`); });

/* ---------------------------------------------------------------- 3. every episode, every crew */
let combos = 0, worst = null;
const [hook, story, wrap] = PARTS;
hook.styles.forEach(h => story.styles.forEach(st => wrap.styles.forEach(w => {
  const beats = CREW_OPENING.concat(h.beats, st.beats, w.beats);
  const used = [], byVoice = {};
  beats.forEach(b => {
    if (b[2] === 'all') return;
    if (!byVoice[b[2]]) { byVoice[b[2]] = []; used.push(b[2]); }
    byVoice[b[2]].push(b[0]);
  });
  const label = `${h.name} + ${st.name} + ${w.name}`;
  [2, 3, 4].forEach(size => {
    combos++;
    const people = Array.from({ length: size }, (_, i) => i + 1);
    const names = people.map(n => 'P' + n);
    const assign = CAST.split(used, byVoice, people);
    const who = {};
    used.forEach(v => { who[v] = (assign[v] || []).map(n => 'P' + n); });
    const r = CAST.owners(used, byVoice, who, names);
    if (r.open.length) fail(`${label}, crew of ${size}: Split it up leaves ${r.open.join(', ')} with nobody.`);
    names.forEach(n => { if (!r.boxes[n]) fail(`${label}, crew of ${size}: Split it up leaves ${n} with no lines.`); });
    Object.keys(r.owners).forEach(id => { if ((r.owners[id] || []).length !== 1) fail(`${label}, crew of ${size}: box ${id} has ${r.owners[id].length} owners.`); });
    const counts = names.map(n => r.boxes[n] || 0);
    const spread = Math.max(...counts) - Math.min(...counts);
    if (!worst || spread > worst.spread) worst = { spread, label, size, counts };
    if (spread > 4) fail(`${label}, crew of ${size}: Split it up is uneven (boxes ${counts.join(' / ')}).`);
  });
  /* Unused voices: nothing in the crew path may ask for them. */
  voiceIds.filter(v => used.indexOf(v) === -1).forEach(v => {
    if (combos <= 3) notes.push(`Example: ${label} uses no ${v}.`);
  });
})));
notes.push(`Checked ${combos} episodes (every style combination, crews of 2, 3 and 4).`);
if (worst) notes.push(`Most uneven split: ${worst.label}, crew of ${worst.size}: boxes ${worst.counts.join(' / ')} (the crew can rebalance by hand).`);

/* ---------------------------------------------------------------- 4. the steps */
if (/Which voice do you play\?/.test(read('lines.js'))) fail('lines.js still asks a crew student to pick a voice; voices come from Who says it?');
if (/crew\d?-voice-|chip-voice-/.test(crewSrc.slice(crewSrc.indexOf('function buildCrewRows'), crewSrc.indexOf('/* Who says each part')))) fail('Start still builds voice checkboxes.');
JOBS.forEach(j => { if (!j.short) fail(`Job ${j.name} has no one-line description for Start.`); });
['cast-core.js', 'crew.js', 'lines.js'].forEach(f => { if (!new RegExp('<script src="' + f.replace('.', '\\.') + '(\\?v=[^"]+)?"').test(html)) fail(`index.html doesn't load ${f}.`); });
if (html.indexOf('cast-core.js') > html.indexOf('src="crew.js')) fail('index.html loads cast-core.js after crew.js; crew.js needs it first.');
const versions = [...new Set((html.match(/\?v=([0-9.]+)/g) || []).map(x => x.slice(3)))];
if (versions.length > 1) fail(`index.html asset links carry different versions: ${versions.join(', ')}.`);
const app = read('app.js');
const appVersion = (app.match(/APP_VERSION = '([^']+)'/) || [])[1];
if (versions[0] && appVersion && versions[0] !== appVersion) fail(`Asset links say ?v=${versions[0]} but app.js says ${appVersion}.`);
const footer = (html.match(/id="footerVersion">v([^<]+)</) || [])[1];
if (footer && appVersion && footer !== appVersion) fail(`Footer says v${footer} but app.js says ${appVersion}.`);
const changelog = (read('CHANGELOG.md').match(/## \[([^\]]+)\]/) || [])[1];
if (changelog && appVersion && changelog !== appVersion) fail(`CHANGELOG's newest entry is ${changelog} but app.js says ${appVersion}.`);

notes.forEach(n => console.log('note: ' + n));
if (problems.length) {
  problems.forEach(p => console.log('PROBLEM: ' + p));
  console.log(`${problems.length} problem(s)`);
  process.exit(1);
}
console.log('0 problems');

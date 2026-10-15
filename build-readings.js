#!/usr/bin/env node
/* ============================================================
   Revolutionary Voices — static reading page builder

   Reads readings.js and emits one self-contained .html per topic
   into readings/<id>/index.html. Each page carries its own <style> and a
   four-level switcher; app.js is not needed.

   Usage:  node build-readings.js
   ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'readings');
const SITE = 'https://voices.mrbsocialstudies.org';

/* readings.js assigns to `window`, so give it one and run it in a
   sandbox. Cheaper and safer than converting the file to a module —
   the app still loads it with a plain <script> tag. */
function loadReadings() {
    const src = fs.readFileSync(path.join(ROOT, 'readings.js'), 'utf8');
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { filename: 'readings.js' });
    const { RV_TOPICS, RV_READINGS } = sandbox.window;
    if (!RV_TOPICS || !RV_READINGS) {
        throw new Error('readings.js did not define RV_TOPICS / RV_READINGS');
    }
    return { topics: RV_TOPICS, readings: RV_READINGS };
}

/* Students see one-word names that describe the text, never the reader
   (3.0.0; these were stars and "Most support" ... "Challenge"). The keys stay. */
const LEVELS = [
    { key: 'mostSupport', word: 'Quick', blurb: 'Short sentences. Key words explained.' },
    { key: 'someSupport', word: 'Clear', blurb: 'Plain words, a little more detail.' },
    { key: 'standard',    word: 'Full',  blurb: 'The grade-level reading.' },
    { key: 'challenge',   word: 'Deep',  blurb: 'Adds real quotes from the time and what historians argue.' }
];

const SECTION_LABEL = {
    hook: 'For your Hook',
    content: 'For your Story',
    conclusion: 'For your Wrap'
};

/* Mirrors rvFactsFor() in app.js: facts are either a shared array or
   an object keyed by level, falling back to standard. */
function factsFor(reading, section, level) {
    const f = reading && reading.keyFacts ? reading.keyFacts[section] : null;
    if (!f) return [];
    if (Array.isArray(f)) return f;
    return f[level] || f.standard || [];
}

/* Reading bodies are authored HTML and are trusted. Everything else
   (names, taglines, fact strings, source titles) is plain text that
   may contain & or quotes, so it gets escaped. */
function esc(s) {
    return String(s == null ? '' : s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/* Design tokens lifted from styles.css (the "On The Air" theme),
   trimmed to what a reading page actually uses. */
const TOKENS = `
:root {
  --brand:#d4661a; --brand-dark:#a94f12; --brand-deep:#8a5a2b;
  --ink:#3a2a1a; --page-bg:#f5ead3;
  --surface:#fffaf0; --surface-2:#fbf3e0; --line:#e6d6b6; --muted:#5c4f3d;
  --accent:#1f7a6e; --accent-press:#155f55; --gold:#e0a52e;
  --code-conclusion:#c2701a;
  --focus:#d4661a; --radius:14px;
  --shadow:0 4px 0 rgba(58,42,26,.10), 0 12px 26px rgba(58,42,26,.10);
  --edge:#74674f;
  --font-body:'Atkinson Hyperlegible Next','Atkinson Hyperlegible',Verdana,system-ui,sans-serif;
  --font-head:var(--font-body);
  --font-mono:var(--font-body);
}
:root[data-theme="dark"] {
  --brand:#ef8a3b; --brand-dark:#c66e26; --brand-deep:#e9c79c;
  --ink:#f3e6cf; --page-bg:#1f1611;
  --surface:#2a201a; --surface-2:#241b15; --line:#43342a; --muted:#bda88a;
  --accent:#43c2b1; --accent-press:#2f9e8f; --gold:#f0bf57;
  --code-conclusion:#e8985a; --edge:#a8987a;
  --focus:#f0bf57;
  --shadow:0 4px 0 rgba(0,0,0,.4), 0 14px 30px rgba(0,0,0,.5);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --brand:#ef8a3b; --brand-dark:#c66e26; --brand-deep:#e9c79c;
    --ink:#f3e6cf; --page-bg:#1f1611;
    --surface:#2a201a; --surface-2:#241b15; --line:#43342a; --muted:#bda88a;
    --accent:#43c2b1; --accent-press:#2f9e8f; --gold:#f0bf57;
    --code-conclusion:#e8985a; --edge:#a8987a;
    --focus:#f0bf57;
    --shadow:0 4px 0 rgba(0,0,0,.4), 0 14px 30px rgba(0,0,0,.5);
  }
}`;

/* Fonts are self-hosted. fontBase is where the woff2 files sit relative
   to the page: topic pages live at readings/<id>/index.html (../../fonts),
   the index at readings/index.html (../fonts). */
function fontFaces(fontBase) {
    return `
@font-face { font-family:'Atkinson Hyperlegible Next'; src:url('${fontBase}/AtkinsonHyperlegibleNext-Variable.woff2') format('woff2');
  font-weight:200 800; font-style:normal; font-display:swap; }
@font-face { font-family:'Atkinson Hyperlegible Next'; src:url('${fontBase}/AtkinsonHyperlegibleNext-Variable-Italic.woff2') format('woff2');
  font-weight:200 800; font-style:italic; font-display:swap; }
@font-face { font-family:'Lexend'; src:url('${fontBase}/Lexend-Variable.woff2') format('woff2');
  font-weight:100 900; font-display:swap; }
@font-face { font-family:'OpenDyslexic'; src:url('${fontBase}/OpenDyslexic-Regular.woff2') format('woff2');
  font-weight:400; font-display:swap; }
@font-face { font-family:'OpenDyslexic'; src:url('${fontBase}/OpenDyslexic-Bold.woff2') format('woff2');
  font-weight:700; font-display:swap; }`;
}

/* Turn the authored gloss pattern — <strong>term</strong> (definition) —
   into a tap-to-reveal gloss: definition adjacent to the word, hidden
   until the student asks for it (the verified DIG/SHEG glossing pattern,
   research/DESIGN-DECISIONS.md). Plain <strong> without a following
   parenthetical is emphasis and is left alone. No-JS and print CSS
   reveal the definitions again as parentheticals. */
function glossify(html) {
    return html.replace(
        /<strong>([^<]+)<\/strong>\s*\(([^)]+)\)/g,
        (m, term, def) =>
            `<span class="gloss"><button type="button" class="gloss-word" ` +
            `aria-expanded="false">${term}</button>` +
            `<span class="gloss-def" hidden> (${def})</span></span>`
    );
}

/* Reading styles adapted from styles.css lines ~1005-1042, plus the
   page frame the app itself supplies (header, wrapper, print rules). */
const PAGE_CSS = `
*, *::before, *::after { box-sizing: border-box; }
body { margin:0; background:var(--page-bg); color:var(--ink);
  font-family:var(--font-body); line-height:1.6;
  -webkit-text-size-adjust:100%; }
h1,h2,h3,h4,h5 { font-family:var(--font-head); }
.wrap { max-width:820px; margin:0 auto; padding:24px 20px 64px; }

.page-head { display:flex; flex-wrap:wrap; gap:12px; align-items:baseline;
  justify-content:space-between; margin-bottom:18px; }
.eyebrow { font-size:1rem; font-weight:700; color:var(--brand-deep); margin:0; }
/* Listen and Font (reader-tools.js) sit on the light page here, not a dark header. */
#rtools { --hdr-ink:var(--ink); --hdr-edge:var(--edge); }
#rtools .rt-btn.rt-primary { color:#1a1208; }
.theme-toggle { background:var(--surface-2); color:var(--muted);
  border:1.5px solid var(--line); border-radius:999px; padding:6px 14px;
  cursor:pointer; font-family:var(--font-mono); font-size:.82rem; }
.theme-toggle:hover { border-color:var(--gold); }

.reading-viewer { border:2px solid var(--line); border-radius:var(--radius);
  background:var(--surface); box-shadow:var(--shadow); padding:22px 24px; }
.reading-head { display:flex; flex-wrap:wrap; gap:12px; align-items:flex-start;
  justify-content:space-between; }
.reading-head h1 { margin:0; color:var(--brand-deep); font-size:1.6rem; line-height:1.2; }
.reading-tagline { margin:6px 0 0; color:var(--muted); font-size:.95rem; }

.level-toggle { display:flex; gap:6px; flex-wrap:wrap; }
.level-pill { background:var(--surface-2); color:var(--muted);
  border:1.5px solid var(--line); border-radius:999px; padding:10px 16px;
  min-height:44px; cursor:pointer; font-family:var(--font-body); font-size:1rem; font-weight:700;
  display:inline-flex; align-items:center; gap:6px; letter-spacing:.04em; }
.level-pill { min-width:64px; }
.level-pill:hover { border-color:var(--gold); }
.level-pill[aria-pressed="true"] { background:var(--gold); color:#3a2a1a;
  border-color:var(--gold); font-weight:700; }

.reading-quickfacts { display:flex; flex-wrap:wrap; gap:8px 16px; margin:16px 0;
  padding:12px 14px; background:var(--surface-2); border-radius:10px;
  border:1px solid var(--line); }
.reading-quickfacts .qf { font-size:.9rem; color:var(--ink); }
.reading-quickfacts strong { color:var(--brand-deep); }

.reading-body { line-height:1.75; color:var(--ink); font-size:1.02rem; }
.reading-body p { margin:0 0 12px; }
.reading-body em { font-style:italic; }
.reading-body strong { color:var(--brand-deep); }

/* Tap-to-reveal vocabulary gloss. The word itself is the button; padding
   plus negative margin widens the tap area without shifting the text. */
.gloss-word { font:inherit; font-weight:700; color:var(--brand-deep);
  background:none; border:none; cursor:pointer;
  text-decoration:underline dotted var(--gold) 2px; text-underline-offset:3px;
  padding:8px 3px; margin:-8px -1px; }
.gloss-word:hover { background:var(--surface-2); border-radius:6px; }
.gloss-word[aria-expanded="true"] { background:var(--surface-2);
  border-radius:6px; text-decoration-style:solid; }
.gloss-def { color:var(--muted); }
.gloss-def[hidden] { display:none; }

.reading-facts { margin-top:20px; border-top:2px dashed var(--line); padding-top:16px; }
.reading-facts h2, .reading-sources h2 { color:var(--accent); margin:0 0 10px;
  font-size:1.05rem; }
.facts-group { margin:0 0 12px; }
.facts-group h3 { margin:0 0 4px; color:var(--code-conclusion); font-size:.95rem; }
.facts-group ul, .reading-sources ul { margin:0 0 0 18px; padding:0; }
.facts-group li { margin:3px 0; }
.reading-sources { margin-top:16px; border-top:2px dashed var(--line); padding-top:16px; }
.reading-sources a { color:var(--accent); }

.level-panel[hidden] { display:none; }
:focus-visible { outline:3px solid var(--focus); outline-offset:2px; }

.page-foot { margin-top:22px; font-size:.85rem; color:var(--muted); }
.page-foot a { color:var(--accent); }

@media (max-width:520px) {
  .wrap { padding:16px 14px 48px; }
  .reading-viewer { padding:16px 15px; }
  .reading-head h1 { font-size:1.35rem; }
}

@media print {
  .theme-toggle, .level-toggle { display:none; }
  body { background:#fff; }
  .reading-viewer { border:none; box-shadow:none; padding:0; }
  .level-panel[hidden] { display:block; }
  .level-panel::before { content:"Level: " attr(data-level-word);
    display:block; font-weight:700; margin:14px 0 6px; }
  .gloss-def[hidden] { display:inline; }
  .gloss-word { text-decoration:none; padding:0; margin:0; }
}`;

/* Progressive enhancement: every level is in the HTML. Without JS the
   page still shows all four (the [hidden] panels are revealed by the
   noscript rule); with JS, one shows at a time. */
const PAGE_JS = `
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('rvReadingLevel');
    if (saved) show(saved);
  } catch (e) {}

  function show(level) {
    var found = false;
    document.querySelectorAll('.level-panel').forEach(function (p) {
      var match = p.dataset.level === level;
      p.hidden = !match;
      if (match) found = true;
    });
    if (!found) return false;
    document.querySelectorAll('.level-pill').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.level === level));
    });
    return true;
  }

  document.querySelectorAll('.level-pill').forEach(function (b) {
    b.addEventListener('click', function () {
      if (!show(b.dataset.level)) return;
      try { localStorage.setItem('rvReadingLevel', b.dataset.level); } catch (e) {}
    });
  });

  document.querySelectorAll('.gloss-word').forEach(function (b) {
    b.addEventListener('click', function () {
      var def = b.nextElementSibling;
      if (!def) return;
      var opening = def.hidden;
      def.hidden = !opening;
      b.setAttribute('aria-expanded', String(opening));
    });
  });

  /* The saved light/dark choice (set from the Font menu here or in the app). */
  try {
    var t = localStorage.getItem('rvTheme');
    if (t) root.setAttribute('data-theme', t);
  } catch (e) {}
})();`;

function renderPage(topic, reading, allTopics) {
    const quickFacts = (reading.quickFacts || [])
        .map(f => `<span class="qf"><strong>${esc(f[0])}:</strong> ${esc(f[1])}</span>`)
        .join('\n        ');

    const pills = LEVELS
        .filter(l => reading.levels && reading.levels[l.key])
        .map(l =>
            `<button type="button" class="level-pill" data-level="${l.key}" ` +
            `aria-pressed="${l.key === 'standard'}" title="${esc(l.blurb)}">` +
            `${l.word}</button>`)
        .join('\n          ');

    /* One panel per level, each carrying its own body and its own key
       facts, because facts can differ by level. */
    const panels = LEVELS
        .filter(l => reading.levels && reading.levels[l.key])
        .map(l => {
            let facts = '';
            ['hook', 'content', 'conclusion'].forEach(section => {
                const items = factsFor(reading, section, l.key);
                if (!items.length) return;
                facts +=
                    `\n          <div class="facts-group">\n` +
                    `            <h3>${esc(SECTION_LABEL[section])}</h3>\n` +
                    `            <ul>${items.map(x => `<li>${esc(x)}</li>`).join('')}</ul>\n` +
                    `          </div>`;
            });
            const factsBlock = facts
                ? `\n        <section class="reading-facts">\n` +
                  `          <h2>Key facts to use in your script</h2>${facts}\n` +
                  `        </section>`
                : '';
            return `<div class="level-panel" data-level="${l.key}" ` +
                   `data-level-word="${esc(l.word)}"${l.key === 'standard' ? '' : ' hidden'}>\n` +
                   `        <div class="reading-body">${glossify(reading.levels[l.key].trim())}</div>` +
                   factsBlock + `\n      </div>`;
        })
        .join('\n      ');

    const sources = (reading.sources || [])
        .map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`)
        .join('\n            ');
    const sourcesBlock = sources
        ? `\n        <section class="reading-sources">\n` +
          `          <h2>Where these facts come from</h2>\n` +
          `          <ul>\n            ${sources}\n          </ul>\n        </section>`
        : '';

    const title = `${reading.name} — Revolutionary Voices`;
    const desc = reading.tagline || `Leveled reading: ${reading.name}`;

    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}/readings/${topic.id}/">
<style>${TOKENS}
${fontFaces('../../fonts')}
${PAGE_CSS}
</style>
<noscript><style>
.level-panel[hidden]{display:block}.level-toggle{display:none}
.gloss-def[hidden]{display:inline}
.gloss-word{text-decoration:none;cursor:text;padding:0;margin:0}
</style></noscript>
</head>
<body>
<div class="wrap">
  <div class="page-head">
    <p class="eyebrow">Revolutionary Voices · Reading</p>
    <div id="rtools"></div>
  </div>

  <article class="reading-viewer" data-listen>
    <header class="reading-head">
      <div>
        <h1>${esc(reading.name)}</h1>
        ${reading.tagline ? `<p class="reading-tagline">${esc(reading.tagline)}</p>` : ''}
      </div>
      <div class="level-toggle" role="group" aria-label="Reading level">
          ${pills}
      </div>
    </header>
${quickFacts ? `
    <div class="reading-quickfacts">
        ${quickFacts}
    </div>` : ''}

      ${panels}
${sourcesBlock}
  </article>

  <p class="page-foot">
    Part of <a href="https://voices.mrbsocialstudies.org">Revolutionary Voices</a>.
    Same facts at every level — only the language changes.
  </p>
</div>
<script>${PAGE_JS}</script>
<script src="../../reader-tools.js"></script>
</body>
</html>
`;
}

function main() {
    const { topics, readings } = loadReadings();
    fs.mkdirSync(OUT, { recursive: true });

    const built = [];
    const skipped = [];

    topics.forEach(t => {
        const reading = readings[t.id];
        if (!reading) { skipped.push(`${t.id} (no reading in RV_READINGS)`); return; }
        if (!reading.levels) { skipped.push(`${t.id} (no levels)`); return; }
        const html = renderPage(t, reading, topics);
        const dir = path.join(OUT, t.id);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
        built.push({ id: t.id, name: reading.name, group: t.group, bytes: html.length });
    });

    /* Any reading present in RV_READINGS but missing from RV_TOPICS would
       otherwise be built silently or not at all — report it either way. */
    Object.keys(readings).forEach(id => {
        if (!topics.some(t => t.id === id)) skipped.push(`${id} (in RV_READINGS but not RV_TOPICS)`);
    });

    writeIndex(built);

    console.log(`Built ${built.length} reading pages -> readings/<id>/`);
    built.forEach(b => console.log(`  ${b.id}/  (${(b.bytes / 1024).toFixed(1)} KB)  ${b.name}`));
    if (skipped.length) {
        console.log(`\nSkipped ${skipped.length}:`);
        skipped.forEach(s => console.log(`  ${s}`));
    }
}

function writeIndex(built) {
    const groups = {};
    built.forEach(b => { (groups[b.group] = groups[b.group] || []).push(b); });
    const sections = Object.keys(groups).map(g =>
        `    <h2>${esc(g)}</h2>\n    <ul>\n` +
        groups[g].map(b => `      <li><a href="${b.id}/">${esc(b.name)}</a></li>`).join('\n') +
        `\n    </ul>`
    ).join('\n');

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Readings — Revolutionary Voices</title>
<style>${TOKENS}
${fontFaces("../fonts")}
${PAGE_CSS}
.wrap ul { margin:0 0 18px 18px; padding:0; }
.wrap li { margin:5px 0; }
.wrap h2 { color:var(--brand-deep); font-size:1.05rem; margin:18px 0 8px; }
.wrap > h1 { color:var(--brand-deep); margin:0 0 4px; }
.wrap a { color:var(--accent); }
</style>
</head>
<body>
<div class="wrap">
  <p class="eyebrow">Revolutionary Voices</p>
  <h1>Readings</h1>
  <p class="reading-tagline">${built.length} topics. Each one comes in four versions: Quick, Clear, Full and Deep.</p>
${sections}
</div>
</body>
</html>
`;
    fs.writeFileSync(path.join(OUT, 'index.html'), html, 'utf8');
}

main();

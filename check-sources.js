#!/usr/bin/env node
/* ============================================================
   Mechanical slur check for primary-source excerpts.
   Policy (research/DESIGN-DECISIONS.md): every candidate excerpt
   gets this check before shipping. Clean -> no special handling.
   Non-clean -> pick a different passage, or embed context at the
   point of encounter. This script FAILS the build on a hit so the
   decision is forced, never silent.

   Checks slurs, not period descriptive terms: "negro"/"colored"
   appear in these documents as period language and are handled by
   embedded framing, per the verified LC/RBMS-style guidance.

   Usage: node check-sources.js
   ============================================================ */

const fs = require('fs');
const vm = require('vm');

const sandbox = { window: {} };
vm.runInContext(
    fs.readFileSync(require('path').join(__dirname, 'sources.js'), 'utf8'),
    vm.createContext(sandbox),
    { filename: 'sources.js' }
);
const SRC = sandbox.window.RV_SOURCES;
if (!SRC) { console.error('sources.js did not define RV_SOURCES'); process.exit(1); }

/* Slur patterns. \W-boundaries; catches historical spelling variants. */
const SLURS = [
    /n[ie]gg[aeu]r/i,
    /\bnegur\b/i,
    /\bsambo\b/i,
    /\bdarkie\b/i, /\bdarkey\b/i,
    /\bpickaninn/i,
    /\bmulatto\b/i,   // flag for review: period-legal term, context required
    /\bsavages?\b/i,  // flag for review: dehumanizing in Native contexts
    /\bsquaw\b/i,
    /\bredskin/i,
    /\binjun\b/i
];

function scan(label, html) {
    if (!html) return [];
    const text = String(html);
    const hits = [];
    for (const re of SLURS) {
        const m = text.match(re);
        if (m) hits.push(`${label}: matched /${re.source}/ -> "...${text.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ')}..."`);
    }
    return hits;
}

let allHits = [];
for (const id in SRC) {
    const t = SRC[id];
    if (t.spotlight) {
        allHits = allHits.concat(
            scan(`${id}/spotlight.context`, t.spotlight.context),
            scan(`${id}/spotlight.text`, t.spotlight.text),
            scan(`${id}/spotlight.task`, t.spotlight.task));
    }
    (t.voices || []).forEach((v, i) => {
        allHits = allHits.concat(scan(`${id}/voices[${i}]`, v.q + ' ' + (v.who || '')));
    });
    if (t.twoSources) {
        allHits = allHits.concat(
            scan(`${id}/twoSources.a`, t.twoSources.a.text),
            scan(`${id}/twoSources.b`, t.twoSources.b.text),
            scan(`${id}/twoSources.question`, t.twoSources.question));
    }
}

if (allHits.length) {
    console.error(`SLUR CHECK FAILED — ${allHits.length} hit(s):`);
    allHits.forEach(h => console.error('  ' + h));
    console.error('Pick a different passage, or embed context at the point of encounter and consciously extend the pattern list rationale.');
    process.exit(1);
}
console.log(`Slur check passed: ${Object.keys(SRC).length} topics, 0 hits.`);

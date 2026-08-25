# Revolutionary Voices Script Builder

A browser-based tool that guides 8th-grade students through writing a podcast-style historical interview script. No accounts, no installs - works in any school browser.

**Live site:** [voices.mrbsocialstudies.org](https://voices.mrbsocialstudies.org)

---

## What it does

Students follow a 6-step wizard to build a radio-drama script in which a Host introduces a historical figure, a Narrator provides context, and the Subject (the historical figure) speaks in first person. The tool provides leveled research reading (available again while writing), sentence starters, verb banks, and a rubric at each step. A finished script includes a word count, estimated run time, and a practice read-aloud mode.

### Steps

| # | Step | What students do |
|---|------|-----------------|
| 1 | Basics | Enter their name and choose a topic. Podcast name is suggested. Group size is optional. |
| 2 | Research | Read the leveled source, optionally jot notes, then check that they are ready to write |
| 3 | Intro | Write the Host's hook. Open **Your reading** to keep the source on screen. |
| 4 | Content | Write the Narrator's scene-setting and the Subject's dialogue. Reading drawer stays available. |
| 5 | Conclusion | Write the wrap-up. Reading drawer stays available. |
| 6 | Finish | Preview the script, practice reading aloud, copy to a Google Doc, or submit |

---

## Features

- **Works offline** - fonts and icons are self-hosted; no CDN calls at runtime
- **No login required** - all work saved in the browser's `localStorage`
- **Multi-script storage** - students can save multiple drafts and switch between them
- **Export/import** - download a JSON backup to hand work between computers
- **Google Docs backup** - Copy to Google Doc and Restore live in the header (shared Chromebooks wipe local storage)
- **Dark mode** - toggle in the header, preference persisted
- **Leveled reading** - 22 historical topics, 4 language levels, same facts; hard words are glossed at every level (tap-to-reveal on the standalone reading pages, parenthetical in the app)
- **Practice mode** - timed read-aloud panel on the Finish step
- **Help me write** - examples, starters, and verb banks stay collapsed until a student asks
- **Reading drawer** - on Intro, Content, and Conclusion, **Your reading** opens the leveled source beside the script (bottom sheet on a narrow screen). Language level stays in sync with Research. Closed by default.

### Classroom notes

Typed notes on the Research step are optional. Many classes use a paper handout for notes from the reading and from other sources. The in-app drawer is the source text while students write, not a second worksheet.

---

## File structure

```
index.html         Page structure (wizard steps and writing fields)
app.js             Wizard logic, storage, script generation
styles.css         On The Air theme and layout
readings.js        Leveled reading library (22 topics, 4 levels, facts, sources)
sources.js         Primary-source library (Source Spotlight, Voice Bank, Two Sources)
check-sources.js   Mechanical slur check for excerpts (runs in pre-commit)
build-readings.js  Generates readings/ from readings.js (node build-readings.js)
readings/          GENERATED standalone reading pages, one clean URL per topic
                   (/readings/<topic>/) — edit readings.js, then rebuild
version.js         Build hash (updated by the pre-commit hook)
fonts/             Self-hosted Inter, Roboto Slab, Space Mono, Font Awesome CSS
webfonts/          Font Awesome icon font files (woff2)
```

### Primary sources

Six topics carry real period documents (`sources.js`), per the approved
design in the research notes: **Source Spotlight** on the Research step
shows a 150-250 word period excerpt alone - paraphrase is the student's
task, never supplied - with tap-to-reveal glosses; **Voice Bank** in the
writing drawer offers short quoted lines filtered to the current step;
**Two Sources, One Story** pairs excerpts in tension (currently Dunmore's
Proclamation vs. the Book of Negroes ledger). Text handling is OCR repair
only - wording, spelling, and punctuation stay period. Every excerpt
passes `node check-sources.js` (enforced by the pre-commit hook), and
period language is framed at the point of encounter, not warned about.
Topics so far (20 of 22): every topic except Joseph Brant (deferred
until an authentic first-person Brant text is verified) and Loyalists
(no strong period voice on hand yet).

### Standalone reading pages

`node build-readings.js` renders every topic in `readings.js` to a
self-contained page at `readings/<topic>/index.html`, so each reading has a
clean link (e.g. `/readings/phillis-wheatley/`). Pages inherit the On The Air
theme (light + dark), keep the four-level switcher, and share the
`rvReadingLevel` localStorage key with the app. Vocabulary glosses are
tap-to-reveal (hidden until requested); printing or disabling JS shows all
levels with glosses expanded as parentheticals. Regenerate after any edit to
`readings.js` — the pages are build output, not source.

---

## Versioning

This project uses [Semantic Versioning](https://semver.org):

- **MAJOR** - breaking change to saved-script format or major workflow restructure
- **MINOR** - new feature (new topic, new step, new export format)
- **PATCH** - bug fix, copy fix, style fix

See [CHANGELOG.md](CHANGELOG.md) for the full history.

Current version: **1.3.0**

---

## Development

Pure static site - no build step. Edit `index.html`, `app.js`, `styles.css`, or `readings.js` directly and open `index.html` in a browser.

To add a new reading topic, add an entry to `window.RV_READINGS` in `readings.js` (and a matching row in `window.RV_TOPICS`). Each topic needs `name`, `tagline`, `quickFacts`, four `levels` (`mostSupport`, `someSupport`, `standard`, `challenge`), `keyFacts` for hook/content/conclusion, and `sources`. Use the same facts at every level; gloss hard words on Most Support.

Deployed via GitHub Pages with a custom domain (`CNAME` file). Push to `main` to deploy.

---

## License

See [LICENSE](LICENSE).

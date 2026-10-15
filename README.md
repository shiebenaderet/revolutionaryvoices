# Revolutionary Voices Script Builder

A browser-based tool that guides 8th-grade students through writing a podcast-style historical interview script. No accounts, no installs - works in any school browser.

**Live site:** [voices.mrbsocialstudies.org](https://voices.mrbsocialstudies.org)

---

## What it does

Students build a podcast-style historical episode in which a Host, a Narrator and the Subject (the historical figure, in first person) tell an overlooked story of the Revolution. The first step asks how many people are making it, and that picks the path:

| Path | Steps | Where the script is written |
|---|---|---|
| **Crew** (2 to 4 people) | Start, Read, Plan, Group Doc, My Lines, Practice | Together, in a shared Google Doc |
| **Solo** | Start, Read, Hook, Story, Wrap, Finish | Here, one part at a time |

### Crew path

| Step | What students do |
|---|---|
| Start | Topic, podcast name, and the crew: each person checks one or more **jobs** (Researcher, Lead Scriptwriter, Chief Editor) and one or more **voices** (Host, Narrator, Subject). Jobs can be shared or split. |
| Read | Pick a reading by its first sentence, read it, build the **Fact Bank** (fact plus source), write a **working thesis**. |
| Plan | Episode map, pick a style for the Hook, Story and Wrap, and write one line per box. |
| Group Doc | **Copy the frame** and paste it into a new Google Doc, or **print a paper copy** with ruled lines. Share with the crew and the teacher. Students can change the frame or make their own. |
| My Lines | Each student, on their own Chromebook, builds the lines for their voice one box at a time. Help starts at their reading level: **Quick** taps words into short sentence frames (word banks in `builder-banks.js`, drawn only from the reading), **Clear** gets "Stuck?" starters, **Full** writes on lines, **Deep** adds a go-further move. Copy the lines into the Doc, or print the sheet. |
| Practice | Paste the finished script ("Maria: ...") to time it and rehearse line by line. |

### Jobs

- **Researcher:** leads the reading, builds the Fact Bank; in the Doc, fact-checks with comments.
- **Lead Scriptwriter:** picks the styles and fills the plan; in the Doc, drafts and stitches the lines together.
- **Chief Editor:** keeps the time target and checklist; in the Doc, works in Suggesting mode and times a read-aloud.
- **Everyone** reads at their own level and writes the lines for the voice they perform, which puts each student's writing in the Doc's version history.

---

## Features

- **Reading levels: Quick, Clear, Full, Deep** (formerly Level 0 to 3, and "Easier language" etc. here). The names describe the text, never the reader. 22 topics, same facts at every level, glossed vocabulary at every level.
- **Listen and Font** on every screen and reading page (`reader-tools.js`, ported from colonial-unrest): read-aloud with sentence highlighting; Atkinson Hyperlegible Next (default), Lexend, OpenDyslexic or Verdana; text size; wider spacing; Light / Dark. It is called "Font", not "dyslexia": a comfort setting, not an accommodation.
- **A handout in the studio:** a warm cream sheet on a walnut desk under a dark station masthead (On Air light, tuning-dial steps), Atkinson Hyperlegible Next, square boxes with brown rules, ruled writing boxes, one rust accent for actions, no decorative clutter. The paper copies (Group Doc, My Lines) use the same style, so screen and paper match. No letter-spaced capitals, no italic running text, nothing a student reads under 15px.
- **Works offline:** fonts and icons are self-hosted; no CDN calls at runtime.
- **No login:** work saves in the browser's `localStorage` and reopens on return. **My Work** lists scripts and holds **Back up** / **Restore** (a Google Doc copy with a restore code, or a file).
- **Primary sources** for every topic: Source Spotlight on Read, a Voice Bank in the writing drawer.
- **Reading drawer:** on the solo writing steps and Plan, **Your reading** opens the source beside the work.
- **Help me write:** examples, starters and word banks stay collapsed until a student asks.

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
crew.js            Crew path: crew table, Fact Bank, level cards, Plan, Group Doc frame, Practice
lines.js           My Lines: sentence frames by level (Quick / Clear / Full / Deep)
builder-banks.js   Quick-level word banks for the frames, one per topic, from readings.js only
reader-tools.js    Listen and Font (ported from colonial-unrest; changes marked ADAPTED)
fonts/             Self-hosted Atkinson Hyperlegible Next, Lexend, OpenDyslexic (OFL), Font Awesome CSS
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
All 22 topics are covered - from Sarah Osborn's pension deposition and
Brant's own letters to the 1777 petition of "A Great Number of
Blackes" and Blackstone's coverture in the original long-s spelling.

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

Current version: **3.2.0**

---

## Development

Pure static site - no build step. Edit `index.html`, `app.js`, `styles.css`, or `readings.js` directly and open `index.html` in a browser.

To add a new reading topic, add an entry to `window.RV_READINGS` in `readings.js` (and a matching row in `window.RV_TOPICS`). Each topic needs `name`, `tagline`, `quickFacts`, four `levels` (`mostSupport`, `someSupport`, `standard`, `challenge`, shown to students as Quick, Clear, Full, Deep), `keyFacts` for hook/content/conclusion, and `sources`. Use the same facts at every level; gloss hard words on Most Support.

Deployed via GitHub Pages with a custom domain (`CNAME` file). Push to `main` to deploy.

---

## License

See [LICENSE](LICENSE).

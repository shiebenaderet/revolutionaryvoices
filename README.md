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
- **Leveled reading** - 22 historical topics, 4 language levels, same facts; hard words are glossed on Most Support
- **Practice mode** - timed read-aloud panel on the Finish step
- **Help me write** - examples, starters, and verb banks stay collapsed until a student asks
- **Reading drawer** - on Intro, Content, and Conclusion, **Your reading** opens the leveled source beside the script (bottom sheet on a narrow screen). Language level stays in sync with Research. Closed by default.

### Classroom notes

Typed notes on the Research step are optional. Many classes use a paper handout for notes from the reading and from other sources. The in-app drawer is the source text while students write, not a second worksheet.

---

## File structure

```
index.html      Page structure (wizard steps and writing fields)
app.js          Wizard logic, storage, script generation
styles.css      On The Air theme and layout
readings.js     Leveled reading library (22 topics, 4 levels, facts, sources)
version.js      Build hash (updated by the pre-commit hook)
fonts/          Self-hosted Inter, Roboto Slab, Space Mono, Font Awesome CSS
webfonts/       Font Awesome icon font files (woff2)
```

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

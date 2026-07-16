# Revolutionary Voices Script Builder

A browser-based tool that guides 8th-grade students through writing a podcast-style historical interview script. No accounts, no installs - works in any school browser.

**Live site:** [voices.mrbsocialstudies.org](https://voices.mrbsocialstudies.org)

---

## What it does

Students follow a 6-step wizard to build a radio-drama script in which a Host introduces a historical figure, a Narrator provides context, and the Subject (the historical figure) speaks in first person. The tool provides leveled research reading, sentence starters, verb banks, and a rubric at each step. A finished script includes a word count, estimated run time, and a practice read-aloud mode.

### Steps

| # | Step | What students do |
|---|------|-----------------|
| 1 | Basics | Enter their name, choose a topic and reading level, assign group roles |
| 2 | Research | Read leveled source material and pull key facts |
| 3 | Intro | Write the Host's dramatic hook and subject introduction |
| 4 | Content | Write the Narrator's scene-setting and the Subject's dialogue |
| 5 | Conclusion | Write the Narrator's wrap-up and Host's closing |
| 6 | Finish | Preview the finished script, practice reading aloud, export or submit |

---

## Features

- **Works offline** - fonts and icons are self-hosted; no CDN calls at runtime
- **No login required** - all work saved in the browser's `localStorage`
- **Multi-script storage** - students can save multiple drafts and switch between them
- **Export/import** - download a JSON backup to hand work between computers
- **Google Docs integration** - optional copy-to-Doc button for cross-device backup
- **Dark mode** - toggle in the top-right corner, preference persisted
- **Leveled reading** - 22 historical topics, 4 reading levels, with cited sources
- **Practice mode** - timed read-aloud panel on the Finish step

---

## File structure

```
index.html      Main app (HTML + embedded CSS/JS in one file for easy school deployment)
app.js          Core JavaScript (wizard logic, storage, script generation)
styles.css      All styles
readings.js     Leveled reading library (22 topics, 4 levels, facts, sources)
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

Current version: **1.1.0**

---

## Development

Pure static site - no build step. Edit `index.html`, `app.js`, `styles.css`, or `readings.js` directly and open `index.html` in a browser.

To add a new reading topic, add an entry to `readings.js` following the existing schema: `{ id, title, levels: { 1: { intro, sections: [{heading, body, facts}] } } }`.

Deployed via GitHub Pages with a custom domain (`CNAME` file). Push to `main` to deploy.

---

## License

See [LICENSE](LICENSE).

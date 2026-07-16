# Changelog

All notable changes to Revolutionary Voices Script Builder are documented here.

Format: [Semantic Versioning](https://semver.org) - `MAJOR.MINOR.PATCH`

---

## [1.0.0] - 2026-07-16

First stable release. Fully redesigned broadcast-studio UI with a 6-step guided wizard, multi-script storage, offline-ready fonts, and a polished teacher-and-student workflow.

### Added

- **6-step wizard** - Basics, Research, Intro, Content, Conclusion, Finish with a tuner-dial step navigator
- **Named roles** - Host, Narrator, and Subject each have a labeled chip and a live name preview
- **Leveled reading library** - 22 topics across 4 reading levels with section facts and cited sources
- **Multi-script storage** - save, switch, and delete multiple scripts per browser via `localStorage`
- **Export/import backup** - download a JSON backup and restore it on any computer
- **Cloud sync** - optional Google Docs integration for cross-device persistence
- **Practice mode** - Finish step toggles a read-aloud panel with a word count and time estimate
- **Starter buttons** - one-click sentence starters that substitute `[subject]` and `[name]` tokens
- **Verb bank** - collapsible strong-verb suggestions per writing section
- **Collapsible key facts panel** - research facts appear inline on Steps 3-5 and collapse when not needed
- **Rubric boxes** - grading rubric collapsed by default on each step, revealed on demand
- **Progressive reveal on Step 1** - secondary fields appear once name and topic are filled
- **Dark mode** - full dark-theme toggle stored in `localStorage`
- **Self-hosted fonts** - Inter, Roboto Slab, Space Mono, and Font Awesome served locally to avoid school CDN/firewall blocks
- **Style-switch warning** - switching intro/content/conclusion style while content exists shows a toast instead of silently hiding work
- **localStorage quota error handling** - user-facing toast with instructions if storage is full

### Fixed

- Narrator role labels corrected to "Host" terminology throughout
- Historical accuracy: Crispus Attucks script language made more precise
- Tooltip and starter button font: removed Space Mono (was rendering all-caps); switched to Inter body font
- Overflow menu dropdown: removed `overflow: hidden` from header that was clipping the dropdown; fixed alignment with `width: fit-content` on the `<details>` container
- Step headings unified as `<h2>` elements across all 6 steps
- Stale "Open saved work" help text updated to match the new `...` menu location
- `showToast()` now accepts numeric duration for error-length messages

### Removed

- 12 "check-reminder" boxes (noise on every step)
- 2 comparison boxes
- Duplicate time estimator (replaced by live time badge)
- "New script" save chip from the header toolbar
- EASY/CHALLENGE difficulty badges from starter buttons
- All CDN dependencies (Google Fonts, Font Awesome CDN)

---

## [0.x] - Pre-release

Iterative development. See git log for full history.

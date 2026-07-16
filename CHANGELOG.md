# Changelog

All notable changes to Revolutionary Voices Script Builder are documented here.

Format: [Semantic Versioning](https://semver.org) - `MAJOR.MINOR.PATCH`

---

## [1.1.0] - 2026-07-16

### Added

- **Onboarding sentence** on Step 1: "Fill in your name and topic to get started. You'll write your script step by step."
- **`nudge-pulse` animation**: empty required fields briefly pulse an orange outline when a student tries to skip ahead
- **Skip link**: keyboard/screen reader shortcut to jump directly to the current wizard step
- **Screen reader announcement** when a sentence starter is inserted (`aria-live="polite"`)
- **Google Docs backup toast** shown after completing Step 1 (Basics), nudging students to back up early

### Changed

- Step navigator locked-step message now names the specific step to complete: "Finish Basics first to unlock this step"
- **Copy updates**: "Subject/Topic of Your Episode" - "Your Episode Topic"; "Research Notes & Sources (recommended)" - "Notes from your reading (optional but helpful)"; Google Docs bar label - "Keep a copy in Google Docs (so you don't lose your work)"
- **Storage-full message** rewritten in student-friendly language with actionable advice
- **Style-switch toast** simplified: "Switch back anytime to see your original writing"
- Practice bar and nav buttons: legacy indigo (`#667eea`) replaced with warm palette (`--accent`, `--brand`)
- Touch targets bumped to 40px minimum height/width for icon buttons and practice controls (WCAG 2.5.5)
- "Your Complete Script" h2 color: hardcoded `#667eea` replaced with `var(--accent)`
- Back button styled as ghost (transparent background, muted border) to visually de-emphasize it vs. Next

### Fixed (accessibility - WCAG AA)

- **Color system overhaul**: replaced all legacy cold-palette hardcodes (indigo `#667eea`, purple `#764ba2`, cold blue `#1565c0`, cold green `#4caf50`, amber `#ff9800`) with the warm brand palette across ~30 rules in styles.css lines 92-200
- **`--muted` token darkened** from `#7a6a58` to `#5c4f3d` (affects all muted-text consumers at once)
- **`--callout-bg` token added** (`#fdf3d8`): unifies all callout/note backgrounds; replaced all cold callout colors (`#e3f2fd`, `#e8f5e9`, `#fff3cd`)
- **Focus ring tokens**: `--focus: #d4661a` for page elements; `--focus-on-dark: #e0a52e` for header elements (dark-on-dark was previously invisible)
- Info icon ARIA: 19 `role="img"` instances corrected to `role="note"` (non-interactive tooltip triggers)
- Duplicate `role="region"` removed from `#scriptOutput`; kept on `#finalScriptRegion`
- Role-name inputs now have explicit `<label>` elements with visible chip previews
- Overflow menu rebuilt from `<details>` to `button + role="menu" div` with keyboard arrow nav, click-outside close, and Escape to dismiss (was: no keyboard nav, no ARIA menu semantics, contrast failure due to specificity battle)

---

## [1.0.1] - 2026-07-16

### Fixed (accessibility)

- Dropdown menu select ("Open saved work...") was inheriting the header's near-white text color on a near-white background (~1.05:1). Added explicit `color: var(--ink)` so it renders dark-on-light (>7:1).
- `.script-section-name` role labels in the finished script: `#767676` on white (3.99:1, fails) changed to `#595959` (6.99:1).
- `.step-facts summary::after` chevron and `.time-badge-long` text: `#c8860a` on light yellow (~3.60:1, fails) changed to `#6b4e00` (5.5:1).
- `.basics-divider` label: `#667eea` on `#f5ead3` page background (4.44:1, fails) changed to `#6b4e00` (5.5:1).

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

# Revolutionary Voices — Usability Improvements
*Design spec · 2026-07-15*

## Goal

Help students build usable, high-quality podcast scripts about the Revolutionary War. The primary friction point is an overwhelming first screen that stalls students before they start. Secondary issues: research facts disappear when writing begins, the final script is hard to use for read-aloud practice, and historical accuracy errors exist in verbatim student-facing examples.

## Context

- Pure static single-page app: `index.html`, `app.js`, `styles.css`, `readings.js`
- Students arrive with a topic and completed preliminary research notes — they are not cold
- Classroom workflow: students write script, read aloud with partner to check length/quality, then submit to Canvas
- Local `localStorage` only — cloud sync layer is out of scope (removed)
- No build system; all changes are direct HTML/CSS/JS edits

## Scope: Five Improvements

---

### 1. Step 1 Progressive Reveal (opening overwhelm fix)

**Problem:** Step 1 shows 5 fields simultaneously on load. Students freeze.

**Solution:** On first load, Step 1 shows only Name and Topic (the identity fields). Once both are filled, a "More options" divider animates in below, revealing Podcast Name, Research Notes, and Group Size. No extra click or screen required — same step, same form, fields appear in place.

**Implementation details:**
- Name (`#studentName`) and Topic (`#subject`) are the primary fields; always visible
- A `<div class="basics-more">` wraps the secondary fields (Podcast Name, Research Notes, Group Size); starts with `opacity: 0; max-height: 0; overflow: hidden` and transitions to visible when both primary fields have values
- The transition is triggered by an `input` listener on both primary fields calling a new `checkBasicsReveal()` function
- If a student reloads with saved data, `applyData()` already fills fields; `checkBasicsReveal()` runs after `applyData()` to ensure secondary fields are visible
- Research Notes label updated to: "Research Notes and Sources (recommended)" — never blocks Next

**What does NOT change:** wizard gate logic (Name + Topic still required to advance), field order, placeholder text, helper toggles

---

### 2. Collapsible Key Facts Panel (Steps 3, 4, 5)

**Problem:** Students read research on Step 2 (Research) then have no reference to those facts while writing on Steps 3-5.

**Solution:** A collapsible amber chip labeled "Key facts for your [Section]" appears at the top of each writing step (Introduction, Content, Conclusion). Collapsed by default — one line, one tap. Expanded state shows 3-5 bullet facts from `readings.js` tagged for that section, at the student's current reading level.

**Implementation details:**
- `readings.js` already has `keyFacts.hook`, `keyFacts.content`, `keyFacts.conclusion` arrays per topic
- A new `rvRenderStepFacts(stepIndex)` function (already partially stubbed in `app.js`) populates a `.step-facts` div injected at the top of each writing section
- The chip is an HTML `<details>/<summary>` element for native collapse behavior and accessibility
- Reading level tracks `rvLevelCur` (already persisted in `localStorage` under `rvReadingLevel`); facts re-render if the student changes level on Step 2 and returns
- Chip color: amber (`#fffbea` background, `#f9a825` border) — visually distinct from purple navigation and green success states, reads as "reference material"
- Footer note inside the panel: "Use these facts in your script - put them in your own voice, don't copy word-for-word."
- Solo students (no topic selected): chip shows "Choose your topic on the Basics step to see key facts here."

**What does NOT change:** the Research step itself, reading level pills, the `readings.js` data structure

---

### 3. Formatted Script Output + Live Time Estimate + Named Roles

**Problem:** (a) Time estimate only appears after clicking Build — students have no length feedback while writing. (b) Generated script is a plain `<pre>` text dump, hard to scan for read-aloud practice. (c) Speaker labels are generic (HOST, NARRATOR, SUBJECT) with no student names.

**Solution — three parts:**

**3a. Live time badge in wizard nav bar**
A small badge in the bottom nav strip (`#wizardNav`) shows running estimate while writing: `~2:30 · need more` (gray), `~4:15 · good length` (green), `~7:00 · too long` (amber). Updates on every `input` event via the existing `updateTimeEstimate()` function. Uses `Space Mono` font to match the broadcast theme. Only appears from Step 3 onward (not on Basics or Research steps where no script content exists yet).

**3b. Formatted script output**
Replace the `<pre id="scriptOutput">` with a styled `<div id="scriptOutput">` that renders:
- Dark header bar with podcast name, student names, topic, and time estimate in green
- Section dividers: horizontal rule with section name label centered (INTRODUCTION, CONTENT, CONCLUSION) in `Space Mono`
- Each line rendered as: colored speaker chip + script text paragraph
- Speaker chip colors: HOST/NARRATOR = purple (`#667eea`/`#764ba2`), SUBJECT = orange (`#e65100`)
- Chips show student-assigned names (see 3c) rather than generic labels
- Copy and Download buttons produce plain text (same format as current `<pre>`) for Canvas compatibility — the formatted view is display-only

**3c. Role name assignment**
A "Who's playing each part?" card appears at the top of the Finish step, before the Build button. Students type their first name next to each role. A live preview chip shows the result. Clicking "Build my script with these names" runs `generateScript()` with names substituted.
- Solo (group size 1): role card skipped entirely; speaker chips use the content format label (HOST, NARRATOR, etc.)
- Pair (group size 2): HOST and SUBJECT roles shown
- Group (group size 3): HOST, NARRATOR, and SUBJECT roles shown
- Role names stored in `localStorage` with the rest of the form data via `getAllFormData()`
- Exported plain text uses real names: `MARIA:` instead of `HOST:`

**3d. Practice mode**
A "Start practice" button above the script enters practice mode:
- All lines dimmed to 22% opacity except the current line (full opacity, purple left border highlight, bold text)
- "Prev / Line N of N / Next" controls navigate line by line
- "Stop" exits practice mode and restores full opacity
- Implemented in plain JS; no dependencies
- Does not alter script content

---

### 4. Historical Accuracy Fixes

Three verbatim corrections to student-facing example text in `index.html`:

1. James Armistead model script: `the Armstead family who owned me` → `the Armistead family who owned me`
2. Attucks interview line: `When the soldiers opened fire, I was the first to fall. I never knew I'd be remembered as the first to die for American freedom.` → `When the soldiers opened fire, I was one of the first to fall. Many would later remember me as the first to die for American freedom - though five of us were killed that night.`
3. Attucks conclusion line: `He was the first to fall, but his story` → `He is often remembered as the first to fall, but his story`

---

### 5. Accessibility and Icon Fixes

1. **Invalid Font Awesome icons** (render as blank boxes): `fa-thinking` → `fa-lightbulb`, `fa-thought` → `fa-comment-dots`, `fa-uncomfortable` → `fa-circle-exclamation`
2. **Low-contrast helper text:** `#ff6b6b` → `#c62828` (length target helper text, used throughout writing steps)
3. **Low-contrast info icon color:** `#2196f3` → `#1565c0` (info icon tooltips)

---

## Files Changed

| File | Changes |
|------|---------|
| `index.html` | Step 1 secondary field wrapper, role assignment card, script output div, accuracy fixes, icon fixes |
| `app.js` | `checkBasicsReveal()`, `rvRenderStepFacts()` completion, role name storage, `generateScript()` formatted output, practice mode logic, time badge in nav |
| `styles.css` | `.basics-more` transition, `.step-facts` chip styles, `.script-doc` formatted output styles, `.speaker-chip` color variants, `.practice-active`/`.practice-dim`, time badge, role card |

## Out of Scope

- Cloud sync / Cloudflare worker (removed separately)
- Rubric accuracy scoring (separate initiative)
- Shared-Chromebook slot menu namespace (separate initiative)
- New topics or readings content
- Visual redesign / broadcast theme changes

## Success Criteria

- A student who opens the tool for the first time sees exactly two fields on Step 1
- A student on Step 3 can tap one chip to see 3-5 facts relevant to their introduction without leaving the step
- A student on the Finish step sees their time estimate before clicking Build
- A student can enter practice mode and advance line by line using their real names on every speaker chip
- Historical accuracy errors are corrected in all verbatim examples
- No invalid Font Awesome icons remain; contrast ratios meet WCAG 2.2 AA (4.5:1) for all helper text

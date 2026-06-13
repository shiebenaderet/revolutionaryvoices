# Mock-up & Apply Workflow

How to build the comparison mock-ups, and how to safely apply the chosen one to the real site.

## Part A — Building the mock-ups

### Goal
Give the teacher **glanceable, clickable choices**. Each concept is a single self-contained HTML file that shows the design language on a *representative slice* of the real product — not a full re-skin of every page. A faithful slice (header + one content section + form fields + buttons + a callout) communicates the whole design world at a fraction of the effort and lets the teacher judge fairly.

### Why representative samples, not the whole app
Rebuilding a 100KB+ page three times is slow, error-prone, and buries the design decisions in noise. Designers mock up a *style*, get sign-off, then roll it out. The Apply step (Part B) is where the chosen language reaches the full site.

### Steps

1. **Pull real content.** Lift actual headings, labels, helper text, and example copy from the site so each mock-up reads like the real product. Authenticity makes the comparison meaningful.

2. **Pick the representative component set.** Include enough that the language is legible and the five desks all have something to show:
   - the site header / title block
   - one or two content sections (ideally showing the color-coding system if there is one)
   - a couple of form fields with labels + helper text
   - a button row (primary + secondary)
   - a callout / example / rubric box
   - any signature component the site leans on
   Keep the same components across all concepts so the only variable is design.

3. **Build each concept as ONE self-contained file** (`mockups/concept-N.html`):
   - All CSS in a `<style>` block; expose the palette and type as CSS custom properties at `:root` so the design tokens are easy to read and later extract.
   - Load fonts from Google Fonts (`<link>`) or use a system stack. State the exact font names in a comment for the Apply step.
   - Wire **live** hover/focus states and the concept's signature motion, gated behind `@media (prefers-reduced-motion: no-preference)`.
   - Add a small fixed "concept label" badge (name + one-line promise) in a corner so the teacher always knows which they're viewing.
   - Make it responsive enough to view on a laptop; cap reading width per the principles.

4. **Make the three genuinely distinct.** Spread them along the Art Director's personality axis (e.g. Calm-Focused / Bold-Playful / Bright-Energetic). Different type pairings, different palette *temperatures*, different motion personalities, different decoration strategies. Distinctness test: recolor-swap them in your head — do they still read as different designs? If not, push harder.

5. **Build the gallery** (`mockups/index.html`):
   - One tile per concept, laid out side by side, each showing the concept name + promise + a **live scaled-down preview** of `concept-N.html` via an `<iframe>` wrapped in a `transform: scale(...)` container (a "live thumbnail" — it even shows motion). Each tile links/opens the full preview.
   - Below the tiles, a compact comparison: rationale paragraph + accessibility/pedagogy verdict per concept.
   - This gallery is the teacher's home base for the round.

6. **Optional PNG thumbnails.** If a headless browser is available, run `scripts/render_thumbnails.py` to also produce flat PNGs (useful for pasting into emails/docs). The live-iframe tiles are the dependency-free default and are usually better for judging feel.

### Output layout
```
design-mockups/
├── index.html          # gallery (start here)
├── concept-1.html      # live preview
├── concept-2.html
├── concept-3.html
└── thumbnails/         # optional PNGs
```

## Part B — Applying the chosen concept

Once the teacher picks (or asks for a blend), roll the design language into the real files.

### Steps

1. **Confirm the pick** and any blend instructions ("Concept 2's type, Concept 1's color"). Restate what you're about to change.

2. **Back up originals.** Copy each file you'll touch to a dated backup beside it, e.g. `styles.css` → `styles.backup-YYYYMMDD.css`, `index.html` → `index.backup-YYYYMMDD.html`. This is the teacher's undo button — never skip it.

3. **Extract the concept's tokens** from its `:root` custom properties and font links: the palette, font families + the Google Fonts `<link>`, radius/shadow/spacing values, and the motion rules.

4. **Apply surgically, preserving structure and content:**
   - Add the font `<link>` to the real `<head>`.
   - Update the real CSS: font-family declarations, the color variables / color values, border-radius, shadows, spacing rhythm, and the hover/focus/motion rules — including the `prefers-reduced-motion` guard.
   - Preserve the existing **color-coding system's meaning** even if you modernize the hues: map old code → new code one-to-one.
   - Don't rewrite markup, JS, content, or behavior. This is a surface restyle. Touch HTML only where a class/structure change is needed to support the new look, and keep all existing semantics, labels, and ARIA intact.

5. **Re-check the gate.** After applying, sanity-check contrast, focus visibility, and reduced-motion on the real page. A concept that passed as a mock-up must still pass in situ.

6. **Summarize the diff.** Tell the teacher exactly what changed (fonts, colors, radii, motion), where the backups are, and how to revert (restore the backup file). Offer to tweak.

### Safety notes
- Work on the real files only after explicit confirmation, and only with backups in place.
- If the site is in git (check for `.git`), mention they can also `git diff` / `git checkout` to review or revert.
- Never touch unrelated files. Keep the change reviewable.

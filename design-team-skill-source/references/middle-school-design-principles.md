# Design Principles for Middle-School Learners (ages ~11–14)

The source of truth for every design decision. When a concept choice can't be traced to something here, either find the principle or justify the deviation out loud.

The guiding tension for this age group: **engaging but not babyish, structured but not corporate.** Eleven-to-fourteen-year-olds are insulted by cartoonish "kid" design and overwhelmed by dense adult interfaces. Aim for confident, clear, lightly playful.

## Contents
1. Typography
2. Color & contrast
3. Motion & interaction
4. Illustration & iconography
5. Cognitive load & pedagogy
6. Accessibility (the gate)
7. Age-appropriateness
8. Quick-reference checklist

---

## 1. Typography

Developing readers benefit from larger text, generous spacing, and unambiguous letterforms. Small, tight, low-contrast type is the single most common way educational sites fail this age group.

- **Body size:** 18px minimum (16px absolute floor). This age reads more slowly than adults; do not make them squint.
- **Line height:** 1.5–1.7 for body text. Air between lines reduces line-skipping.
- **Line length:** target 60–75 characters per line. Long full-width paragraphs are exhausting; cap content width (~65ch / ~700px).
- **Hierarchy:** clear, large jumps between levels (e.g. h1 ~2–2.5rem, h2 ~1.5–1.75rem, body 1.125rem). Students should be able to scan structure at a glance.
- **Font choice:** humanist sans-serifs with open apertures and a tall x-height read best on screen (e.g. Inter, Source Sans, Nunito Sans, Lexend, Atkinson Hyperlegible). Lexend and Atkinson Hyperlegible are explicitly designed for reading proficiency and low vision respectively — strong, defensible picks.
- **Pairing:** at most two families — one for headings (can have personality), one for body (must be calm and legible). A friendly rounded heading + neutral body is a reliable combo.
- **Avoid:** all-caps for anything longer than a short label (hurts word-shape recognition); light/thin weights for body; justified text (creates rivers and uneven spacing); decorative display fonts for reading content.
- **Letter/word spacing:** slightly positive letter-spacing on headings is fine; never condense body text.
- **Dyslexia-friendliness:** good general typography *is* dyslexia-friendly typography — generous spacing, clear letterforms, left-aligned ragged-right text, no italics for long passages. Lexend and Atkinson Hyperlegible are good defaults if a concept leans into accessibility.

## 2. Color & contrast

Color sets mood and, in many learning tools, carries meaning (color-coded sections). Both jobs must survive a colorblind student and a cheap classroom projector.

- **Contrast:** meet WCAG AA — 4.5:1 for body text, 3:1 for large text (≥24px or ≥19px bold) and for meaningful UI borders/icons. Aim higher for primary reading text. Dark gray on white (e.g. #2b2b2b) beats pure black for long reading.
- **Palette size:** 3–5 core colors plus neutrals. A primary, a secondary/accent, a couple of supporting hues, and a neutral ramp. More than that reads as chaos.
- **Never rely on color alone** to convey meaning. Pair every color-code with a label, icon, or shape. A student who can't distinguish your green "Content" from your orange "Conclusion" must still know which is which.
- **Backgrounds:** prefer off-white / very light tints over pure #fff for large reading areas (less glare). Keep text areas calm; save saturated color for accents, headers, and wayfinding.
- **Mood by age:** this group responds to confident, slightly saturated palettes — not pastel-baby, not muted-corporate. Think "energetic but grounded."
- **Dark mode:** if offered, don't invert to pure black; use a dark slate (#1a1d23-ish) with off-white text (~#e8e8e8), and re-check contrast — saturated accents often need lightening on dark.
- **Color-coding systems:** when the content already uses color to organize (e.g. sections by stage), preserve the *system* but you may modernize the hues. Keep the codes distinguishable in both hue and lightness.

## 3. Motion & interaction

Motion should **teach, confirm, or guide attention** — never just sparkle. For this audience, purposeful micro-feedback builds confidence ("it saved!", "this is clickable"); gratuitous motion distracts and can harm focus or trigger vestibular discomfort.

- **Purpose test:** every animation answers "what does this tell the student?" Button depresses = registered. Checkmark slides in = saved. Section expands = more here. If there's no answer, cut it.
- **Duration:** 150–300ms for UI feedback; up to ~500ms for larger entrance transitions. Faster feels responsive; slower feels laggy to kids.
- **Easing:** ease-out for entrances, ease-in-out for state changes. Avoid linear (feels mechanical) and extreme bounce on functional elements (feels toy-like for this age).
- **Hover & focus:** give interactive elements a clear, quick state change (color, lift, border). Focus states are not optional — keyboard users and screen-reader users depend on them (see Accessibility).
- **`prefers-reduced-motion`:** REQUIRED. Wrap non-essential motion in `@media (prefers-reduced-motion: no-preference)`, or disable transforms/animations under `reduce`. Some students get motion sickness or distraction from movement; honor the OS setting.
- **Avoid:** autoplaying loops, parallax that fights reading, things that move while the student is trying to read text, attention-stealing animation near form fields.
- **Micro-interactions worth having:** save/confirmation feedback, progress indication, gentle reveal of help/examples, button press feedback, smooth (but quick) accordion open/close.

## 4. Illustration & iconography

Visuals aid comprehension and warmth, but for 11–14s they must feel current, not "for little kids," and never compete with the content.

- **Icons:** use a single consistent set (e.g. Font Awesome, Lucide, Phosphor). Always pair an icon with a text label for meaning — icons alone are ambiguous. Keep stroke weight and style consistent across the set.
- **Illustration style:** if a concept uses spot illustration, pick ONE coherent style (flat geometric, soft organic, line-art, etc.) and stay in it. Inclusive, modern, not saccharine. Decorative blobs/shapes/gradients are a low-risk way to add personality without clutter.
- **Visual metaphors:** can scaffold understanding (a "stage" or "step" metaphor for a multi-part task). Use sparingly and consistently.
- **Restraint:** decoration must never reduce contrast of nearby text or crowd the reading column. White space is a feature. When in doubt, less.
- **Originality:** create original illustration/decoration; never reproduce a known artist's or brand's work.

## 5. Cognitive load & pedagogy

The interface is part of the lesson. A confusing UI taxes working memory the student needs for the actual content.

- **Chunking:** break tasks into clear, labeled sections/steps. Visual grouping (cards, dividers, color-codes) should mirror the conceptual structure.
- **Progressive disclosure:** hide advanced/optional/example content behind expanders so the default view isn't overwhelming. Reveal on demand.
- **Predictability & consistency:** same kind of thing looks and behaves the same way everywhere. Consistent placement of help, buttons, and navigation lowers load.
- **Affordances:** make clickable things obviously clickable (buttons look like buttons, inputs look like inputs). Don't make students hunt.
- **Scaffolding:** helper text, examples, sentence starters, and rubrics are pedagogically valuable — style them as clearly *supportive* (distinct, calm, secondary) rather than as noise.
- **Plain language & clear labels:** short, concrete, friendly microcopy. Encouraging tone without being patronizing.
- **Feedback:** confirm actions (saved, completed, error) clearly and immediately. Uncertainty is stressful for students.
- **Touch targets:** ≥44×44px for anything tappable — many students are on Chromebooks with touchscreens or tablets.

## 6. Accessibility (the gate)

A concept that fails here fails, full stop. Schools also frequently have legal accessibility obligations.

- **Contrast:** WCAG AA minimums (see §2). Check actual values, don't eyeball.
- **Keyboard:** everything operable by keyboard; visible focus indicator on every interactive element (a real outline/ring, not just a color shift).
- **Color independence:** meaning never carried by color alone (see §2).
- **Motion:** honor `prefers-reduced-motion` (see §3).
- **Semantics:** proper headings, labels tied to inputs, alt text on meaningful images, ARIA only where needed. (Mock-ups can keep the real markup's semantics intact.)
- **Scalability:** layout survives 200% zoom and larger system font sizes without breaking.
- **Targets:** ≥44px touch targets (see §5).

## 7. Age-appropriateness

The hardest thing to get right, and the most subjective — so make it explicit per concept.

- **Not babyish:** avoid primary-color-block "kindergarten" palettes, comic fonts, bouncing cartoon mascots. Middle-schoolers want to be taken seriously.
- **Not corporate:** avoid gray-on-gray enterprise SaaS sterility. It reads as boring and cold to a 12-year-old.
- **The sweet spot:** confident color, a little playfulness in shape/motion/illustration, clean structure, and respectful tone. Think "cool school app," "modern museum kids' wing," or "well-designed educational game menu."
- **Identity:** a touch of theme that matches the subject (e.g. a history tool can feel a little editorial/archival) helps students feel the content is real and worth their time.

## 8. Quick-reference checklist

Run every concept against this before it ships:

- [ ] Body text ≥18px, line-height ≥1.5, line length ≤75ch
- [ ] ≤2 font families; legible humanist body face
- [ ] 3–5 core colors; off-white reading background
- [ ] All body text ≥4.5:1 contrast; large text/UI ≥3:1
- [ ] No meaning by color alone (codes have labels/icons)
- [ ] Visible keyboard focus on every interactive element
- [ ] Touch targets ≥44px
- [ ] Motion is purposeful, 150–300ms, ease-out, and respects `prefers-reduced-motion`
- [ ] One consistent icon set; icons paired with labels
- [ ] One coherent illustration/decoration style, not crowding text
- [ ] Optional/advanced content behind progressive disclosure
- [ ] Reads as engaging-but-mature: neither babyish nor corporate
- [ ] Original artwork only

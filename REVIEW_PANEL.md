# Review Panel — Revolutionary Voices Script Builder
*Five expert lenses, run independently against the live code, then consolidated. Date: 2026-06-13.*

## Scores at a glance

| Lens | Score |
|------|-------|
| Pedagogy & historical accuracy | 6.5 / 10 |
| Accessibility & ELL (WCAG 2.2 AA) | 7 / 10 |
| Distracted 7th-grader (UX) | 6 / 10 |
| Security & student privacy | 4 / 10 |
| Skeptic / architecture | 5 / 10 |

The teaching and accessibility work is genuinely above average. The drag is the cloud layer: it's the weakest part on security, UX, and maintainability all at once.

## Blockers (fix before another class uses the cloud sync)

1. **The cloud has no real access control.** Anyone who knows a class code (kids share these) can read, overwrite, or forge any student's work — `/load` and `/save` in `worker/worker.js` only check class code + student name, neither of which is secret. Overwrite is silent (upsert). This is a FERPA/COPPA-relevant exposure of minors' names + writing, not theoretical.
2. **Teacher key leaks via the URL.** `teacher.html` puts the key in the query string (`&key=`), so it lands in Worker logs and browser history. It unlocks the whole class roster. Move it to a request header and rotate it.
3. **Graded work can silently vanish.** A student who never types a class code (or closes the Chromebook before the 2.5s cloud debounce) has work only in one browser's localStorage — wiped by nightly district imaging. Cloud save isn't guaranteed.
4. **Student PII sits in a personal Cloudflare account** with no district data-processing agreement. If the cloud layer stays, it must run on a school-owned account.

## Cross-cutting themes (multiple reviewers, same issue)

- **Shared-Chromebook slot menu** (pedagogy, UX, security): "Open saved work…" lists *every* name saved in that browser. Kids see, edit, and can delete classmates' work. Namespace slots by name or hide the global list.
- **Everything-at-once overwhelm** (UX, accessibility, skeptic): ~60 boxes and 150+ buttons render on load with no "start here." Collapse Steps 2–4 by default; open on just the Name field.
- **Drama is rewarded, evidence isn't** (pedagogy): every starter/verb pushes vivid/shocking, but the rubric never scores historical accuracy or sourcing. A vividly fabricated script can score "excellent." Add an accuracy/sources criterion.
- **"Generate" oversells** (UX): the magic-wand "Generate My Script!" only concatenates what the student typed. Relabel "Build / Put It All Together."

## The strategic conflict to decide

The skeptic argues the entire cloud/slot/teacher-dashboard layer reimplements what Google Classroom + a Doc template already do for free — and recommends deleting it, which makes blockers 1–4 plus the bus-factor risk evaporate in one cut, keeping the (excellent) stateless writing scaffold. The security reviewer instead offers a path to *fix* the cloud (per-student tokens, header auth, rate limiting, delete endpoint).

**Recommendation:** decide this first, because it determines whether the security work is worth doing. If your school runs Google Classroom, the skeptic's cut is the lower-risk, lower-maintenance call. If the cloud sync solves a real problem Classroom doesn't, commit to hardening it properly on a school-owned account.

## Quick wins (high impact, small effort — do regardless)

- Fix "Armstead" → "Armistead" in the model script (the version students copy verbatim).
- Soften Attucks "first to fall / first to die" from settled fact to "often remembered as."
- Move "Start Over" away from the export buttons and make deletion recoverable (one-click nuke risk).
- Fix sub-4.5:1 contrast on length-target helper text (`#ff6b6b`) — the text ELL students rely on most.
- Move focus to the generated script after "Build" + give it `aria-live`/a region label (currently silent to screen readers).
- Swap invalid Font Awesome icons (`fa-thinking`, `fa-uncomfortable`, `fa-thought`) that render as blank boxes.

## Recommended fix order

1. **Decide the cloud question** (strategic conflict above). Everything else flows from it.
2. **If cloud stays:** blockers 1–4 — per-student token, header auth + key rotation, mandatory class code / synchronous save, school-owned account.
3. **Quick wins** (list above) — an afternoon's work, all user-visible.
4. **UX flow:** collapse steps + open on Name field; fix the shared-Chromebook slot menu.
5. **Accessibility foundation:** add `<main>`/`<nav>` landmarks + skip link; wrap radio groups in `<fieldset>/<legend>`.
6. **Pedagogy depth:** add accuracy/sources to the rubric; ship a real C3-aligned analytic rubric in the teacher view; add a "writing in someone else's voice responsibly" note.
7. **Maintainability:** a startup assertion that every id `app.js` references exists in the DOM; a one-page runbook so the project survives you leaving.

---
*Full per-lens findings with line-number citations were produced by each reviewer; this is the consolidated synthesis.*

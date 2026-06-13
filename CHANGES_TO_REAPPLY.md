# Changes to re-apply after the redesign lands

This is a checklist of every change made during the review-fix pass, so it can be
re-applied onto the **refreshed** `index.html` / `styles.css` after the new
"broadcast" design is applied to the live files.

**Important:** A visual redesign (edu-design-team) only rewrites `index.html` and
`styles.css`. The `app.js` changes below should already survive — verify they're
still present, but they shouldn't need re-doing. The real re-application work is the
**HTML markup** and **CSS**, plus the small **content/accuracy** edits in the new
`index.html`.

Status legend: [ ] = needs re-apply · [keep] = in app.js, should already survive.

---

## A. Content & historical-accuracy fixes (in index.html)

- [ ] Model script: `the Armstead family who owned me` → `the Armistead family who owned me`
- [ ] Attucks interview line: change `When the soldiers opened fire, I was the first to fall. I never knew I'd be remembered as the first to die for American freedom.` → `When the soldiers opened fire, I was one of the first to fall. Many would later remember me as the first to die for American freedom — though five of us were killed that night.`
- [ ] Attucks conclusion line: `He was the first to fall, but his story` → `He is often remembered as the first to fall, but his story`

## B. Accessibility (WCAG)

- [ ] Invalid Font Awesome icons → valid ones (render as blank boxes otherwise):
  `fa-thinking` → `fa-lightbulb`, `fa-thought` → `fa-comment-dots`, `fa-uncomfortable` → `fa-circle-exclamation`
- [ ] Generated-script region: on `#finalScript`'s inner `.section`, add
  `role="region" aria-label="Your finished script" tabindex="-1" id="finalScriptRegion"`
- [keep] (app.js) After building the script, move focus to `#finalScriptRegion`.
- [ ] CSS contrast: low-contrast `#ff6b6b` → `#c62828`; borderline `#2196f3` → `#1565c0`
  (these may already be subsumed by the new design's color system — just ensure
  helper "length" text and info icons hit 4.5:1 contrast).

## C. Safer "Start Over" (in index.html)

- [ ] Move the destructive button out of the export-button row; put it below a divider,
  relabel to **"Start a new script"**, style with `.btn-danger`, and add the reassurance
  caption: "Your current work stays saved — reopen it anytime from the 'Open saved work…' menu."
- [keep] (app.js) `startOver()` is now non-destructive: it `saveCurrent()`s first and only
  starts a fresh blank slot (does NOT delete the old work).
- [ ] CSS: `.btn-danger` (outlined red) — see styles block below.

## D. Canvas wording (Google Docs → Canvas)

- [ ] index.html success box + button labels reference **Canvas**, not Google Docs.
- [keep] (app.js) `copyScript()` toast says "paste into Canvas".

## E. Google Doc safety-net panel (NEW — main feature)

Persistence without sign-in/API. Re-insert this `<section>` near the top (after the
header). Buttons call functions that live in app.js (already present).

```html
<!-- SAFETY NET: GOOGLE DOC -->
<section class="docsafe" id="docSafe" aria-labelledby="docSafeHeading">
    <h2 id="docSafeHeading"><i class="fas fa-shield-alt" aria-hidden="true"></i> Don't lose your work — keep a copy in Google Docs</h2>
    <p class="docsafe-intro">This tool saves on this computer automatically, but a Google Doc is the safest backup because it lives in <strong>your</strong> Google Drive. Do these in order:</p>
    <ol class="docsafe-steps">
        <li>
            <button type="button" class="btn btn-doc" onclick="openGoogleDoc()"><i class="fas fa-file-alt" aria-hidden="true"></i> 1. Open my Google Doc</button>
            <span class="docsafe-hint">A new tab opens. Title it: <strong>Revolutionary Voices – Your Name</strong></span>
        </li>
        <li>
            <button type="button" class="btn btn-doc" onclick="copyWorkToDoc()"><i class="fas fa-copy" aria-hidden="true"></i> 2. Copy my work → paste in my Doc</button>
            <span class="docsafe-hint">Click your Doc tab and paste (<kbd>Ctrl</kbd>+<kbd>V</kbd>). Do this each time you finish a step.</span>
        </li>
        <li>
            <button type="button" class="btn btn-doc btn-doc-restore" onclick="toggleResume()" aria-expanded="false" aria-controls="resumePanel"><i class="fas fa-history" aria-hidden="true"></i> Coming back? Pick up where I left off</button>
            <span class="docsafe-hint">Paste everything from your Doc back in to restore your work on any computer.</span>
        </li>
    </ol>
    <div class="resume-panel" id="resumePanel" hidden>
        <label for="resumeText"><strong>Paste your whole Google Doc here, then press Restore:</strong></label>
        <textarea id="resumeText" rows="5" placeholder="Open your Google Doc, select all (Ctrl+A), copy (Ctrl+C), then paste here…"></textarea>
        <div class="resume-actions">
            <button type="button" class="btn" onclick="doResume()"><i class="fas fa-rotate-left" aria-hidden="true"></i> Restore my work</button>
            <button type="button" class="btn btn-secondary" onclick="toggleResume()">Cancel</button>
        </div>
        <p class="resume-note" id="resumeNote" role="status" aria-live="polite"></p>
    </div>
</section>
```

- [keep] (app.js) Functions: `encodeResume`, `decodeResume`, `openGoogleDoc`,
  `buildDocText`, `copyWorkToDoc`, `toggleResume`, `setResumeNote`, `doResume`, plus
  `RESUME_RE`. (Resume code format embedded in the Doc: `[[RV1:<base64-json>]]`.)

## F. Draft → Final two-stage submission (NEW)

Replaces the single button row on the results screen. Re-insert after `<pre id="scriptOutput"></pre>`:

```html
<!-- TWO-STAGE SUBMISSION -->
<div class="submit-stages">
    <div class="submit-stage submit-stage-draft">
        <h3><span class="stage-num">1</span> Turn in your DRAFT</h3>
        <p>Hand this in on Canvas so your teacher can give you feedback. It doesn't have to be perfect yet.</p>
        <div class="stage-actions">
            <button class="btn btn-secondary" onclick="copyScript()"><i class="fas fa-copy" aria-hidden="true"></i> Copy script</button>
            <button class="btn" onclick="downloadScript()"><i class="fas fa-download" aria-hidden="true"></i> Download (.txt)</button>
            <button class="btn btn-doc" onclick="copyWorkToDoc()"><i class="fas fa-file-alt" aria-hidden="true"></i> Save to my Google Doc</button>
        </div>
        <p class="stage-hint">Then go to Canvas and submit your draft.</p>
    </div>
    <div class="submit-stage submit-stage-final">
        <h3><span class="stage-num">2</span> Later: turn in your FINAL</h3>
        <p>After you get feedback, come back, use <strong>"Pick up where I left off"</strong> at the top if needed, improve your script, then re-generate and hand in your polished final on Canvas.</p>
        <div class="stage-actions">
            <button class="btn btn-secondary" onclick="copyScript()"><i class="fas fa-copy" aria-hidden="true"></i> Copy final script</button>
            <button class="btn" onclick="printScript()"><i class="fas fa-print" aria-hidden="true"></i> Print / Save as PDF</button>
        </div>
    </div>
</div>
```

## G. CSS to re-add (adapt colors to the new design)

```css
.btn-danger { background: #fff; color: #b91c1c; border: 2px solid #b91c1c; padding: 13px 28px; }
.btn-danger:hover { background: #b91c1c; color: #fff; }

/* SAFETY NET: GOOGLE DOC PANEL */
.docsafe { background: #eef4ff; border: 2px solid #4361c2; border-radius: 10px; padding: 18px 20px; margin: 18px 0; }
.docsafe h2 { color: #2a3f8f; font-size: 1.25em; margin: 0 0 6px 0; display: flex; align-items: center; gap: 10px; }
.docsafe-intro { margin: 0 0 12px 0; color: #333; }
.docsafe-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.docsafe-steps > li { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
.docsafe-hint { color: #444; font-size: 0.92em; flex: 1 1 240px; }
.btn-doc { background: #1565c0; padding: 12px 20px; font-size: 1em; }
.btn-doc:hover { background: #0d47a1; }
.btn-doc-restore { background: #fff; color: #1565c0; border: 2px solid #1565c0; }
.btn-doc-restore:hover { background: #1565c0; color: #fff; }
kbd { background: #fff; border: 1px solid #bbb; border-bottom-width: 2px; border-radius: 4px; padding: 1px 6px; font-family: monospace; font-size: 0.9em; }
.resume-panel { margin-top: 14px; background: #fff; border: 1px dashed #4361c2; border-radius: 8px; padding: 14px; }
.resume-panel textarea { width: 100%; margin-top: 6px; }
.resume-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.resume-note { margin: 10px 0 0 0; font-weight: bold; }
.resume-note.ok { color: #2e7d32; }
.resume-note.err { color: #c62828; }

/* TWO-STAGE SUBMISSION */
.submit-stages { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 20px; }
.submit-stage { flex: 1 1 280px; border-radius: 10px; padding: 16px 18px; }
.submit-stage-draft { background: #e8f5e9; border: 2px solid #2e7d32; }
.submit-stage-final { background: #fff8e1; border: 2px solid #f9a825; }
.submit-stage h3 { margin: 0 0 8px 0; display: flex; align-items: center; gap: 10px; font-size: 1.1em; }
.stage-num { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #333; color: #fff; font-weight: bold; }
.submit-stage-draft .stage-num { background: #2e7d32; }
.submit-stage-final .stage-num { background: #f9a825; }
.stage-actions { display: flex; gap: 8px; flex-wrap: wrap; margin: 10px 0; }
.stage-actions .btn { padding: 10px 16px; font-size: 0.95em; margin: 4px 0; }
.stage-hint { font-size: 0.9em; color: #444; margin: 4px 0 0 0; font-weight: bold; }
```

---

## Still open (separate from re-application)
- Cloud removal — pending Shie testing the Doc save/resume flow, then say the word.
- Readings: fact-check/verify once the folder + HTML versions are shared; add school-database research step later.

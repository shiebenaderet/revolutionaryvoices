# Revolutionary Voices Usability Improvements — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix five usability problems that prevent students from easily building high-quality podcast scripts: opening overwhelm, missing research reference while writing, hard-to-use script output, historical accuracy errors, and accessibility issues.

**Architecture:** Pure static single-page app — no build system, no framework. All changes are direct edits to `index.html`, `app.js`, and `styles.css`. Tasks are ordered to avoid conflicts: CSS first (no side-effects), then HTML structure, then JS behavior, then content fixes.

**Tech Stack:** Vanilla HTML/CSS/JS, localStorage, Font Awesome 6, Google Fonts (Inter, Roboto Slab, Space Mono). No npm, no bundler.

## Global Constraints

- No build system — open `index.html` in a browser directly to test (file:// or a simple `python3 -m http.server`)
- Do not add any new external dependencies
- All user-facing text: no em dashes; use commas, colons, or plain hyphens (`-`) instead
- `readings.js` data structure must not change
- `getAllFormData()` / `applyData()` round-trip must continue to work for all new input fields
- Copy / Download output must remain plain text compatible with Canvas
- WCAG 2.2 AA contrast (4.5:1) for all text

---

### Task 1: CSS — Progressive Reveal, Facts Panel, Script Doc, Time Badge, Role Card

**Files:**
- Modify: `styles.css` (append new rules at end of file)

**Interfaces:**
- Produces: CSS classes used by Tasks 2, 3, 4 — `.basics-more`, `.step-facts`, `.script-doc`, `.script-doc-header`, `.script-section-divider`, `.speaker-chip`, `.chip-host`, `.chip-narrator`, `.chip-subject`, `.practice-active`, `.practice-dim`, `.practice-bar`, `.practice-nav`, `.time-badge`, `.time-badge-short`, `.time-badge-good`, `.time-badge-long`, `.role-card`, `.role-row`, `.role-chip-preview`, `.role-name-input`

- [ ] **Step 1: Open `styles.css` and scroll to the very end**

Verify the file ends around line 1085 and the last rule closes with `}`.

- [ ] **Step 2: Append all new CSS rules**

Add the following block at the end of `styles.css`:

```css
/* ============================================================
   TASK 1: Usability improvements — 2026-07-15
   ============================================================ */

/* --- 1. PROGRESSIVE REVEAL: basics secondary fields --- */
.basics-more {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease;
}
.basics-more.revealed {
    max-height: 2000px;
    opacity: 1;
}
.basics-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0 16px;
    color: #667eea;
    font-size: 0.82em;
    font-weight: 600;
}
.basics-divider hr {
    flex: 1;
    border: none;
    border-top: 1.5px solid #dde0ef;
}

/* --- 2. KEY FACTS PANEL (details/summary chip) --- */
.step-facts {
    margin-bottom: 16px;
}
.step-facts details {
    background: #fffbea;
    border: 1.5px solid #f9a825;
    border-radius: 8px;
    overflow: hidden;
}
.step-facts summary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    font-size: 0.88em;
    font-weight: 700;
    color: #7a5800;
    cursor: pointer;
    list-style: none;
    user-select: none;
}
.step-facts summary::-webkit-details-marker { display: none; }
.step-facts summary::after {
    content: '▾';
    margin-left: auto;
    font-size: 0.9em;
    color: #c8860a;
    transition: transform 0.2s;
}
.step-facts details[open] summary::after {
    transform: rotate(180deg);
}
.step-facts-body {
    padding: 0 14px 10px;
    border-top: 1px solid #f0d060;
}
.step-facts-level {
    font-size: 0.72em;
    color: #7a5800;
    padding: 6px 0 4px;
    display: flex;
    align-items: center;
    gap: 6px;
}
.step-facts-level-badge {
    background: #f9a825;
    color: #5a3e00;
    font-family: 'Space Mono', monospace;
    font-size: 0.75em;
    font-weight: 700;
    border-radius: 4px;
    padding: 1px 6px;
}
.step-facts-list {
    list-style: none;
    padding: 0;
    margin: 4px 0 6px;
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.step-facts-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.83em;
    color: #3d2e00;
    line-height: 1.45;
}
.step-facts-bullet {
    min-width: 20px;
    height: 20px;
    background: #f9a825;
    color: #5a3e00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.68em;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
}
.step-facts-footer {
    border-top: 1px solid #f0d060;
    padding: 6px 0 0;
    font-size: 0.72em;
    color: #7a5800;
    font-style: italic;
}
.step-facts-empty {
    padding: 8px 14px 10px;
    font-size: 0.83em;
    color: #7a5800;
    font-style: italic;
}

/* --- 3a. TIME BADGE in wizard nav bar --- */
.time-badge {
    font-family: 'Space Mono', monospace;
    font-size: 0.78em;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 6px;
}
.time-badge .time-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
}
.time-badge-short { background: #f0f2f8; color: #888; }
.time-badge-short .time-dot { background: #bbb; }
.time-badge-good { background: #e8f5e9; color: #2e7d32; }
.time-badge-good .time-dot { background: #2e7d32; }
.time-badge-long { background: #fff8e1; color: #c8860a; }
.time-badge-long .time-dot { background: #c8860a; }

/* --- 3b. FORMATTED SCRIPT DOCUMENT --- */
.script-doc {
    border: 1.5px solid #dde0ef;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 16px;
}
.script-doc-header {
    background: linear-gradient(135deg, #2d2d4e, #1a1a3e);
    padding: 14px 18px;
    color: white;
}
.script-doc-title {
    font-family: 'Roboto Slab', serif;
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 2px;
}
.script-doc-meta {
    font-family: 'Space Mono', monospace;
    font-size: 0.68em;
    color: #aab;
    margin-bottom: 4px;
}
.script-doc-time {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: rgba(255,255,255,0.12);
    border-radius: 4px;
    padding: 2px 8px;
    font-family: 'Space Mono', monospace;
    font-size: 0.7em;
    color: #90ee90;
}
.script-doc-body {
    padding: 14px 18px;
}
.script-section-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 14px 0 10px;
}
.script-section-divider hr {
    flex: 1;
    border: none;
    border-top: 1.5px solid #eee;
}
.script-section-name {
    font-family: 'Space Mono', monospace;
    font-size: 0.6em;
    color: #aaa;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    white-space: nowrap;
}
.script-line {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 8px;
    padding: 6px 8px;
    border-radius: 6px;
    transition: background 0.15s;
}
.speaker-chip {
    font-family: 'Space Mono', monospace;
    font-size: 0.6em;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 3px 7px;
    border-radius: 4px;
    white-space: nowrap;
    min-width: 62px;
    max-width: 90px;
    text-align: center;
    margin-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0;
}
.chip-host { background: #667eea; color: white; }
.chip-narrator { background: #764ba2; color: white; }
.chip-subject { background: #e65100; color: white; }
.script-text {
    font-size: 0.9em;
    color: #222;
    line-height: 1.6;
}

/* --- 3c. ROLE ASSIGNMENT CARD --- */
.role-card {
    background: #f8f9ff;
    border: 1.5px solid #dde0ef;
    border-radius: 10px;
    padding: 14px 18px;
    margin-bottom: 18px;
}
.role-card-title {
    font-size: 0.88em;
    font-weight: 700;
    color: #2d2d4e;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 7px;
}
.role-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}
.role-chip-preview {
    font-family: 'Space Mono', monospace;
    font-size: 0.62em;
    font-weight: 700;
    padding: 3px 9px;
    border-radius: 4px;
    white-space: nowrap;
    min-width: 72px;
    text-align: center;
}
.role-name-input {
    flex: 1;
    padding: 7px 10px;
    border: 1.5px solid #dde0ef;
    border-radius: 6px;
    font-family: 'Inter', sans-serif;
    font-size: 0.88em;
    font-weight: 600;
    color: #2d2d4e;
    transition: border-color 0.2s;
}
.role-name-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
}
.role-card-hint {
    font-size: 0.75em;
    color: #777;
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
}

/* --- 3d. PRACTICE MODE --- */
.practice-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #eef2ff;
    border: 1.5px solid #667eea;
    border-radius: 8px;
    padding: 9px 14px;
    margin-bottom: 12px;
}
.practice-bar.active {
    background: #e8f5e9;
    border-color: #2e7d32;
}
.practice-bar-label {
    font-size: 0.85em;
    font-weight: 600;
    color: #3d3d7a;
    display: flex;
    align-items: center;
    gap: 7px;
}
.practice-bar.active .practice-bar-label { color: #1b5e20; }
.practice-bar-btn {
    background: #667eea;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 5px 12px;
    font-size: 0.8em;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: background 0.2s;
}
.practice-bar.active .practice-bar-btn { background: #2e7d32; }
.practice-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 10px;
}
.practice-nav-btn {
    background: white;
    border: 1.5px solid #667eea;
    color: #667eea;
    border-radius: 6px;
    padding: 5px 12px;
    font-size: 0.8em;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: background 0.15s;
}
.practice-nav-btn:hover { background: #eef2ff; }
.practice-nav-count {
    font-family: 'Space Mono', monospace;
    font-size: 0.78em;
    color: #667eea;
    min-width: 80px;
    text-align: center;
}
.practice-active {
    background: #eef2ff;
    box-shadow: inset 3px 0 0 #667eea;
}
.practice-active .script-text { font-weight: 700; color: #1a1a3e; }
.practice-dim { opacity: 0.22; }
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser (or `python3 -m http.server 8080` and visit `http://localhost:8080`). No visual change expected yet — the new classes exist but nothing uses them. Check DevTools console for CSS errors.

- [ ] **Step 4: Commit**

```bash
git add styles.css
git commit -m "style: add progressive reveal, facts panel, script doc, practice mode, role card CSS"
```

---

### Task 2: HTML — Step 1 Progressive Reveal Structure

**Files:**
- Modify: `index.html` lines ~119-192 (the `section-basic` div)

**Interfaces:**
- Consumes: `.basics-more`, `.basics-divider` (Task 1)
- Produces: `#studentName`, `#subject` remain in place (unchanged). `#podcastName`, `#researchSources`, `#groupSize`, and their associated labels/helpers are wrapped in `<div class="basics-more" id="basicsMore">`. A divider sits between the two groups.

- [ ] **Step 1: Locate the exact block to wrap**

In `index.html`, find the `<div class="section section-basic wizard-step" data-step="0">` block (around line 119). Inside it the order is:
1. `<h2>` heading
2. Name label + input + helper
3. **Podcast Name** label + input + helper + exemplar box
4. **Subject/Topic** label + select + helper
5. **Research Notes** label + textarea + helper
6. **Group Size** label + select

The primary fields are: Name (item 2) and Subject/Topic (item 4).
The secondary fields are: Podcast Name (item 3), Research Notes (item 5), Group Size (item 6).

Note: Podcast Name currently appears *before* Subject. We reorder so Name and Subject are first (primary), then a divider, then Podcast Name, Research Notes, Group Size (secondary). This is a reorder + wrap, not just a wrap.

- [ ] **Step 2: Replace the entire `section-basic` inner content**

Find this opening tag and everything up to the closing `</div>` of the `section-basic` div (ends around line 192 just before `<!-- RESEARCH -->`). Replace the inner content so the section reads:

```html
<div class="section section-basic wizard-step" data-step="0">
    <h2><i class="fas fa-clipboard-list" aria-hidden="true"></i> Basic Information</h2>

    <label>
        Your Name(s):
        <i class="fas fa-info-circle info-icon" data-tooltip="List everyone in your group" tabindex="0" role="img" aria-label="Help: List everyone in your group"></i>
    </label>
    <input type="text" id="studentName" placeholder="e.g., Maria G. and Alex P." oninput="updateTimeEstimate(); checkBasicsReveal()">
    <div class="helper-text">
        <strong>What to include:</strong> Use <strong>first name + last initial</strong> only (e.g., Maria G.). For groups, separate names with "and".
    </div>

    <label for="subject">
        Subject/Topic of Your Episode:
        <i class="fas fa-info-circle info-icon" data-tooltip="Who or what is your episode about? Pick from the list." tabindex="0" role="img" aria-label="Help: Who or what is your episode about? Pick from the list."></i>
    </label>
    <select id="subject" onchange="onTopicChange(); checkBasicsReveal()">
        <option value="">Choose your topic...</option>
    </select>
    <div class="helper-text">
        <strong>Pick who or what your podcast is about.</strong> On the next step (Research) you'll read about them and get key facts for your script.
    </div>

    <!-- Secondary fields: revealed once Name + Topic are both filled -->
    <div class="basics-more" id="basicsMore">
        <div class="basics-divider">
            <hr>
            <span>A few more details</span>
            <hr>
        </div>

        <label>
            Podcast Name:
            <i class="fas fa-info-circle info-icon" data-tooltip="Choose a catchy, memorable title" tabindex="0" role="img" aria-label="Help: Choose a catchy, memorable title"></i>
        </label>
        <input type="text" id="podcastName" placeholder="e.g., Untold Voices, Revolutionary Stories, Hidden History" oninput="updateTimeEstimate()">
        <div class="helper-text">
            <strong>What makes a good podcast name:</strong> Short, memorable, and hints at your topic<br>
            <span class="tip"><i class="fas fa-lightbulb" aria-hidden="true"></i> Tip: Use powerful words like "Untold," "Hidden," "Voices," "Stories," or "Chronicles"</span>
        </div>

        <div class="exemplar-box">
            <button class="exemplar-toggle" onclick="toggleExemplar('podcast-name-example')">
                <i class="fas fa-lightbulb" aria-hidden="true"></i> See Examples of Great Podcast Names
            </button>
            <div id="podcast-name-example" class="exemplar-content">
                <div class="example">
                    <strong>Examples:</strong>
                    <ul style="margin-left: 20px; margin-top: 5px;">
                        <li>"Voices of Resistance" - Shows your topic is about people fighting back</li>
                        <li>"Hidden Patriots" - Creates mystery and intrigue</li>
                        <li>"Revolutionary Chronicles" - Sounds professional and historical</li>
                        <li>"Untold Stories 1776" - Specific and attention-grabbing</li>
                    </ul>
                </div>
                <div class="why">
                    <i class="fas fa-check-circle" aria-hidden="true"></i> <strong>Why these work:</strong> They're short (2-3 words), easy to remember, and immediately tell listeners what to expect.
                </div>
            </div>
        </div>

        <label>
            Research Notes &amp; Sources (recommended):
            <i class="fas fa-info-circle info-icon" data-tooltip="Where did you learn these facts? List your sources." tabindex="0" role="img" aria-label="Help: Where did you learn these facts? List your sources."></i>
        </label>
        <textarea id="researchSources" placeholder="List 3-4 key facts and where you found them. Example:&#10;- Phillis Wheatley published a poetry book in 1773 (Britannica)&#10;- She was the first published African American woman poet (Library of Congress)" oninput="updateTimeEstimate()"></textarea>
        <div class="helper-text">
            <strong><i class="fas fa-flask" aria-hidden="true"></i> Historians use evidence.</strong> Before you write, jot down the real facts you'll use and where each one comes from. Your podcast can be dramatic, but the history should be true.
            <span class="tip"><i class="fas fa-check-circle" aria-hidden="true"></i> Quick check: Can you point to a source for every fact in your script?</span>
        </div>

        <label>
            Group Size:
            <i class="fas fa-info-circle info-icon" data-tooltip="This adjusts the script format for your group" tabindex="0" role="img" aria-label="Help: This adjusts the script format for your group"></i>
        </label>
        <select id="groupSize" onchange="updateGroupOptions()">
            <option value="">Select your group size</option>
            <option value="1">Solo (1 person)</option>
            <option value="2">Pair (2 people)</option>
            <option value="3">Group (3 people)</option>
        </select>
    </div>
</div>
```

- [ ] **Step 3: Verify in browser**

Reload `index.html`. Step 1 should show only Name and Topic. Podcast Name, Research Notes, and Group Size should be invisible. Type a name and select a topic - nothing happens yet (JS comes in Task 3). Check there are no layout breaks.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "html: reorder and wrap Step 1 secondary fields for progressive reveal"
```

---

### Task 3: JS — `checkBasicsReveal()` + fix `applyData()` call

**Files:**
- Modify: `app.js`

**Interfaces:**
- Consumes: `#basicsMore` (Task 2), `#studentName`, `#subject`
- Produces: `checkBasicsReveal()` — globally callable, reads `#studentName` and `#subject`, toggles `.revealed` on `#basicsMore`

- [ ] **Step 1: Add `checkBasicsReveal()` to `app.js`**

Find the line in `app.js` that reads:
```js
// Toggle exemplar display
function toggleExemplar(id) {
```
(This is around line 1.) Insert the following function **before** it:

```js
// Show secondary Step 1 fields once Name and Topic are both filled
function checkBasicsReveal() {
    const name = document.getElementById('studentName');
    const topic = document.getElementById('subject');
    const more = document.getElementById('basicsMore');
    if (!more) return;
    const filled = name && name.value.trim().length > 0 && topic && topic.value.trim().length > 0;
    more.classList.toggle('revealed', filled);
}
```

- [ ] **Step 2: Call `checkBasicsReveal()` after `applyData()` restores saved data**

Find the `applyData` function in `app.js` (around line 733). It ends with:
```js
    updateTimeEstimate();
    updateProgress();
}
```
Add `checkBasicsReveal();` before the closing brace so it reads:
```js
    updateTimeEstimate();
    updateProgress();
    checkBasicsReveal();
}
```

- [ ] **Step 3: Verify in browser**

Reload `index.html`. Type your name in the Name field and select a topic. The "A few more details" divider and the three secondary fields should smoothly animate in. If you reload with saved data that has both filled, they should already be visible on load.

- [ ] **Step 4: Verify the wizard gate still works**

With only Name filled (no topic), click Next. The tool should block with "Add a little here first." This confirms `wizStepDone(0)` still requires both fields independently of the reveal state.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add progressive reveal for Step 1 secondary fields"
```

---

### Task 4: HTML + JS — Collapsible Key Facts Panel (Steps 3, 4, 5)

**Files:**
- Modify: `app.js` — replace `rvRenderStepFacts()` body (lines ~1321-1334)

**Interfaces:**
- Consumes: `.step-facts` divs already injected by `rvInitResearch()` into `.section-intro`, `.section-content`, `.section-conclusion`. `rvFactsFor(r, key)` returns `string[]`. `rvLevel()` returns current level key. `rvLevelCur` holds the current level label map (use the existing `{ mostSupport: 'Most support', someSupport: 'Some support', standard: 'Standard', challenge: 'Challenge' }` labels).
- Produces: `rvRenderStepFacts(stepNum)` — unchanged signature, new implementation that renders a `<details>/<summary>` chip

- [ ] **Step 1: Replace `rvRenderStepFacts()` body in `app.js`**

Find the existing function (around line 1321):
```js
        function rvRenderStepFacts(stepNum) {
            const keyByStep = { 2: 'hook', 3: 'content', 4: 'conclusion' };
            const key = keyByStep[stepNum];
            if (!key) return;
            const box = document.querySelector('[data-step="' + stepNum + '"] .step-facts');
            if (!box) return;
            const id = rvCurrentTopic();
            const r = id && window.RV_READINGS ? window.RV_READINGS[id] : null;
            const items = r ? rvFactsFor(r, key) : null;
            if (!items || !items.length) { box.hidden = true; box.innerHTML = ''; return; }
            box.hidden = false;
            box.innerHTML = '<strong><i class="fas fa-key" aria-hidden="true"></i> Key facts about ' + r.name + ' for this part:</strong><ul>' +
                items.map(x => '<li>' + x + '</li>').join('') + '</ul>';
        }
```

Replace the entire function with:

```js
        function rvRenderStepFacts(stepNum) {
            const keyByStep = { 2: 'hook', 3: 'content', 4: 'conclusion' };
            const sectionLabel = { 2: 'Introduction', 3: 'Content', 4: 'Conclusion' };
            const levelLabel = {
                mostSupport: 'Most support',
                someSupport: 'Some support',
                standard: 'Standard',
                challenge: 'Challenge'
            };
            const key = keyByStep[stepNum];
            if (!key) return;
            const box = document.querySelector('[data-step="' + stepNum + '"] .step-facts');
            if (!box) return;
            const id = rvCurrentTopic();
            const r = id && window.RV_READINGS ? window.RV_READINGS[id] : null;
            const items = r ? rvFactsFor(r, key) : null;
            if (!id || !r) {
                box.hidden = false;
                box.innerHTML = '<details class="step-facts-details"><summary><i class="fas fa-clipboard-list" aria-hidden="true"></i> Key facts for your ' + (sectionLabel[stepNum] || 'section') + '</summary><div class="step-facts-empty">Choose your topic on the Basics step to see key facts here.</div></details>';
                return;
            }
            if (!items || !items.length) { box.hidden = true; box.innerHTML = ''; return; }
            const bullets = items.map(function(x, i) {
                return '<li><span class="step-facts-bullet" aria-hidden="true">' + (i + 1) + '</span><span>' + x + '</span></li>';
            }).join('');
            box.hidden = false;
            box.innerHTML =
                '<details>' +
                '<summary><i class="fas fa-clipboard-list" aria-hidden="true"></i> Key facts for your ' + sectionLabel[stepNum] + '</summary>' +
                '<div class="step-facts-body">' +
                '<div class="step-facts-level"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Showing facts at your reading level: <span class="step-facts-level-badge">' + (levelLabel[rvLevel()] || rvLevel()) + '</span></div>' +
                '<ul class="step-facts-list">' + bullets + '</ul>' +
                '<div class="step-facts-footer">Use these facts in your script - put them in your own voice, don\'t copy word-for-word.</div>' +
                '</div>' +
                '</details>';
        }
```

- [ ] **Step 2: Verify in browser**

Navigate to Step 3 (Introduction) after selecting a topic. An amber chip labeled "Key facts for your Introduction" should appear at the top. Tap it to expand - facts should appear. Change reading level on Step 2 and return to Step 3 - facts should update to the new level.

Navigate to Step 4 (Content) and Step 5 (Conclusion) — each should show section-appropriate facts.

Without a topic selected: chip shows the "Choose your topic" placeholder.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: collapsible key facts panel on writing steps 3-4-5"
```

---

### Task 5: HTML — Role Assignment Card on Finish Step

**Files:**
- Modify: `index.html` — inside `<div class="wizard-step section-finish" data-step="5">` (around line 1752)

**Interfaces:**
- Produces: `#roleHost`, `#roleNarrator`, `#roleSubject` input fields (text). `#roleCard` wrapper div. `updateRoleChipPreviews()` called oninput on each role field. Role card hidden for solo (group size 1) via JS in Task 6.
- Consumes: `.role-card`, `.role-row`, `.role-chip-preview`, `.chip-host`, `.chip-narrator`, `.chip-subject`, `.role-name-input`, `.role-card-hint` (Task 1)

- [ ] **Step 1: Add the role card before the Build button**

Find this block in `index.html` (around line 1758):
```html
        <!-- GENERATE SCRIPT BUTTON -->
        <div style="text-align: center; margin: 30px 0;">
            <button class="btn" onclick="generateScript()">
                <i class="fas fa-magic" aria-hidden="true"></i> Build My Script
            </button>
        </div>
```

Insert the role card **immediately before** that block:

```html
        <!-- ROLE ASSIGNMENT CARD -->
        <div class="role-card" id="roleCard">
            <div class="role-card-title">
                <i class="fas fa-users" aria-hidden="true"></i> Who's playing each part?
            </div>
            <div id="roleRowHost" class="role-row">
                <span class="role-chip-preview chip-host" id="rolePreviewHost">HOST</span>
                <input type="text" class="role-name-input" id="roleHost" placeholder="First name" maxlength="20" oninput="updateRoleChipPreviews()">
            </div>
            <div id="roleRowNarrator" class="role-row" style="display:none">
                <span class="role-chip-preview chip-narrator" id="rolePreviewNarrator">NARRATOR</span>
                <input type="text" class="role-name-input" id="roleNarrator" placeholder="First name" maxlength="20" oninput="updateRoleChipPreviews()">
            </div>
            <div id="roleRowSubject" class="role-row">
                <span class="role-chip-preview chip-subject" id="rolePreviewSubject">SUBJECT</span>
                <input type="text" class="role-name-input" id="roleSubject" placeholder="First name" maxlength="20" oninput="updateRoleChipPreviews()">
            </div>
            <div class="role-card-hint">
                <i class="fas fa-lightbulb" aria-hidden="true"></i> Your names will appear on every line of the script. Leave blank to use role labels instead.
            </div>
        </div>
```

- [ ] **Step 2: Replace `<pre id="scriptOutput">` with a `<div>`**

Find (around line 1772):
```html
                <pre id="scriptOutput"></pre>
```
Replace with:
```html
                <div id="scriptOutput" class="script-doc" role="region" aria-label="Your finished script" tabindex="-1"></div>
```

- [ ] **Step 3: Add practice bar and practice nav above `#finalScript`'s action buttons**

Find (around line 1774), the `<!-- TWO-STAGE SUBMISSION -->` comment. Insert this immediately **before** it:

```html
                <!-- PRACTICE MODE -->
                <div class="practice-bar" id="practiceBar">
                    <div class="practice-bar-label"><i class="fas fa-microphone" aria-hidden="true"></i> Practice mode - read aloud with your partner</div>
                    <button type="button" class="practice-bar-btn" id="practiceToggleBtn" onclick="togglePracticeMode()"><i class="fas fa-play" aria-hidden="true"></i> Start practice</button>
                </div>
                <div class="practice-nav" id="practiceNav" style="display:none">
                    <button type="button" class="practice-nav-btn" onclick="practiceMove(-1)"><i class="fas fa-arrow-left" aria-hidden="true"></i> Prev</button>
                    <span class="practice-nav-count" id="practiceNavCount">Line 1 of 1</span>
                    <button type="button" class="practice-nav-btn" onclick="practiceMove(1)">Next <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
                </div>
```

- [ ] **Step 4: Add time badge span inside `#wizardNav`**

Find (around line 1807):
```html
        <div class="wizard-nav" id="wizardNav">
            <button type="button" class="btn btn-secondary" id="wizBack" onclick="wizBack()"><i class="fas fa-arrow-left" aria-hidden="true"></i> Back</button>
            <span class="wizard-progress-label" id="wizLabel" aria-live="polite">Step 1 of 5</span>
            <button type="button" class="btn" id="wizNext" onclick="wizNext()">Next <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
        </div>
```
Replace with:
```html
        <div class="wizard-nav" id="wizardNav">
            <button type="button" class="btn btn-secondary" id="wizBack" onclick="wizBack()"><i class="fas fa-arrow-left" aria-hidden="true"></i> Back</button>
            <span class="wizard-progress-label" id="wizLabel" aria-live="polite">Step 1 of 5</span>
            <span class="time-badge time-badge-short" id="wizTimeBadge" style="display:none" aria-live="polite"><span class="time-dot"></span> <span id="wizTimeBadgeText">0:00</span></span>
            <button type="button" class="btn" id="wizNext" onclick="wizNext()">Next <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
        </div>
```

- [ ] **Step 5: Verify in browser**

Reload and navigate to the Finish step. The role card should appear above the Build button, with HOST and SUBJECT rows visible (NARRATOR hidden). The `<div id="scriptOutput">` exists (empty). The practice bar is visible. The time badge span exists in the nav (hidden for now).

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "html: add role card, practice bar, script-doc div, time badge to Finish step"
```

---

### Task 6: JS — Role Names, Formatted Script, Time Badge, Practice Mode

**Files:**
- Modify: `app.js`

**Interfaces:**
- Consumes: `#roleHost`, `#roleNarrator`, `#roleSubject`, `#roleCard`, `#roleRowNarrator`, `#rolePreviewHost`, `#rolePreviewNarrator`, `#rolePreviewSubject` (Task 5). `#wizTimeBadge`, `#wizTimeBadgeText` (Task 5). `#practiceBar`, `#practiceNav`, `#practiceNavCount`, `#practiceToggleBtn` (Task 5). `#scriptOutput` as `<div>` (Task 5).
- Produces: `updateRoleChipPreviews()`, `getRoleName(role)`, `updateRoleCard()`, `renderFormattedScript(lines)`, `updateWizTimeBadge()`, `togglePracticeMode()`, `practiceMove(dir)`. Modified `generateScript()` and `updateTimeEstimate()`.

- [ ] **Step 1: Add `updateRoleChipPreviews()` and `getRoleName()`**

Add these functions near the top of `app.js`, right after `checkBasicsReveal()`:

```js
// Update role chip previews as students type their names
function updateRoleChipPreviews() {
    ['Host', 'Narrator', 'Subject'].forEach(function(role) {
        var input = document.getElementById('role' + role);
        var preview = document.getElementById('rolePreview' + role);
        if (!input || !preview) return;
        preview.textContent = input.value.trim().toUpperCase() || role.toUpperCase();
    });
}

// Get the display name for a role — falls back to the label if no name entered
function getRoleName(role) {
    var input = document.getElementById('role' + role);
    var v = input && input.value.trim();
    return v ? v.toUpperCase() : role.toUpperCase();
}

// Show/hide role card rows based on group size
function updateRoleCard() {
    var size = document.getElementById('groupSize') && document.getElementById('groupSize').value;
    var card = document.getElementById('roleCard');
    var narratorRow = document.getElementById('roleRowNarrator');
    if (!card) return;
    card.style.display = (size === '1') ? 'none' : 'block';
    if (narratorRow) narratorRow.style.display = (size === '3') ? 'flex' : 'none';
}
```

- [ ] **Step 2: Call `updateRoleCard()` from `updateGroupOptions()`**

Find `updateGroupOptions()` in `app.js`. At the very end of its body, before the closing `}`, add:
```js
    updateRoleCard();
```

Also call it from `applyData()` — add `updateRoleCard();` on its own line right after the existing `checkBasicsReveal();` call you added in Task 3.

- [ ] **Step 3: Add `renderFormattedScript()`**

Add this function after `updateRoleCard()`:

```js
// Render a formatted HTML script document into #scriptOutput
function renderFormattedScript(sections) {
    // sections: [{label: 'INTRODUCTION', lines: [{role: 'host'|'narrator'|'subject', text: string}]}]
    var totalWords = 0;
    sections.forEach(function(s) { s.lines.forEach(function(l) {
        totalWords += l.text.trim().split(/\s+/).filter(function(w){ return w.length > 0; }).length;
    }); });
    var mins = Math.floor(totalWords / 130);
    var secs = Math.round((totalWords % 130) / 130 * 60);
    var timeStr = mins + ':' + String(secs).padStart(2, '0');

    var podcastName = document.getElementById('podcastName').value || 'Untitled';
    var studentName = document.getElementById('studentName').value || '';
    var subject = document.getElementById('subject').value || '';

    var html = '<div class="script-doc-header">';
    html += '<div class="script-doc-title">' + escHtml(podcastName) + '</div>';
    if (studentName) html += '<div class="script-doc-meta">' + escHtml(studentName) + (subject ? ' &nbsp;&middot;&nbsp; ' + escHtml(subject) : '') + '</div>';
    html += '<div class="script-doc-time"><i class="fas fa-clock" aria-hidden="true"></i> ~' + timeStr + ' estimated read time</div>';
    html += '</div>';
    html += '<div class="script-doc-body">';
    sections.forEach(function(section) {
        html += '<div class="script-section-divider"><hr><span class="script-section-name">' + escHtml(section.label) + '</span><hr></div>';
        section.lines.forEach(function(line) {
            var chipClass = line.role === 'subject' ? 'chip-subject' : (line.role === 'narrator' ? 'chip-narrator' : 'chip-host');
            var chipText = line.role === 'subject' ? getRoleName('Subject') : (line.role === 'narrator' ? getRoleName('Narrator') : getRoleName('Host'));
            html += '<div class="script-line"><span class="speaker-chip ' + chipClass + '">' + escHtml(chipText) + '</span><span class="script-text">' + escHtml(line.text) + '</span></div>';
        });
    });
    html += '</div>';
    document.getElementById('scriptOutput').innerHTML = html;
}

function escHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
```

- [ ] **Step 4: Modify `generateScript()` to build sections and call `renderFormattedScript()`**

`generateScript()` currently builds a plain-text string and sets `document.getElementById('scriptOutput').textContent`. We need it to:
1. Continue building the plain-text `script` string (for copy/download - unchanged)
2. Additionally build a `sections` array and call `renderFormattedScript(sections)`
3. Store the plain-text string for copy/download in a closure variable

Find `generateScript()` in `app.js` (around line 334). After the line:
```js
            document.getElementById('scriptOutput').textContent = script;
```
Replace that single line with:
```js
            // Store plain text for copy/download
            document.getElementById('scriptOutput').dataset.plainText = script;
            // Render formatted HTML view
            var scriptSections = buildScriptSections();
            renderFormattedScript(scriptSections);
```

Then add the `buildScriptSections()` helper immediately after `generateScript()` closes:

```js
        // Build the sections array for renderFormattedScript() from current form state
        function buildScriptSections() {
            var sections = [];
            var subject = document.getElementById('subject').value || '';
            var size = document.getElementById('groupSize').value;
            var introType = document.querySelector('input[name="intro"]:checked');
            var contentType = document.querySelector('input[name="content"]:checked');
            var conclusionType = document.querySelector('input[name="conclusion"]:checked');
            var v = function(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };

            // Group intro lines
            var groupLines = [];
            if (size !== '1') {
                if (v('group-intro')) groupLines.push({ role: 'host', text: v('group-intro') });
                if (v('group-welcome')) groupLines.push({ role: 'host', text: v('group-welcome') });
            }

            // Intro lines
            var introLines = [];
            if (introType) {
                var it = introType.value;
                if (it === 'dramatic') {
                    ['dramatic-hook', 'dramatic-subject', 'dramatic-stakes'].forEach(function(id) { if (v(id)) introLines.push({ role: 'host', text: v(id) }); });
                } else if (it === 'fact') {
                    ['fact-statement', 'fact-significance', 'fact-subject'].forEach(function(id) { if (v(id)) introLines.push({ role: 'host', text: v(id) }); });
                } else if (it === 'question') {
                    ['question-hook', 'question-buildup', 'question-answer'].forEach(function(id) { if (v(id)) introLines.push({ role: 'host', text: v(id) }); });
                } else if (it === 'sound') {
                    if (v('sound-effects')) introLines.push({ role: 'narrator', text: '[SOUND EFFECTS: ' + v('sound-effects') + ']' });
                    ['sound-setting', 'sound-subject', 'sound-conflict'].forEach(function(id) { if (v(id)) introLines.push({ role: 'narrator', text: v(id) }); });
                }
            }
            var allIntroLines = groupLines.concat(introLines);
            if (allIntroLines.length) sections.push({ label: 'INTRODUCTION', lines: allIntroLines });

            // Content lines
            var contentLines = [];
            if (contentType) {
                var ct = contentType.value;
                if (ct === 'narrative') {
                    if (v('narrative-intro')) contentLines.push({ role: 'narrator', text: v('narrative-intro') });
                    ['narrative-scene1', 'narrative-trans1', 'narrative-scene2', 'narrative-trans2', 'narrative-scene3'].forEach(function(id, i) {
                        if (v(id)) contentLines.push({ role: i % 2 === 0 ? 'subject' : 'narrator', text: v(id) });
                    });
                } else if (ct === 'interview') {
                    if (v('interview-intro')) contentLines.push({ role: 'narrator', text: v('interview-intro') });
                    for (var i = 1; i <= 5; i++) {
                        if (v('q' + i)) contentLines.push({ role: 'host', text: v('q' + i) });
                        if (v('a' + i)) contentLines.push({ role: 'subject', text: v('a' + i) });
                    }
                } else if (ct === 'news') {
                    ['news-opening', 'news-background', 'news-quote', 'news-turning', 'news-aftermath', 'news-closing'].forEach(function(id) {
                        if (v(id)) contentLines.push({ role: 'host', text: v(id) });
                    });
                } else if (ct === 'diary') {
                    if (v('diary-intro')) contentLines.push({ role: 'narrator', text: v('diary-intro') });
                    [1,2,3].forEach(function(n) {
                        var dateVal = v('diary' + n + '-date');
                        if (dateVal) contentLines.push({ role: 'narrator', text: '[Entry: ' + dateVal + ']' });
                        if (v('diary' + n + '-content')) contentLines.push({ role: 'subject', text: v('diary' + n + '-content') });
                    });
                    if (v('diary-closing')) contentLines.push({ role: 'narrator', text: v('diary-closing') });
                }
            }
            if (contentLines.length) sections.push({ label: 'CONTENT', lines: contentLines });

            // Conclusion lines
            var conclusionLines = [];
            if (conclusionType) {
                var concl = conclusionType.value;
                var ids = {
                    significance: ['sig-what', 'sig-reveals', 'sig-why', 'sig-final'],
                    today: ['today-lesson', 'today-parallel', 'today-specific', 'today-final'],
                    challenge: ['challenge-standard', 'challenge-missing', 'challenge-why', 'challenge-lose', 'challenge-final'],
                    legacy: ['legacy-impact', 'legacy-lesson', 'legacy-universal', 'legacy-honor']
                };
                (ids[concl] || []).forEach(function(id) { if (v(id)) conclusionLines.push({ role: 'host', text: v(id) }); });
            }
            if (conclusionLines.length) sections.push({ label: 'CONCLUSION', lines: conclusionLines });

            return sections;
        }
```

- [ ] **Step 5: Update `copyScript()` and `downloadScript()` to use plain text from dataset**

Find `copyScript()`:
```js
        function copyScript() {
            const scriptText = document.getElementById('scriptOutput').textContent;
```
Replace that line with:
```js
        function copyScript() {
            const scriptText = document.getElementById('scriptOutput').dataset.plainText || document.getElementById('scriptOutput').textContent;
```

Find `downloadScript()`:
```js
        function downloadScript() {
            const text = document.getElementById('scriptOutput').textContent || '';
```
Replace that line with:
```js
        function downloadScript() {
            const text = document.getElementById('scriptOutput').dataset.plainText || document.getElementById('scriptOutput').textContent || '';
```

- [ ] **Step 6: Add `updateWizTimeBadge()` and wire it into `updateTimeEstimate()`**

Add this function after `updateRoleCard()`:

```js
// Update the live time badge in the wizard nav bar
function updateWizTimeBadge() {
    var badge = document.getElementById('wizTimeBadge');
    var text = document.getElementById('wizTimeBadgeText');
    if (!badge || !text) return;
    // Only show on steps 2-5 (writing steps)
    if (typeof wizCurrent === 'undefined' || wizCurrent < 2) { badge.style.display = 'none'; return; }
    // Count all words across intro/content/conclusion fields
    var fields = ['dramatic-hook','dramatic-subject','dramatic-stakes',
        'fact-statement','fact-significance','fact-subject',
        'question-hook','question-buildup','question-answer',
        'sound-setting','sound-subject','sound-conflict',
        'narrative-intro','narrative-scene1','narrative-trans1','narrative-scene2','narrative-trans2','narrative-scene3',
        'interview-intro','q1','a1','q2','a2','q3','a3','q4','a4','q5','a5',
        'news-opening','news-background','news-quote','news-turning','news-aftermath','news-closing',
        'diary-intro','diary1-content','diary2-content','diary3-content','diary-closing',
        'sig-what','sig-reveals','sig-why','sig-final',
        'today-lesson','today-parallel','today-specific','today-final',
        'challenge-standard','challenge-missing','challenge-why','challenge-lose','challenge-final',
        'legacy-impact','legacy-lesson','legacy-universal','legacy-honor'];
    var words = 0;
    fields.forEach(function(id) { words += countFieldWords(id); });
    if (words === 0) { badge.style.display = 'none'; return; }
    badge.style.display = 'inline-flex';
    var mins = Math.floor(words / 130);
    var secs = Math.round((words % 130) / 130 * 60);
    var timeStr = '~' + mins + ':' + String(secs).padStart(2, '0');
    var label, cls;
    var totalMins = words / 130;
    if (totalMins < 3) { label = timeStr + ' - need more'; cls = 'time-badge-short'; }
    else if (totalMins <= 6) { label = timeStr + ' - good length'; cls = 'time-badge-good'; }
    else { label = timeStr + ' - too long'; cls = 'time-badge-long'; }
    text.textContent = label;
    badge.className = 'time-badge ' + cls;
}
```

Now find `updateTimeEstimate()` in `app.js`. At the very end of that function, just before its closing `}`, add:
```js
            updateWizTimeBadge();
```

Also update `showStep()` in `app.js` to call `updateWizTimeBadge()` at the end. Find:
```js
        function showStep(n) {
```
and add `updateWizTimeBadge();` at the very end of that function, before its closing `}`.

- [ ] **Step 7: Add practice mode functions**

Add these functions after `buildScriptSections()`:

```js
        var practiceActive = false;
        var practiceLineIndex = 0;

        function togglePracticeMode() {
            practiceActive = !practiceActive;
            var bar = document.getElementById('practiceBar');
            var nav = document.getElementById('practiceNav');
            var btn = document.getElementById('practiceToggleBtn');
            if (!bar) return;
            bar.classList.toggle('active', practiceActive);
            if (nav) nav.style.display = practiceActive ? 'flex' : 'none';
            if (btn) {
                btn.innerHTML = practiceActive
                    ? '<i class="fas fa-stop" aria-hidden="true"></i> Stop'
                    : '<i class="fas fa-play" aria-hidden="true"></i> Start practice';
            }
            if (practiceActive) {
                practiceLineIndex = 0;
                applyPracticeHighlight();
            } else {
                clearPracticeHighlight();
            }
        }

        function practiceMove(dir) {
            var lines = document.querySelectorAll('#scriptOutput .script-line');
            practiceLineIndex = Math.max(0, Math.min(lines.length - 1, practiceLineIndex + dir));
            applyPracticeHighlight();
        }

        function applyPracticeHighlight() {
            var lines = document.querySelectorAll('#scriptOutput .script-line');
            var count = document.getElementById('practiceNavCount');
            lines.forEach(function(line, i) {
                line.classList.toggle('practice-active', i === practiceLineIndex);
                line.classList.toggle('practice-dim', i !== practiceLineIndex);
            });
            if (count) count.textContent = 'Line ' + (practiceLineIndex + 1) + ' of ' + lines.length;
            if (lines[practiceLineIndex]) lines[practiceLineIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function clearPracticeHighlight() {
            document.querySelectorAll('#scriptOutput .script-line').forEach(function(line) {
                line.classList.remove('practice-active', 'practice-dim');
            });
        }
```

- [ ] **Step 8: Wire `updateRoleCard()` into `wizInit()`**

Find `wizInit()` in `app.js`. Just before its closing `}`, add:
```js
            updateRoleCard();
```

- [ ] **Step 9: Verify in browser — full flow**

1. Fill in Name, Topic, Podcast Name, Group Size = Pair, all writing sections
2. Go to Finish step - role card shows HOST and SUBJECT rows. Type "Maria" and "Alex" - chips update live.
3. Click "Build My Script" - formatted script renders with MARIA / ALEX chips, section dividers, dark header with time estimate
4. Click "Start practice" - practice bar turns green, nav appears, first line highlighted, others dimmed. Click Next/Prev.
5. Click "Copy script" - paste into a text editor. Should be plain text with "MARIA:" labels (not HTML).
6. Check the nav bar on Steps 3-5: live time badge appears and updates as you type.

- [ ] **Step 10: Commit**

```bash
git add app.js
git commit -m "feat: named roles, formatted script output, live time badge, practice mode"
```

---

### Task 7: Historical Accuracy Fixes

**Files:**
- Modify: `index.html`

**Interfaces:** None — pure content fixes.

- [ ] **Step 1: Fix Armistead spelling**

Search `index.html` for:
```
the Armstead family who owned me
```
Replace with:
```
the Armistead family who owned me
```

- [ ] **Step 2: Fix Attucks interview line**

Search `index.html` for:
```
When the soldiers opened fire, I was the first to fall. I never knew I'd be remembered as the first to die for American freedom.
```
Replace with:
```
When the soldiers opened fire, I was one of the first to fall. Many would later remember me as the first to die for American freedom - though five of us were killed that night.
```

- [ ] **Step 3: Fix Attucks conclusion line**

Search `index.html` for:
```
He was the first to fall, but his story
```
Replace with:
```
He is often remembered as the first to fall, but his story
```

- [ ] **Step 4: Verify in browser**

Search the rendered page for "Armstead" - should return zero results. Navigate to the Crispus Attucks section and verify the corrected text appears in both the interview and conclusion examples.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "fix: correct historical accuracy errors in Armistead spelling and Attucks text"
```

---

### Task 8: Accessibility — Icon Fixes and Contrast

**Files:**
- Modify: `index.html` (icon class names)
- Modify: `styles.css` (contrast colors — already correct at #c62828 and #1565c0 from prior work, verify only)

**Interfaces:** None — pure fixes.

- [ ] **Step 1: Fix invalid Font Awesome icon classes in `index.html`**

Run a search in `index.html` for each invalid class and replace:

Search for `fa-thinking` - replace all occurrences with `fa-lightbulb`
Search for `fa-thought` - replace all occurrences with `fa-comment-dots`
Search for `fa-uncomfortable` - replace all occurrences with `fa-circle-exclamation`

- [ ] **Step 2: Verify contrast in `styles.css`**

Open `styles.css` and confirm:
- `.helper-text .length` has `color: #c62828` (not `#ff6b6b`)
- `.info-icon` has `color: #1565c0` (not `#2196f3`)

Both should already be correct from prior work. If either is wrong, fix it now.

- [ ] **Step 3: Verify icons in browser**

Open `index.html` and visually check that no blank boxes appear where icons should be. In particular check the verb banks and any areas that previously used the invalid icon names.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "fix: replace invalid Font Awesome icons, verify contrast ratios"
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Task |
|---|---|
| Step 1 shows only Name + Topic on first load | Tasks 2, 3 |
| Secondary fields animate in when both filled | Tasks 1, 3 |
| `checkBasicsReveal()` runs after `applyData()` | Task 3 |
| Research Notes label updated to "(recommended)" | Task 2 |
| Collapsible amber facts chip on Steps 3, 4, 5 | Tasks 1, 4 |
| Facts match current reading level | Task 4 |
| Empty-topic placeholder in chip | Task 4 |
| Live time badge in nav bar from Step 3 onward | Tasks 1, 5, 6 |
| Formatted script output with speaker chips | Tasks 1, 5, 6 |
| Named roles card on Finish step | Tasks 1, 5, 6 |
| Solo = no role card; pair = HOST+SUBJECT; group of 3 = all three | Task 6 |
| Copy/Download produces plain text | Task 6 |
| Practice mode - line highlight, Prev/Next | Tasks 1, 5, 6 |
| Armistead spelling fix | Task 7 |
| Attucks interview fix | Task 7 |
| Attucks conclusion fix | Task 7 |
| Invalid FA icons fixed | Task 8 |
| Contrast #ff6b6b → #c62828 | Task 8 |
| Contrast #2196f3 → #1565c0 | Task 8 |

All spec requirements covered. No gaps.

**Placeholder scan:** No TBDs, no "implement later", no "similar to Task N" references. All code blocks are complete.

**Type consistency:** `getRoleName('Host')` / `getRoleName('Narrator')` / `getRoleName('Subject')` - capital first letter used consistently in all call sites. `buildScriptSections()` returns `[{label: string, lines: [{role: string, text: string}]}]` and `renderFormattedScript()` consumes exactly that shape. `countFieldWords(id)` already exists in `app.js` - used correctly in `updateWizTimeBadge()`. `escHtml()` defined before first use in `renderFormattedScript()`. No mismatches found.

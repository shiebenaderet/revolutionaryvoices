# Changelog

All notable changes to Revolutionary Voices Script Builder are documented here.

Format: [Semantic Versioning](https://semver.org) - `MAJOR.MINOR.PATCH`

---

## [3.5.0] - 2026-10-23

### Added

- **My Facts on My Lines.** Each student types two or more facts from their paper Research Notes, with where each came from. The Fact Bank lives on the Researcher's Chromebook; these live on each student's, so every student brings their own research to their lines.
- **Add one of your facts** in every box, at every level. Students pick how the sentence starts (just the fact, "Most people don't know that…", "Historians know that…", "According to [source],…") and click a fact to add it to their lines.
- **The source line.** Whoever has the last box of the Wrap gets one more box: "We learned about [person] from ___ and ___," with their own sources and the reading to pick from, or their own words.
- **A finish line** at the top of My Lines that fills in as students work: every box has words, two of my facts are in my lines, my source line is filled in (for whoever has it), and I read my lines out loud once (a box they check).
- **Our Sources** at the end of the Group Doc, listing the Fact Bank's sources with room for the rest: the episode's reference page.
- `project.html`: the project at a glance (schedule, jobs, parts, what to bring, how it's graded, Ready to Record), linked from Start. It matches the printed crew cover sheet and is built from the same text (ams-planning `tools/build-podcast-overview.py`).

### Changed

- **Nobody plays a person who was enslaved.** For James Armistead Lafayette, Peter Salem, Phillis Wheatley, Crispus Attucks, African Americans, and Enslaved People and British Freedom Offers, the Interview and Diary styles are not offered, every Subject box becomes the Narrator's, and the "I" frames become Narrator frames ("{name} was…", "In [when], {name}…"). In Their Own Words reads real words from the Voice Bank as a quote and says who said them. The editor's checklist says so in place of the first-person line.
- **Episodes run 2 to 4 minutes** (was 3 to 5). The Hook and the Wrap are about 30 seconds each and the Story 1 to 3 minutes; Practice calls 2 to 4 minutes a good length.
- **Frames for anyone.** How much help? now says "Want sentence frames to start from? Pick Quick." At Quick, students get a nudge to make the lines sound like them ("Change any word you would say differently") and a "Said it your way" mark once they do.
- "Click", not "tap", on My Lines (Chromebooks).

### Saved work

- Work from 3.4 loads unchanged. My Facts start empty, and the source line box is new.

## [3.4.0] - 2026-10-15

### Changed

- **Who says what comes after the plan, not before it.** Start asks only for names and jobs now. The voices an episode has depend on its styles (a Dramatic Hook, a News Report and a Legacy wrap have no Narrator at all), so picking them on Start let a student choose a part the episode never uses and reach My Lines with nothing to write. After the styles on the Plan step, **Who says it?** lists only the parts those styles use, with how many boxes each has. Students check who says each one; two can share a part and one can say two. **Split it up for us** tries every way of dividing the parts and picks the fairest: everyone gets lines, the busiest and least busy are as close as possible (within four boxes in every episode, and usually one), and two people don't voice the historical figure unless there's no fair alternative. A shared part's boxes alternate between the people sharing it, so co-hosts each get lines and no box is written twice. Plan can't move on until every part has someone.
- Every box on the plan, in the Group Doc and on the paper copy shows its part and the one name who says it, like "Host (Maya)". The crew table says what each person says.
- **My Lines** asks "Which one are you?" and shows that student's boxes. No voice question.
- **Plainer instructions on the crew path**, written for students reading well below grade level without talking down to them. Start is about half as long, with one line per job. Words a student might not know are gone or explained where they appear: "stitches everyone's lines together", "trace back to", "cite", "a working thesis" (now "your main idea for now"), "Suggesting mode" (now "so changes show up as suggestions").

### Added

- Two crew members with the same first name get a nudge on Start to add a last initial, since My Lines and Who says it? tell people apart by name.
- `check-crew.js`, a consistency check for the crew path: every box has its My Lines kind, guidance and a known part; every Quick frame has at least two words for each blank in every topic's word bank; every style's radio exists; Split it up covers every part and gives everyone lines in all 192 episodes; the version numbers agree. `cast-core.js` holds the Who says it? logic so the page and the check run the same code.

### Saved work

- Voice choices from 3.3 and earlier load into Who says it? (same field ids). Nothing to redo.

## [3.3.0] - 2026-10-15

### Changed

- **A calmer masthead with a real tuning dial.** The header was a pile of boxes: a boxed On Air sign, three boxed buttons, six dashed step boxes and a tick strip. Now the title, a small On Air lamp and three plain-word tools (Listen, Font, My Work) share one row. The steps sit on a dial window underneath: tick marks across the top, a taller tick for each step, the number above each name, and a red needle with a gold label on the step you're on. Done steps show a check; steps you can't open yet are dimmer. On a phone the tools drop to their own row and the dial still fits all six steps.
- The rust tab next to each step heading is gone.

### Fixed

- A blue box no longer appears around the step heading after you change a field. Focus still moves to the heading for screen readers when you change steps.

## [3.2.3] - 2026-10-15

### Fixed

- **Browsers kept last year's styles and code after the update.** The new page loaded with the old `styles.css` and `app.js` from the browser's cache, so it showed the old typewriter font, rounded boxes, "Step 1 of 6 · Basics", an unstyled My Work button and "v1.3.0" in the footer. Every stylesheet and script link now carries `?v=3.2.3`, so a new version always loads fresh. Bump it with each release (`index.html` and `build-readings.js`).
- The footer no longer shows the build code from version 2.0.0 (`10da653`), which was never updated.

## [3.2.2] - 2026-10-15

### Changed

- **Readings re-leveled so each level measures the same as across the course.** Quick, Clear, Full and Deep now follow one definition shared by every course site and handout (`READING-LEVELS.md`). Fifteen readings that measured outside their level were rewritten: four Quick (Abigail Adams, Native Americans, Loyalists, Hessians), nine Clear (James Armistead, Peter Salem, Joseph Brant, Mercy Otis Warren, Benedict Arnold, African Americans, Loyalists, Young Soldiers, Women's Work) and two Full (African Americans, Women's Work). Only the language changed: long sentences were split, rare words swapped for plain ones, and side details moved into their own sentences. Every fact, year, name, glossed term and quote stays. Flesch-Kincaid grade, before and after:

  | Level | Before (average, range) | After (average, range) | Limit |
  |---|---|---|---|
  | Quick | 4.2 (2.0-6.7) | 3.9 (2.0-4.9) | 5.0 |
  | Clear | 7.3 (4.8-9.4) | 6.4 (4.8-7.4) | 7.5 |
  | Full | 9.3 (7.3-11.8) | 9.0 (7.3-10.4) | 10.5 |
  | Deep | 15.6 (12.6-19.5) | 15.6 (12.6-19.5) | above that topic's Full |

  Every topic now steps up Quick < Clear < Full < Deep (Joseph Brant's Clear and Full had measured the same).

### Added

- `check-levels.js`: measures every reading with the shared formula, prints the table, and fails on any reading over its level's limit, any topic whose levels do not step up, or any level name or blurb in `app.js` or `build-readings.js` that differs from `READING-LEVELS.md`. Run `node check-levels.js` after editing `readings.js`.

---

## [3.2.1] - 2026-10-15

### Changed

- The masthead fits on one row: title, On Air and Listen / Font / My Work share a line, with less space around the step dial. On a phone it is two tight rows.

---

## [3.2.0] - 2026-10-15

### Changed

- **Handout in the studio.** The handout structure stays (square boxes, ruled lines, one face, no clutter) and the radio warmth comes back: a walnut desk, a dark station masthead with the tuning-dial step row and the current step in gold, a warm cream sheet with brown ink and rules, one rust accent for every action (buttons, selected choices, links), and a colored stripe on each voice label (the word stays, so color is never the only cue). Each step heading has a short rust marker. Dark mode is the same studio at night. Reading pages match. Paper copies stay black and white for the copier.
- **The On Air light** in the masthead lights up while Listen is reading aloud.

---

## [3.1.0] - 2026-10-15

### Added

- **My Lines** (crew step, between Group Doc and Practice). Each student builds the lines for the voice they perform on their own Chromebook, one box at a time, with help that starts at their reading level and can be changed anytime:
  - **Quick:** short sentence frames (at most two blanks, at most twelve printed words) filled by tapping a word bank drawn only from the topic's reading. Only the frame being worked shows its word bank, and frames are optional ("Pick the frames that fit"). Each box has a worked example about a different person with the last frame left blank, and a printed goal ("Aim for 2 or 3 sentences"). Students can change the assembled lines or type their own words in any blank.
  - **Clear:** the question, optional **Stuck?** starters, ruled lines.
  - **Full:** the question and ruled lines.
  - **Deep:** the question, ruled lines, and one "go further" move.
  - **Copy my lines** gives "Name: line" blocks to paste into the Group Doc. **Print my lines sheet** prints the same frames, word bank and ruled lines on paper.
- `builder-banks.js`: word banks for all 22 topics (703 phrases). Every year and proper noun is checked against that topic's own reading text, and phrases are written to read correctly after "I", "she" or "he", and a group name. Legends are worded as legends ("may have", "became a legend").

### Changed

- **The site looks like a handout.** It is black on white with one face, square boxes with thin black rules, text fields as lines to write on, and writing boxes ruled like paper (0.35in). There are no tints, shadows, gradients, rounded cards or decorative icons. Selection shows by inverting or a heavier rule, never by color alone. The page sits like a sheet on a desk. The step row, buttons, checkboxes and voice labels all follow the same print style, so the Group Doc paper copy and the My Lines sheet match the screen. Dark mode is the same sheet inverted. The standalone reading pages match.
- Voices are shown as a word in a box (and H / N / S on the style diagrams), not by color.

---

## [3.0.0] - 2026-10-15

### Workflow restructure: crews plan here and write together in a Google Doc

Groups now plan on this site and write the script together in a Google Doc. Solo students still write the whole script here. Built for Unit 2, Weeks 9 and 10 (launch Oct 26, script builder Oct 30, writing days Nov 2 and 3).

### Added

- **Two paths, chosen on the first step.** Solo: Start, Read, Hook, Story, Wrap, Finish. Crew of 2 to 4: Start, Read, Plan, Group Doc, Practice. The step bar is built from whichever path applies.
- **Your crew** on Start: every student gets a job (Researcher, Lead Scriptwriter, Chief Editor) and a voice (Host, Narrator, Subject). These are checkboxes, so one student can take two jobs and two students can split one. A live line says which jobs or voices are still open. "What does each job do?" explains each one, before writing and in the Doc.
- **Fact Bank** on Read: six rows (up to ten) of fact plus source, replacing the free-text notes box. It feeds the Group Doc.
- **Working thesis** on Read, matching the unit plan's research days.
- **First-pick reading cards:** the first visit shows the first sentence of the chosen topic at each level, so students pick by reading rather than by label.
- **Plan the Episode** (crew): an episode map (Hook, Story, Wrap, with time targets), style cards with a small diagram of each style's boxes, and one line to fill per box, each labeled with the voice and the crew member who speaks it.
- **Group Doc** (crew): **Copy the frame** puts a formatted frame on the clipboard as rich text (crew table, thesis, Fact Bank, one box per beat with guidance, starter and plan line, Editor's Checklist, who does what), ready to paste into a new Google Doc. **Print a paper copy** prints the same frame with ruled writing lines, to the print standard. The frame says plainly that students can change it or make their own version.
- **Practice** (crew): paste the finished script back in ("Maria: ...") to see the read-aloud time and rehearse line by line with each speaker's name.
- **Listen and Font** on every screen and every reading page (ported from colonial-unrest's `reader-tools.js`): sentence-by-sentence read-aloud with highlighting, and a Font menu with Atkinson Hyperlegible Next, Lexend, OpenDyslexic and Verdana, text size, wider spacing, and Light / Dark. The menu is called "Font", not "dyslexia": it is a comfort setting, not an accommodation. Lexend and OpenDyslexic are bundled. Nothing loads from Google Fonts.

### Changed

- **Reading levels are named Quick, Clear, Full, Deep** (formerly "Easier language / A bit easier / Standard / Harder language", and on the reading pages stars plus "Most support ... Challenge"). The names describe the text, never the reader. The keys and the saved preference are unchanged.
- **One typeface:** Atkinson Hyperlegible Next everywhere. Inter, Roboto Slab and Space Mono are removed. No letter-spaced capitals, no italics for running text, nothing a student reads under 15px, and inputs at 17px.
- **Step bar** at 16px and full contrast, numbered. Locked steps get a dashed underline instead of fading to near-invisible.
- **Menus consolidated:** the header has three labeled buttons (Listen, Font, My Work) in place of four icon-only buttons. My Work holds your scripts, a new script, **Back up my work**, **Restore my work** and delete. One dialog covers both backup methods (copy to a Google Doc, or a file). The duplicate Google Doc controls, the "Keep a copy in Google Docs" bar under every step, "Save now" and the separate dark-mode button are gone.
- Steps renamed for a podcast: Hook / Story / Wrap, not Introduction / Content / Conclusion.
- Coming back to the site reopens your most recent script instead of a blank form.
- News Report: the "In their own words" quote is voiced by the Subject.
- Contrast fixes found in an audit of every step in both themes: primary buttons (white on orange was 3.67:1), link teal, key-fact headings, length targets, and several dark-mode panels.

### Removed

- The "Easy start / Medium" badges on the script formats. Like the old level names, they labeled the student by the choice.

### Fixed

- Leaving or reloading an untouched page no longer saves an empty "Untitled script".

---

## [2.0.0] - 2026-08-25

### Milestone: every topic now carries a primary source

The primary-source design from the research phase is fully implemented -
all 22 topics have a Source Spotlight and Voice Bank; nothing shipped
without a verified period text and a passing slur check.

### Added

- **Joseph Brant** - his own letter to Colonel James Monroe (1784-85): "we have been a generous enemy to you during the war... no double faces at war," with his own aside about writing "a letter half English half Indian." The primary evidence behind the Monster-Brant rebuttal.
- **Loyalists** - Samuel Seabury's 1774 "Westchester Farmer" pamphlets: "if I must be enslaved, let it be by a King at least, and not by a parcel of upstart, lawless committee-men" - the Loyalist argument in its own words, framed with the era's shared irony about crying "slavery."

---

## [1.9.0] - 2026-08-25

### Added

- **Seven more primary sources (20 of 22 topics covered)**:
  - **Women** - "The Sentiments of an American Woman" (1780): "Born for liberty," the broadside that launched the Ladies Association's 300,000-dollar campaign
  - **Women's work & political voice** - Blackstone on coverture in the actual 1769 long-s spelling ("the hufband and wife are one perfon in law"), with decoding as part of the task
  - **Abigail Adams** - the "Remember the Ladies" letter in her own spelling ("Laidies," "foment a Rebelion"), from the MHS transcription
  - **African Americans** - the January 1777 petition of "A Great Number of Blackes" (Prince Hall among the signers), manuscript spelling preserved: Massachusetts charged with "the inconsistancey of acting themselves the part which thay condem and oppose in Others"
  - **Native Americans** - the Continental Congress's 1775 address to the Six Nations ("a family quarrel... keep the hatchet buried deep"), framed against Sullivan 1779 and the 1783 treaty
  - **Hessians** - Baroness von Riedesel's cellar at Saratoga: the war from the German side, at a mother's eye level
  - **Indentured servants** - Mittelberger's 1750 account of the ship-deck market where "parents must sell and trade away their children"
- Remaining: Joseph Brant (no authentic first-person text verified yet in Stone) and Loyalists (no strong period voice on hand). Stone's Sullivan-campaign narration was considered and rejected for the Native Americans pairing - perpetrator-viewpoint violence the research says needs teacher-level framing.

---

## [1.8.0] - 2026-08-25

### Added

- **Six more primary sources** (13 of 22 topics now covered):
  - **Mercy Otis Warren** - her 1805 answer, in her own voice, to the claim that politics "lay out of the road of female life," with the long-s printing explained as an artifact
  - **Crispus Attucks** - the 1851 petition by seven Black Bostonians for an Attucks monument, and the legislature's refusal, as printed by Nell (the monument came in 1888)
  - **James Armistead** - Lafayette's 1784 certificate in his own imperfect English, the paper James carried to freedom
  - **Benedict Arnold** - Sparks's 1835 reconstruction of the moment Washington learns of the treason: "Whom can we trust now?"
  - **Nancy Hart** - Ellet's 1848 chapter, framed as the legend's vector: praise and mockery in the same breath
  - **Molly Pitcher** - Joseph Plumb Martin's Monmouth eyewitness account, with a task built on everything the legend adds that the eyewitness never says
- Attucks note: Nell's Botta quotation was passed over for the period term it contains; the monument petition is the cleaner and stronger document. Joseph Brant is deferred until an authentic first-person Brant text is located in Stone - no weak excerpt ships.

---

## [1.7.0] - 2026-08-25

### Added

- **Deborah Sampson primary source**: the 1792 Massachusetts Resolve granting "Deborah Gannett" her back pay - a government document confirming, in writing, that a woman "did actually perform the duty of a soldier" under the name Robert Shurtliff. Spotlight, glosses, and Voice Bank lines.
- Three sources added from the research reading list: Dunmore's Proclamation full text and the Book of Negroes ledger plus Boston King's 1798 memoir (enslaved people & British freedom), and Baroness von Riedesel's Letters and Journals - the first first-person Hessian-side voice in that topic's sources.

### Fixed

- Verified the new Source Spotlight and Voice Bank at narrow width: no horizontal overflow, and the reading drawer's bottom-sheet mode renders correctly with the Voice Bank inside.

---

## [1.6.0] - 2026-08-25

### Added

- **Primary sources for six topics** (`sources.js`), implementing the approved design from the research phase:
  - **Source Spotlight** (Research step): a real period document - Sarah Osborn's 1837 deposition, Joseph Plumb Martin's enlistment scene, Wheatley's 1773 attestation, the 1907 Ludington memoir (framed as the legend's origin), Nell's 1855 Bunker Hill passage with the erased-engraving footnote, and Dunmore's Proclamation. 150-250 words, period spelling intact, tap-to-reveal glosses, and a "Make it yours" paraphrase task - the paraphrase is the student's work, never supplied.
  - **Voice Bank** (writing drawer, Intro/Content/Conclusion): short quoted period lines filtered to the current step, with attribution.
  - **Two Sources, One Story**: Dunmore's 1775 freedom promise beside the 1783 Book of Negroes ledger naming real people who sailed with the British.
- `check-sources.js`: every excerpt passes a mechanical slur check, enforced by the pre-commit hook. Period racial language that remains (e.g. in the attestation and proclamation) is framed at the point of encounter, per the archival-practice research.

---

## [1.5.1] - 2026-08-25

### Changed

- **Some Support readings sit clearly below Standard again**: after the 1.4.0 Standard rewrite, eight Some Support texts read as hard as - or harder than - their Standard versions. Those eight (indentured servants, camp followers, African Americans, Hessians, Molly Pitcher, Native Americans, enslaved people & British freedom, Nancy Hart) were simplified by splitting long sentences. Same facts and glosses. The four levels now step cleanly: roughly grades 5 / 7.5 / 9.5 / college.

---

## [1.5.0] - 2026-08-24

### Added

- **Vocabulary support at every level**: Some Support, Standard, and Challenge readings now gloss difficult words, not just Most Support (87 new glosses). The support scales with the level - academic words at Some Support, lower-frequency terms at Standard (*elegy*, *acquitted*, *principalities*), technical and period terms at Challenge (*attestation*, *redoubt*, *feme-sole traders*). On the standalone reading pages the definitions are tap-to-reveal; in the app they show as parentheticals, matching the existing Most Support style. Every topic now has glossed vocabulary at all four levels.

---

## [1.4.0] - 2026-08-24

### Added

- **Standalone reading pages**: every topic now has its own link, like `/readings/phillis-wheatley/`. Pages are generated from `readings.js` by `build-readings.js`, inherit the On The Air theme (light and dark), keep the four-level switcher, and share the reading-level preference with the app. An index of all 22 lives at `/readings/`.
- **Tap-to-reveal vocabulary**: on the standalone pages, glossed words show a dotted underline; tapping reveals the definition next to the word (hidden until requested, per the DIG/SHEG glossing guidance). Printing or browsing without JavaScript shows definitions as plain parentheticals, and print shows all four levels with headings.

### Changed

- **Standard readings now sit at 8th grade**: all 22 Standard-level texts were rewritten from roughly college-level sentence complexity (avg 23 words per sentence) to on-grade (avg 14.5). Same facts, names, dates, and analytical voice - shorter sentences. Verified mechanically that every year, number, and proper noun survived.
- The Native Americans reading defines *neutral* as "not taking either side" instead of the slangy "out of it"

---

## [1.3.0] - 2026-08-18

### Added

- **Your reading** drawer on Intro, Content, and Conclusion: the leveled source stays next to the script. Closed by default. Language pills match the Research step. On a laptop the script shifts over so students can type while they read; on a narrow screen it opens as a bottom sheet. Esc or Close dismisses it.

---

## [1.2.2] - 2026-08-18

### Changed

- Writing prompts are wired to their text boxes, so tapping a label focuses the field
- Interview, scene, and diary headings use the same warm green as the rest of Content
- Leftover indigo and Material-green CSS (including dead time-estimator styles) now follow the On The Air tokens
- The footer shows the shipped version on first paint, then adds the build hash

---

## [1.2.1] - 2026-08-18

### Changed

- Most Support and Some Support readings gloss or replace hard academic words (for example, *contradiction*, *coverture*, *proclamation*) instead of leaving them undefined
- Taglines and quick facts, which show at every reading level, use plainer language so students who need the most support can read the research header

---

## [1.2.0] - 2026-08-18

### Added

- **Help me write** on each writing field: sentence starters, verb banks, and helper text stay collapsed until asked for
- **Copy to Google Doc** in the header (and ... menu), plus **Restore from Google Doc**
- **I read this and I'm ready to write** checkbox on the Research step
- Podcast name is suggested from the chosen topic and can still be edited

### Changed

- Step 1 only requires name and topic to continue; research notes moved to the Research step
- Live time badge counts only the active intro, content, and conclusion styles
- Pair/group introductions appear at the top of the Intro step
- Role labels ask for the student voicing each part, not the historical figure
- Reading controls use language labels (Easier language / Harder language) instead of stars
- Shorter topic names for two group themes; old saved names still load
- Conclusion frame "What's Usually Left Out" replaces the harder editorial example
- Model examples note that they are someone else's story
- Tuner steps use numbers on small screens

### Fixed

- Restore copy no longer points to a control "at the top"
- Help icons open on tap as well as hover
- Rubrics are no longer wrapped in a second Show checklist toggle

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

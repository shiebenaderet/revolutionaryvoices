# Revolutionary Voices: UI Review and Podcast Crew Plan
*Review and proposal · 2026-10-15 · approved the same day and built as 3.0.0 (see CHANGELOG)*

## Why now

This site was built in July and August. Since then the course has settled on
conventions in `colonial-unrest`, `ams`, `studytools` and the handout work, and this
site predates all of them:

- **Reading levels are Level 0, 1, 2, 3** for students. The internal names (Most
  Support ★ … Challenge ★★★★) stay in code and teacher docs only. Blurbs describe
  the text, never the reader. The first pick shows the same sentence at each level.
  Default is Level 2.
- **One typeface: Atkinson Hyperlegible Next**, bundled, never a Google Fonts link
  (school filters block CDNs; this repo learned that in 1.0.0).
- **No letter-spaced caps labels, no taglines, no italics for long passages.**
  Title Case headings, left-aligned, ragged right. Text 4.5:1 minimum; Focus Mode in
  `colonial-unrest` hit 7:1. Locked states use dashed borders, not fading.
- **The reader menu is called "Font," not "dyslexia mode."** Dyslexia typefaces show
  no reading benefit in the research (pooled g = -0.04 over 15 studies), so it is a
  comfort preference. Calling it an accommodation invites it to stand in for one.
  Options: Atkinson (default), Lexend, OpenDyslexic, Verdana, plus size and wider
  spacing. Size uses an attribute and a screen-only rule so print doesn't come out
  at screen size. All of this lives in `reader-tools.js`, along with **Listen**
  (sentence-by-sentence read-aloud with highlighting and a "Mr. B" voice option).

## What the site does well

- Leveled readings at four levels, same facts, glossed vocabulary at every level,
  primary sources for all 22 topics.
- "Help me write" keeps starters and verb banks out of the way until a student asks.
- The reading drawer keeps the source beside the script while writing.
- Autosave, keyboard and ARIA work, a skip link, reduced motion respected.
- Linear steps with the next step locked, so students can't skip research.

## What gets in the way (walked through at 1366×768 and 390 wide)

### Readability
1. **Three typefaces** (Inter, Roboto Slab, Space Mono), and the monospace is on
   the things students must read and press: step names, Back/Next, "See Examples,"
   "Build My Script," the reading-level pills, badges, the footer.
2. **The step navigator is the hardest text on the page**: 10–11px Space Mono at 65%
   opacity, and the locked steps are fainter still. On a Chromebook "Intro" and
   "Content" are close to invisible.
3. **Letter-spaced caps**: "SCRIPT BUILDER," "ON AIR," "SAVED SCRIPTS,"
   "MEDIUM / EASY START" badges, HOST / NARRATOR / SUBJECT chips, the script's
   section dividers.
4. **Italics** on gloss definitions, Voice Bank quotes and "Why these work" notes.
5. **No Font menu and no Listen.** For a Level 0 reader or a student with a reading
   IEP this is the biggest gap. Colonial Unrest has both on every screen.

### Reading levels
6. Pills read **"Easier language / A bit easier / Standard / Harder language."**
   That matches neither the course (Level 0–3) nor itself. Same on all 22
   standalone reading pages.
7. **No first pick.** Students land on Standard with no sample-sentence cards.
8. **"EASY START / MEDIUM" badges on the script formats** label the student by the
   choice they make. That's the same problem the level blurbs were rewritten to fix.

### Menus (four places to save, two backup systems)
9. Header: four **icon-only buttons** (+, a page icon, ..., a moon). Students can't
   tell what they do without hovering, and Chromebook touch has no hover.
10. **Copy to Google Doc appears three times**: the header icon, the ... menu, and
    the "Keep a copy in Google Docs" bar under every step. **Restore** appears twice.
11. **Two backup systems**: a JSON file (Export/Import) and a Google Doc with a
    base64 RESUME CODE. Students don't know which one to use.
12. **"Save now"** suggests saving is manual when it isn't.
13. The dark-mode toggle is its own button. In Colonial Unrest it sits in Settings.

### Guiding the writing
14. **Choice overload**: 4 intro styles × 4 content formats × 4 conclusion styles,
    61 text boxes in the page. Each choice is made on its own step, so students
    never see the overall shape of the episode before they commit.
15. **Group setup is optional and comes late.** Group size is hidden under
    "A few more details," and "Who's playing each part?" is asked on step 6,
    after the script is written. Roles should shape the work from the start.
16. **Essay words for a podcast**: Intro / Content / Conclusion. "Hook / The Story /
    The Wrap" tells students what each part is for.
17. **The Google Doc copy is a backup, not something to work in.** It's flat text
    plus a long code line students are told not to touch. That's the wrong thing to
    hand a group that will spend three days writing together in it.
18. Footer says v1.3.0; the changelog is at 2.0.0.

## Will it support all students?

Mostly, for **reading**. The leveled texts and glosses are strong. Not yet for
**access**: no read-aloud, no font/size/spacing, tiny step labels, no Level 0
translations (Colonial Unrest has Spanish, Portuguese, Russian, Chinese). And not
yet for **groups**: the site assumes one student at one keyboard writing a full
script, then adds names at the end.

## Proposal: the site builds the frame, the group writes in Google Docs

The site is good at things Docs can't do: leveled reading, sources, starters, the
format choices, timing and practice. Google Docs is good at what the site can't do:
three people writing at once, comments, suggesting mode, and version history, which
shows the teacher who wrote what. So split the work along that line.

### The crew: a job and a voice for everyone

Production jobs and on-air voices are separate. Each student has one of each, so
no one is "just the researcher" when it's time to record.

| Job | Before writing (site) | While writing (Google Doc) | On air |
|---|---|---|---|
| **Researcher** | Leads the Research step. Builds the **Fact Bank**: 6–8 facts, each with its source, plus 2 lines from the Voice Bank. | Fact-checks in comments. Adds a fact when the writer asks for one. | Voices one part |
| **Lead Scriptwriter** | Picks the formats and fills the **Script Frame**: one line per beat, not full sentences. | Drafts the script in the Doc from the frame. | Voices one part |
| **Chief Editor** | Owns the **Editor's Checklist**: the time target (3–5 min), rubric rows, "every fact traces to the Fact Bank." | Works in Suggesting mode, resolves comments, runs the time check, signs off. | Voices one part |

Everyone reads the source, each at their own level, on their own device. The
Researcher leads the reading; they don't do it for the group. On-air voices stay
Host / Narrator / Subject. Each student drafts the lines for the voice they'll
perform, so every student writes something that shows up in version history, and
the Lead Scriptwriter stitches it together.

**Pairs**: Lead Scriptwriter + Researcher-Editor. **Solo**: all three, and
the site's full-prose writing path stays for solo and absent students.

### Student path

**Day 1, on the site (each student on their own Chromebook, same topic)**
1. **Your Crew** (replaces Basics). Topic, podcast name, crew names, a job for each
   person, a voice for each person. Each job has a plain-words card and a short
   "your job today" checklist. Required for groups. Solo is one tap.
2. **Read** (Research). Level 0–3 picker with sample-sentence cards on first visit.
   Listen and Font on screen. The Researcher's Fact Bank form sits under the reading.
   The others get an optional "3 facts I want in the script."
3. **Plan the Episode** (Intro/Content/Conclusion become one planning step). Show the
   whole episode as a map: **Hook → The Story → The Wrap**, with time targets.
   Pick a style for each with one-line descriptions, no difficulty badges. Under
   each, the frame shows the beats ("Beat 1: Narrator sets the scene, 1763
   Boston") and one line to fill per beat. Starters and examples stay behind
   "Help me write."
4. **Make Our Group Doc.** One button copies a formatted outline as rich text
   (`ClipboardItem` with `text/html`, so headings, tables and checkboxes paste into
   Docs as real formatting) and opens `docs.new`. The doc contains: the title and crew
   table (job and voice), the Fact Bank with sources, the Script Frame with each
   beat as a heading and its starters underneath, the Editor's Checklist, and a
   "share with your crew and Mr. B" reminder. No resume code in this doc.

**Days 2–3, in Google Docs.** Write, comment, suggest, resolve. The reading pages
(`/readings/<topic>/`) stay open in another tab at each student's own level.

**Day 4, back on the site: Practice.** Paste the finished script into **Practice**
to get the time estimate and line-by-line rehearsal with the crew's names. Turn
in the Doc link on Canvas.

### Teacher-side notes

- A teacher-made Google Doc template (Classroom "make a copy for each student")
  would also work, but then the frame isn't filled in with the group's topic, facts
  and formats. The generated paste keeps the group's Day 1 work. The site can't
  create Docs directly without a Google sign-in.
- Version history plus each student writing their own voice's lines gives you
  individual evidence inside a group grade.
- Risk: the Researcher front-loads the work and has less to do on Days 2–3. The
  fact-check comments and their own voice's lines are what keep them busy. Watch
  for it in the first period that runs it.

## Menu consolidation

One header row. Every button gets a text label:

```
Revolutionary Voices        [Listen] [Font]  [My Work ▾]
Your Crew · Read · Plan the Episode · Group Doc · Practice      (step bar, 15px+)
```

- **Listen** and **Font**: ported from `colonial-unrest/reader-tools.js`. Font
  panel also holds Light / Dark. Lexend and OpenDyslexic bundled in `fonts/`,
  not loaded from Google Fonts.
- **My Work ▾**: the saved scripts list, New script, Make Our Group Doc, Save a
  backup file, Load a backup file, Delete. "Save now" goes away (a status line says
  "Saved on this computer"). The Google Doc resume code goes away from the group
  doc. The file backup is the one way to move between computers. Existing resume
  codes keep working through Load.
- The "Keep a copy in Google Docs" bar under every step goes away. That job moves
  to the Group Doc step and My Work.
- The standalone reading pages get the same Listen, Font and Level 0–3 bar.

## Build order

Each phase ships on its own and is useful alone.

1. **Readability and levels (low risk, do first).** Atkinson as the one face;
   remove Space Mono from controls; step bar ≥15px at full contrast, locked steps
   dashed; remove letter-spaced caps and long-passage italics; Level 0–3 pills and
   sample-sentence cards in the app and `build-readings.js`; remove difficulty
   badges; port Listen and Font; fix the footer version. *Minor release.*
2. **Menu consolidation.** My Work menu, labeled buttons, one backup path, remove
   the duplicate Google Doc controls. *Minor release.*
3. **Crew and planning.** Your Crew step, role cards, Fact Bank, Plan the Episode
   map with beat frames; keep the full-prose path for solo. Existing field IDs stay,
   so saved work still loads. *Major release (3.0.0): workflow restructure.*
4. **Group Doc and Practice paste-in.** Rich-text export, `docs.new`, paste a
   finished script back in for timing and rehearsal.

## Decisions (Mr. B, Oct 15)

1. **Jobs and voices for everyone, but flexible.** Students can share a job, split one, or take two, and the site says so plainly. Built as checkboxes, not one-per-person.
2. **Groups write in Google Docs; solo students write on the site.**
3. **The site makes the frame,** and students are free to change it or make their own. It comes both as a Doc to paste and as a printable skeleton with boxes and ruled lines.
4. **Calendar** (ams-planning `Unit-2-Blueprint.html`, `course-calendar.js`): launch and research Oct 26 to 29, script builder introduced Fri Oct 30, writing Mon Nov 2 and Tue Nov 3, recording Nov 4.
5. **Reading levels are Quick, Clear, Full, Deep** across every course site (formerly Level 0 to 3).

   **Reading levels note (3.2.2).** What each name means is defined once, in
   `READING-LEVELS.md` at the repo root (an identical copy lives in every course
   repo): the blurbs, the reader bands, and a measured Flesch-Kincaid limit per level
   (Quick 5.0, Clear 7.5, Full 10.5, Deep above that topic's Full). `node
   check-levels.js` enforces it on `readings.js`. A reading that measures outside its
   level is rewritten (language only, never the facts), not relabeled.

6. **Translations later.**

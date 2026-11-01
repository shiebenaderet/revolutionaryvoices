/* Crew workflow for Revolutionary Voices (3.0.0).

   A group plans on this site and writes the script together in a Google Doc:
     Start      - who is in the crew, and each person's job(s)
     Read       - first-pick level cards, the Fact Bank, the working thesis
     Plan       - pick a style for the Hook, Story and Wrap; one line per box;
                  then Who says it?: names on the parts this episode uses
     Group Doc  - copy a frame into a Google Doc (or print it on paper)
     Practice   - paste the finished script back to time it and rehearse
   A solo student still writes the whole script in the Hook / Story / Wrap steps.

   Jobs and voices are checkboxes, not one-per-person dropdowns, on purpose: in a
   pair, or when someone is out, one student does two jobs, and two students can
   split one job. Voices are picked after the styles (3.4.0), because the styles
   decide which voices an episode has: a Dramatic Hook, a News Report and a Legacy
   wrap have no Narrator at all. Every input here has an id, so app.js saves and restores it like
   any other field. They are all built now, while the page is parsing, so they
   exist before app.js restores saved work on load. */
(function () {
  'use strict';

  var CREW_MAX = 4, FACT_MAX = 10, FACT_START = 6;

  var JOBS = [
    { id: 'research', name: 'Researcher', short: 'Finds the facts and where each one came from.',
      before: 'Leads the reading and fills in the Fact Bank. Every fact gets a source.',
      during: 'Checks the facts in the Doc. Adds a comment when a line needs a source.' },
    { id: 'write', name: 'Lead Scriptwriter', short: 'Fills in the plan and pulls the script together.',
      before: 'Fills in the plan: a few words for each question.',
      during: "Writes the first draft in the Doc and puts everyone's lines in order." },
    { id: 'edit', name: 'Chief Editor', short: 'Keeps the script on time and on track.',
      before: 'Watches the time and the checklist.',
      during: 'Edits in Suggesting mode, so changes show up as suggestions. Makes sure everyone has lines, and times a read-aloud.' }
  ];
  var VOICES = [
    { id: 'host', name: 'Host', does: 'Talks to listeners and asks the questions.' },
    { id: 'narrator', name: 'Narrator', does: 'Sets the scene and moves the story along.' },
    { id: 'subject', name: 'Subject', does: 'The person from history, speaking as "I".' }
  ];

  /* The three parts and the boxes ("beats") inside each style. Field ids are the
     solo writing fields, so a style chosen here is the same style on the solo
     steps, and the guidance and sentence starters come from those fields. */
  /* The short episode (teacher, Nov 1: "many will struggle" to write a full script in two days).
     Every group writes the same boxes, and each Plan question becomes one box, so the plan is the
     outline. The style ids are the solo steps' radios (Shocking Fact, Story in Three Scenes, Why It
     Matters), trimmed to the boxes below; the longer styles stay on the solo path. */
  var PARTS = [
    { radio: 'intro', prefix: 'intro-', name: 'The Hook', time: 'about 30 seconds', styles: [
      { id: 'fact', name: 'The Surprise', desc: 'Open with the most surprising true thing in your story.', beats: [
        ['fact-statement', 'The Surprise', 'host']] }
    ] },
    { radio: 'content', prefix: 'content-', name: 'The Story', time: '1 to 2 minutes', styles: [
      { id: 'narrative', name: 'Three Scenes', desc: 'Who they were, what they did, and what happened because of it.', beats: [
        ['narrative-intro', 'Set the Scene', 'narrator'], ['narrative-scene1', 'Who They Were', 'subject'],
        ['narrative-scene2', 'What They Did', 'subject'], ['narrative-scene3', 'What Happened Because of It', 'subject']] }
    ] },
    { radio: 'conclusion', prefix: 'conclusion-', name: 'The Wrap', time: 'about 30 seconds', styles: [
      { id: 'significance', name: 'Why It Matters', desc: 'Your thesis, and why it matters today.', beats: [
        ['sig-why', 'Why It Matters', 'host']] }
    ] }
  ];
  /* What each short box asks for, in place of the solo field's longer guidance. The starters match
     the Plan questions' "Start with" lines. */
  var SHORT_GUIDE = {
    'group-welcome': { what: 'Welcome listeners. Say the podcast name and who the episode is about', target: '15-25 words (1-2 sentences)', starter: 'Welcome to' },
    'fact-statement': { what: 'Tell the most surprising true thing in your story. Use your plan for The Hook', target: '20-40 words (2-3 sentences)', starter: "Most people don't know that" },
    'narrative-intro': { what: 'Set the scene: when and where the story starts, and who we will hear about', target: '20-40 words (2-3 sentences)', starter: 'It is' },
    'narrative-scene1': { what: 'Who they were and where they lived during the Revolution. Use your plan for Who They Were', target: '40-70 words (3-5 sentences)', starter: 'This is the story of' },
    'narrative-scene2': { what: 'What they did during the Revolution, and why it was hard or risky. Use your plan for What They Did', target: '40-70 words (3-5 sentences)', starter: 'During the war,' },
    'narrative-scene3': { what: 'What happened because of what they did. Use your plan for What Happened Because of It', target: '40-70 words (3-5 sentences)', starter: 'Because of this' },
    'sig-why': { what: 'Why it matters: say your thesis and why someone today should care. Use your plan for The Wrap', target: '40-60 words (3-4 sentences)', starter: 'This story matters today because' }
  };
  /* A crew's Hook opens with the crew introducing themselves. */
  var CREW_OPENING = [['group-intro', 'Say Hello', 'all'], ['group-welcome', 'Welcome Listeners', 'host']];

  var CHECKLIST = [
    'The Hook grabs listeners in the first 30 to 45 seconds.',
    'Everyone in the group has lines.',
    'Every fact comes from the Fact Bank and says where it came from.',
    'The Wrap says why this story matters (your thesis).',
    'We read it aloud with a timer (Time It on the script builder, or any Chromebook timer): 2 to 4 minutes.',
    'Every line starts with who says it, like "Maria: ..."'
  ];

  /* Oct 23 (teacher): nobody plays a person who was enslaved. For these topics the
     Narrator tells the story and reads the person's own words when we have them, so
     the styles built on a Subject speaking as "I" (Interview, Diary) are not offered,
     and every Subject box becomes the Narrator's. */
  var NO_SUBJECT = ['james-armistead', 'peter-salem', 'phillis-wheatley', 'crispus-attucks', 'african-americans', 'enslaved-british-freedom'];
  var SUBJECT_STYLES = ['interview', 'diary'];
  function noSubject() { return typeof rvCurrentTopic === 'function' && NO_SUBJECT.indexOf(rvCurrentTopic()) !== -1; }
  function styleOpen(st) { return !(noSubject() && SUBJECT_STYLES.indexOf(st.id) !== -1); }
  function checklist() {
    return noSubject()
      ? CHECKLIST.concat(['Nobody plays the person: the Narrator tells their story, and real words from the time are read as a quote, saying who said them.'])
      : CHECKLIST.concat(['The historical figure speaks in first person ("I", "my").']);
  }

  /* ---------------------------------------------------------------- helpers */
  function $(id) { return document.getElementById(id); }
  function esc(str) {
    return String(str == null ? '' : str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function val(id) { var el = $(id); return el ? el.value.trim() : ''; }
  function checked(id) { var el = $(id); return !!(el && el.checked); }
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html != null) e.innerHTML = html;
    return e;
  }
  function save() { if (typeof autoSave === 'function') autoSave(); }
  function refreshSteps() {
    if (typeof wizUpdateStepper === 'function') wizUpdateStepper();
    if (typeof wizUpdateNav === 'function') wizUpdateNav();
  }

  /* Guidance for a writing field, read from the solo step's own markup (so the
     two never disagree): what to write, the length target, the first starter. */
  var GUIDE = {};
  function readGuide(id) {
    var field = $(id);
    var g = { what: '', target: '', starter: '' };
    if (!field) return g;
    var n = field.nextElementSibling, hops = 0;
    while (n && hops < 10 && n.tagName !== 'LABEL' && n.tagName !== 'H3') {
      if (n.classList && n.classList.contains('helper-text')) {
        var m = n.innerHTML.match(/What to write:<\/strong>([\s\S]*?)(<br|$)/);
        if (m) g.what = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        var len = n.querySelector('.length');
        if (len) g.target = len.textContent.replace(/^\s*Target:\s*/, '').replace(/\s+/g, ' ').trim();
      }
      n = n.nextElementSibling; hops++;
    }
    var re = new RegExp("insertStarter\\('" + id.replace(/[-]/g, '\\-') + "', '((?:[^'\\\\]|\\\\.)*)'\\)");
    var btns = document.querySelectorAll('.starter-btn');
    for (var i = 0; i < btns.length; i++) {
      var sm = (btns[i].getAttribute('onclick') || '').match(re);
      if (sm) { g.starter = sm[1].replace(/\\'/g, "'").trim(); break; }
    }
    if (!g.what && field.placeholder) g.what = field.placeholder;
    return g;
  }
  function guideFor(id) { if (SHORT_GUIDE[id]) return SHORT_GUIDE[id]; if (!GUIDE[id]) GUIDE[id] = readGuide(id); return GUIDE[id]; }

  /* ---------------------------------------------------------------- crew rows */
  function buildCrewRows() {
    var host = $('crewRows');
    if (!host) return;
    for (var i = 1; i <= CREW_MAX; i++) {
      var row = el('fieldset', { 'class': 'crew-row', id: 'crewRow' + i, 'data-no-listen': '' });
      var html = '<legend>Person ' + i + '</legend>' +
        '<label class="crew-name-label" for="crew' + i + '-name">First name</label>' +
        '<input type="text" id="crew' + i + '-name" class="crew-name" maxlength="24" autocomplete="off" placeholder="First name">' +
        '<div class="crew-picks"><span class="crew-pick-label" id="crew' + i + '-jobs-label">Job</span>' +
        '<div class="chip-checks" role="group" aria-labelledby="crew' + i + '-jobs-label">';
      JOBS.forEach(function (j) {
        html += '<label class="chip-check"><input type="checkbox" id="crew' + i + '-job-' + j.id + '"><span>' + j.name + '</span></label>';
      });
      html += '</div></div>';
      row.innerHTML = html;
      host.appendChild(row);
    }
    host.addEventListener('input', crewCheck);
    host.addEventListener('change', crewCheck);

    var jobs = '<dl class="job-list">';
    JOBS.forEach(function (j) { jobs += '<dt>' + j.name + '</dt><dd>' + j.short + '</dd>'; });
    jobs += '<dt>Everyone</dt><dd>Reads the source and writes their own lines.</dd></dl>';
    if ($('crewJobsBody')) $('crewJobsBody').innerHTML = jobs;
  }

  /* Who says each part. The checkboxes keep their 3.0 ids (crew1-voice-host and so
     on), so saved work still loads; they are built now and parked, and Plan moves
     them into the Who says it? grid. */
  var CAST_INPUTS = {};
  function buildCastInputs() {
    var park = el('div', { hidden: '', id: 'castInputPark' });
    for (var i = 1; i <= CREW_MAX; i++) {
      VOICES.forEach(function (v) {
        var lab = el('label', { 'class': 'chip-check cast-pick' });
        lab.innerHTML = '<input type="checkbox" id="crew' + i + '-voice-' + v.id + '"><span></span>';
        CAST_INPUTS[i + '-' + v.id] = lab;
        park.appendChild(lab);
      });
    }
    document.body.appendChild(park);
  }
  /* A name checked or unchecked: redraw the plan (its box labels and the cast
     status) and keep focus on the same checkbox. */
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t || !/^crew\d-voice-/.test(t.id || '')) return;
    var id = t.id;
    save();
    renderPlan();
    refreshSteps();
    var again = $(id);
    if (again) again.focus();
  });

  function crewSize() {
    var g = $('groupSize');
    var n = g ? parseInt(g.value, 10) : 0;
    return n >= 2 ? Math.min(n, CREW_MAX) : 0;
  }
  function isCrew() { return crewSize() > 0; }

  function crewMembers() {
    var out = [];
    for (var i = 1; i <= crewSize(); i++) {
      out.push({
        n: i, name: val('crew' + i + '-name'),
        label: val('crew' + i + '-name') || 'Person ' + i,
        jobs: JOBS.filter(function (j) { return checked('crew' + i + '-job-' + j.id); }),
        voices: VOICES.filter(function (v) { return checked('crew' + i + '-voice-' + v.id); })
      });
    }
    return out;
  }

  function crewCheck() {
    if (!isCrew()) return;
    var members = crewMembers();
    var names = members.map(function (m) { return m.name; }).filter(Boolean);
    var sn = $('studentName');
    if (sn) sn.value = names.length > 1 ? names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1] : (names[0] || '');
    var open = [];
    JOBS.forEach(function (j) {
      if (!members.some(function (m) { return m.jobs.indexOf(j) !== -1; })) open.push(j.name);
    });
    var noJob = members.filter(function (m) { return m.name && !m.jobs.length; }).map(function (m) { return m.name; });
    var msg = open.length ? 'Still need: ' + open.join(', ') + '. Someone can take two.' : 'Every job has someone.';
    var dup = names.filter(function (n, i) { return names.map(function (x) { return x.toLowerCase(); }).indexOf(n.toLowerCase()) !== i; });
    if (dup.length) msg += ' Two people are named ' + dup[0] + ': add a last initial, like ' + dup[0] + ' R.';
    if (noJob.length) msg += ' ' + noJob.join(' and ') + (noJob.length > 1 ? ' need' : ' needs') + ' a job too.';
    var box = $('crewCheck');
    if (box) { box.textContent = msg; box.classList.toggle('is-ok', !open.length && !noJob.length && !dup.length); }
    refreshSteps();
  }

  window.crewUpdateMode = function () {
    var g = $('groupSize');
    var v = g ? g.value : '';
    var solo = v === '1', crew = isCrew();
    if ($('soloNameWrap')) $('soloNameWrap').hidden = !solo;
    if ($('crewWrap')) $('crewWrap').hidden = !crew;
    for (var i = 1; i <= CREW_MAX; i++) { var r = $('crewRow' + i); if (r) r.hidden = !(crew && i <= crewSize()); }
    var hint = $('pathHint');
    if (hint) {
      hint.textContent = solo ? 'You will write your whole script here, one part at a time.'
        : crew ? 'Your group plans here. Then you write the script together in a Google Doc.'
        : 'Groups plan here, then write together in a Google Doc. If you are working alone, you write your whole script here.';
    }
    var fh = $('factBankHint');
    if (fh) fh.textContent = crew
      ? 'The Researcher leads, and anyone can add. Write each fact in your own words, and say where you found it. Aim for six. Every fact in your script should come from this list.'
      : 'Write each fact in your own words, and say where you found it. Aim for six. Every fact in your script should come from this list.';
    if (crew) crewCheck();
    if (typeof wizPathChanged === 'function') wizPathChanged();
  };

  window.crewNamesComplete = function () {
    return crewMembers().every(function (m) { return !!m.name; });
  };
  window.crewFirstMissingName = function () {
    var m = crewMembers().filter(function (x) { return !x.name; })[0];
    return m ? $('crew' + m.n + '-name') : null;
  };
  /* Names voicing a part ("Maria and Alex"), or '' when no crew has named it. */
  window.crewVoiceNames = function (voice) {
    if (!isCrew()) return '';
    var names = crewMembers().filter(function (m) {
      return m.name && m.voices.some(function (v) { return v.id === voice; });
    }).map(function (m) { return m.name; });
    return names.join(' and ');
  };

  /* ---------------------------------------------------------------- Fact Bank */
  function buildFactRows() {
    var host = $('factRows');
    if (!host) return;
    var html = '<div class="fact-head" aria-hidden="true"><span></span><span>Fact, in your own words</span><span>Where it came from</span></div>';
    for (var i = 1; i <= FACT_MAX; i++) {
      html += '<div class="fact-row" id="factRow' + i + '" data-no-listen>' +
        '<span class="fact-num" aria-hidden="true">' + i + '</span>' +
        '<label class="sr-only" for="fact' + i + '">Fact ' + i + '</label>' +
        '<input type="text" id="fact' + i + '" placeholder="Fact ' + i + '">' +
        '<label class="sr-only" for="fact' + i + '-src">Source for fact ' + i + '</label>' +
        '<input type="text" id="fact' + i + '-src" placeholder="Where it came from: the page, book or museum">' +
        '</div>';
    }
    host.innerHTML = html;
  }
  function factRowsShown() {
    var last = FACT_START;
    for (var i = 1; i <= FACT_MAX; i++) if (val('fact' + i) || val('fact' + i + '-src')) last = Math.max(last, i);
    return last;
  }
  var factShown = FACT_START;
  function syncFactRows() {
    factShown = Math.max(factShown, factRowsShown());
    for (var i = 1; i <= FACT_MAX; i++) { var r = $('factRow' + i); if (r) r.hidden = i > factShown; }
    var more = $('factMore');
    if (more) more.hidden = factShown >= FACT_MAX;
  }
  window.addFactRow = function () {
    factShown = Math.min(FACT_MAX, factShown + 1);
    syncFactRows();
    var f = $('fact' + factShown);
    if (f) f.focus();
  };
  function facts() {
    var out = [];
    for (var i = 1; i <= FACT_MAX; i++) {
      if (val('fact' + i) || val('fact' + i + '-src')) out.push({ fact: val('fact' + i), src: val('fact' + i + '-src') });
    }
    return out;
  }

  /* ---------------------------------------------------------------- level cards */
  var LEVEL_ORDER = ['mostSupport', 'someSupport', 'standard', 'challenge'];
  function firstSentence(html) {
    var text = String(html || '').replace(/<\/(p|li|h\d)>/g, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    var m = text.match(/^.{20,}?[.!?](?=\s+["“A-Z0-9]|$)/);
    var s = m ? m[0] : text.slice(0, 140);
    return s.length > 170 ? s.slice(0, 165).replace(/\s+\S*$/, '') + '…' : s;
  }
  function levelPicked() {
    try { return !!localStorage.getItem('rvReadingLevel'); } catch (e) { return true; }
  }
  window.crewRenderLevelPick = function () {
    var box = $('levelPick');
    if (!box) return;
    var id = typeof rvCurrentTopic === 'function' ? rvCurrentTopic() : '';
    var r = id && window.RV_READINGS ? window.RV_READINGS[id] : null;
    if (!r || levelPicked()) { box.hidden = true; box.innerHTML = ''; return; }
    var html = '<legend>Pick your reading</legend><p class="field-hint">Read the first sentence of each version. Pick the one that is easy for you to read. You can switch anytime.</p><div class="level-cards">';
    LEVEL_ORDER.forEach(function (k) {
      html += '<button type="button" class="level-card" data-level="' + k + '" onclick="setReadingLevel(\'' + k + '\')">' +
        '<span class="level-card-name">' + RV_LEVEL_NAMES[k] + '</span>' +
        '<span class="level-card-blurb">' + RV_LEVEL_BLURBS[k] + '</span>' +
        '<span class="level-card-sample">“' + esc(firstSentence(r.levels && r.levels[k])) + '”</span></button>';
    });
    html += '</div>';
    box.innerHTML = html;
    box.hidden = false;
  };

  /* ---------------------------------------------------------------- plan */
  var PLAN_INPUTS = {};
  function allBeats(part, style) {
    var beats = style.beats.slice();
    if (part.radio === 'intro' && isCrew()) beats = CREW_OPENING.concat(beats);
    if (noSubject()) beats = beats.map(function (b) { return b[2] === 'subject' ? [b[0], b[1], 'narrator'] : b; });
    return beats;
  }
  function buildPlanInputs() {
    var park = el('div', { hidden: '', id: 'planInputPark' });
    var ids = CREW_OPENING.map(function (b) { return b[0]; });
    PARTS.forEach(function (p) { p.styles.forEach(function (s) { s.beats.forEach(function (b) { ids.push(b[0]); }); }); });
    ids.forEach(function (fid) {
      var input = el('input', { type: 'text', id: 'plan-' + fid, 'class': 'plan-line', maxlength: '160',
        placeholder: 'One line: what happens here' });
      PLAN_INPUTS[fid] = input;
      park.appendChild(input);
    });
    document.body.appendChild(park);
    buildPlanQuestions(park);
  }

  /* Plan questions (teacher, Oct 31): students can't describe a box they haven't
     written yet, so Plan asks questions they answer from their Fact Bank instead.
     The parts run in the order the episode plays (teacher, Oct 31). The answers
     go into the Group Doc and show on My Lines beside each box. The old one-line
     plan inputs stay parked, so a plan saved before this still reaches the Doc. */
  var PLAN_ORDER = ['intro', 'content', 'conclusion'];
  var PLAN_LEAD = {
    intro: 'Grab listeners with the most surprising thing in your story.',
    content: 'Tell who they were, what they did, and what happened because of it.',
    conclusion: 'End with why your story matters. This is where your working thesis goes.'
  };
  var PLAN_QS = {
    content: [
      { id: 'pq-before', label: 'Who They Were', q: 'Who is your story about, and where did they live during the Revolution?', start: 'This is the story of ___, who lived in ___', fact: true },
      { id: 'pq-turn', label: 'What They Did', q: 'What did they do during the Revolution, and why was it hard or risky?', start: 'During the Revolution, ___. This was hard because ___', fact: true },
      { id: 'pq-after', label: 'What Happened Because of It', q: 'What happened because of what they did?', start: 'Because of this, ___', fact: true }
    ],
    intro: [
      { id: 'pq-hook', label: 'The Surprise', q: 'What is the most surprising true thing in your story?', start: 'Most people don\'t know that ___', fact: true }
    ],
    conclusion: [
      { id: 'pq-care', label: 'Why It Matters', q: 'Why should someone today care about this story?', start: 'This story matters today because ___' }
    ]
  };
  var PQ_BLOCKS = {};
  function buildPlanQuestions(park) {
    PLAN_ORDER.forEach(function (radio) {
      PLAN_QS[radio].forEach(function (q) {
        var b = el('div', { 'class': 'plan-q' });
        b.innerHTML = '<label class="plan-q-label" for="' + q.id + '"><span class="plan-q-name">' + esc(q.label) + '</span>' +
          '<span class="plan-q-text">' + esc(q.q) + '</span></label>' +
          '<p class="plan-q-start">Start with: ' + esc(q.start) + '</p>';
        b.appendChild(el('input', { type: 'text', id: q.id, 'class': 'plan-line', maxlength: '200', placeholder: 'A few words. Notes are fine.' }));
        if (q.fact) {
          var row = el('div', { 'class': 'plan-q-fact' });
          var opts = '<option value="">Pick a fact</option>';
          for (var i = 1; i <= FACT_MAX; i++) opts += '<option value="' + i + '">Fact ' + i + '</option>';
          row.innerHTML = '<label for="' + q.id + '-fact">Which fact from your Fact Bank proves it?</label>' +
            '<select id="' + q.id + '-fact" class="plan-fact-pick">' + opts + '</select>';
          b.appendChild(row);
        }
        PQ_BLOCKS[q.id] = b;
        park.appendChild(b);
      });
    });
  }
  /* A fact by its Fact Bank number (the number students see on the Read step). */
  function factNo(n) {
    var t = n ? val('fact' + n) : '';
    return t ? { n: n, fact: t, src: val('fact' + n + '-src') } : null;
  }
  /* Fact choices show the fact itself; empty Fact Bank rows are hidden. Values stay
     1 to FACT_MAX, so a saved choice restores before the facts are drawn. */
  function syncFactPicks() {
    var any = false;
    for (var i = 1; i <= FACT_MAX; i++) if (factNo(i)) any = true;
    document.querySelectorAll('.plan-fact-pick').forEach(function (s) {
      Array.prototype.forEach.call(s.options, function (o) {
        if (!o.value) { o.textContent = any ? 'Pick a fact' : 'Fill in your Fact Bank on the Read step first'; return; }
        var f = factNo(o.value);
        o.hidden = !f && !o.selected;
        if (f) o.textContent = 'Fact ' + o.value + ': ' + (f.fact.length > 70 ? f.fact.slice(0, 68) + '…' : f.fact);
        else o.textContent = 'Fact ' + o.value + ' (empty)';
      });
    });
  }
  /* Each Plan question is one box in the short episode. */
  var PLAN_FOR_BEAT = { 'fact-statement': 'pq-hook', 'narrative-scene1': 'pq-before', 'narrative-scene2': 'pq-turn',
    'narrative-scene3': 'pq-after', 'sig-why': 'pq-care' };
  function planNoteFor(beatId) {
    var qid = PLAN_FOR_BEAT[beatId];
    if (!qid) return null;
    var q = null;
    PLAN_ORDER.forEach(function (rd) { PLAN_QS[rd].forEach(function (x) { if (x.id === qid) q = x; }); });
    var f = q && q.fact ? factNo(val(qid + '-fact')) : null;
    var a = val(qid);
    if (!a && !f) return null;
    return { label: q.label, answer: a, factNo: f ? 'Fact ' + f.n : '', fact: f ? 'Fact ' + f.n + ': ' + f.fact + (f.src ? ' (' + f.src + ')' : '') : '' };
  }
  /* The group's plan for one part, for the Group Doc and My Lines. */
  function planNotes(radio) {
    return (PLAN_QS[radio] || []).map(function (q) {
      var f = q.fact ? factNo(val(q.id + '-fact')) : null;
      return { label: q.label, answer: val(q.id), factNo: f ? 'Fact ' + f.n : '', fact: f ? 'Fact ' + f.n + ': ' + f.fact + (f.src ? ' (' + f.src + ')' : '') : '' };
    }).filter(function (x) { return x.answer || x.fact; });
  }
  function voicesIn(st) {
    var seen = [];
    allBeats({ radio: '' }, st).forEach(function (b) { if (seen.indexOf(b[2]) === -1) seen.push(b[2]); });
    return VOICES.filter(function (v) { return seen.indexOf(v.id) !== -1; }).map(function (v) { return v.name; });
  }
  function chosen(part) {
    var st = part.styles[0];
    if (isCrew()) {
      /* One style per part: keep the solo radio checked, so the wizard's checks and saved work agree. */
      var radio = document.querySelector('input[name="' + part.radio + '"][value="' + st.id + '"]');
      if (radio && !radio.checked) {
        radio.checked = true;
        var f = $(part.prefix + st.id); if (f) f.classList.add('active');
      }
      return st;
    }
    var r = document.querySelector('input[name="' + part.radio + '"]:checked');
    if (!r) return null;
    var hit = part.styles.filter(function (s) { return s.id === r.value; })[0] || null;
    return hit && styleOpen(hit) ? hit : null;
  }
  /* Say Hello (Oct 23, teacher): real podcasts don't announce "I'm the narrator", and the
     person from history shouldn't say hi before the story starts. Everyone else says hello. */
  function allLabel() { return cast().used.indexOf('subject') !== -1 ? 'Everyone but the Subject' : 'Everyone'; }
  function voiceLabel(voice) {
    if (voice === 'all') return { name: allLabel(), who: '' };
    var v = VOICES.filter(function (x) { return x.id === voice; })[0];
    return { name: v ? v.name : voice, who: window.crewVoiceNames(voice) };
  }
  /* The voice on a box and the name(s) who say that box. */
  function boxLabel(b) {
    if (b[2] === 'all') return { name: allLabel(), who: '' };
    var owners = cast().owners[b[0]] || [];
    return { name: voiceLabel(b[2]).name, who: owners.join(' and ') };
  }
  function chip(b) {
    var l = boxLabel(b);
    return '<span class="voice-chip voice-' + b[2] + '">' + esc(l.name) + (l.who ? ' <span class="voice-who">(' + esc(l.who) + ')</span>' : '') + '</span>';
  }

  /* ---------------------------------------------------------------- who says it */
  /* The cast follows the styles: only the voices the chosen styles use, each with
     its boxes in episode order. When two people share a voice, its boxes alternate
     between them, so co-hosts each get lines and nobody writes the same box twice. */
  function episodeBeats() {
    var out = [];
    PARTS.forEach(function (part) { var s = chosen(part); if (s) allBeats(part, s).forEach(function (b) { out.push(b); }); });
    return out;
  }
  function allChosen() { return PARTS.every(function (p) { return !!chosen(p); }); }
  function cast() {
    var members = crewMembers();
    var used = [], byVoice = {};
    episodeBeats().forEach(function (b) {
      if (b[2] === 'all') return;
      if (!byVoice[b[2]]) { byVoice[b[2]] = []; used.push(b[2]); }
      byVoice[b[2]].push(b[0]);
    });
    used.sort(function (a, b) { return VOICES.map(function (v) { return v.id; }).indexOf(a) - VOICES.map(function (v) { return v.id; }).indexOf(b); });
    var who = {};
    used.forEach(function (vid) {
      who[vid] = members.filter(function (m) { return checked('crew' + m.n + '-voice-' + vid); }).map(function (m) { return m.label; });
    });
    var r = window.RV_CAST.owners(used, byVoice, who, members.map(function (m) { return m.label; }));
    var owners = r.owners, boxes = r.boxes, open = r.open;
    var idle = members.filter(function (m) { return !boxes[m.label]; }).map(function (m) { return m.label; });
    return { members: members, used: used, byVoice: byVoice, owners: owners, boxes: boxes, open: open, idle: idle };
  }
  window.crewCastComplete = function () { return !isCrew() || (allChosen() && !cast().open.length); };
  window.crewFirstOpenCast = function () {
    var c = cast();
    return c.open.length ? $('crew1-voice-' + c.open[0]) : null;
  };

  /* Split it up for us: every voice gets someone, then anyone left without lines
     shares the busiest voice. Students can change any box afterwards. */
  window.crewSplitCast = function () {
    var c = cast();
    if (!c.used.length) return;
    c.members.forEach(function (m) { VOICES.forEach(function (v) { var x = $('crew' + m.n + '-voice-' + v.id); if (x) x.checked = false; }); });
    var assign = window.RV_CAST.split(c.used, c.byVoice, c.members.map(function (m) { return m.n; }));
    Object.keys(assign).forEach(function (vid) { assign[vid].forEach(function (n) { var x = $('crew' + n + '-voice-' + vid); if (x) x.checked = true; }); });
    save();
    renderPlan();
    refreshSteps();
    var g = $('castGrid');
    if (g) g.focus();
  };

  function renderCast(host) {
    var sec = el('section', { 'class': 'cast', id: 'castSection', 'aria-labelledby': 'castTitle' });
    if (!allChosen()) {
      sec.innerHTML = '<h3 id="castTitle">Who says it?</h3><p class="field-hint">Pick a style for all three parts first. Then you will choose who says each part.</p>';
      host.appendChild(sec);
      return;
    }
    var c = cast();
    var html = '<h3 id="castTitle">Who says it?</h3>' +
      '<p class="field-hint">Your script uses ' + (c.used.length === 1 ? 'one part' : c.used.length + ' parts') + '. Check who says each one. ' +
      'Two people can share a part, and one person can say two.</p>' +
      '<div class="cast-grid" id="castGrid" tabindex="-1"></div>' +
      '<div class="cast-actions"><button type="button" class="btn btn-secondary" onclick="crewSplitCast()">Split it up for us</button></div>' +
      '<p class="crew-check" id="castCheck" role="status" aria-live="polite"></p>';
    sec.innerHTML = html;
    var grid = sec.querySelector('#castGrid');
    c.used.forEach(function (vid) {
      var v = VOICES.filter(function (x) { return x.id === vid; })[0];
      var n = c.byVoice[vid].length;
      var row = el('fieldset', { 'class': 'cast-row voice-' + vid });
      var names = episodeBeats().filter(function (bt) { return bt[2] === vid; }).map(function (bt) { return bt[1]; });
      row.innerHTML = '<legend><span class="voice-chip voice-' + vid + '">' + v.name + '</span> <span class="cast-count">' + n + (n === 1 ? ' box' : ' boxes') + '</span></legend>' +
        '<p class="cast-does">' + esc(v.does) + ' <span class="cast-boxes">Says: ' + esc(names.join(', ')) + '.</span></p>';
      var picks = el('div', { 'class': 'chip-checks' });
      c.members.forEach(function (m) {
        var lab = CAST_INPUTS[m.n + '-' + vid];
        lab.querySelector('span').textContent = m.label;
        picks.appendChild(lab);
      });
      row.appendChild(picks);
      grid.appendChild(row);
    });
    host.appendChild(sec);
    var msg;
    if (c.open.length) msg = 'Still need someone for: ' + c.open.map(function (vid) { return voiceLabel(vid).name; }).join(', ') + '.';
    else if (c.idle.length) msg = 'Every part has someone. ' + c.idle.join(' and ') + (c.idle.length > 1 ? ' have' : ' has') + ' no lines yet: share a part with them.';
    else msg = 'Every part has someone, and everyone has lines.';
    var box = sec.querySelector('#castCheck');
    box.textContent = msg;
    box.classList.toggle('is-ok', !c.open.length && !c.idle.length);
  }
  /* Choose a style here and it is the same style on the solo steps. The solo
     forms are shown without scrolling to them, since they are off screen. */
  function pickStyle(part, styleId) {
    var radio = document.querySelector('input[name="' + part.radio + '"][value="' + styleId + '"]');
    if (radio) radio.checked = true;
    part.styles.forEach(function (s) {
      var f = $(part.prefix + s.id);
      if (f) f.classList.toggle('active', s.id === styleId);
    });
    if (typeof updateTimeEstimate === 'function') updateTimeEstimate();
    save();
    renderPlan();
    refreshSteps();
  }

  function renderPlan() {
    var host = $('planParts');
    if (!host) return;
    if ($('episodeMap')) $('episodeMap').innerHTML = '';

    /* Park the inputs before redrawing, so their typed text survives. */
    var park = $('planInputPark');
    Object.keys(PLAN_INPUTS).forEach(function (k) { park.appendChild(PLAN_INPUTS[k]); });
    Object.keys(PQ_BLOCKS).forEach(function (k) { park.appendChild(PQ_BLOCKS[k]); });
    var castPark = $('castInputPark');
    Object.keys(CAST_INPUTS).forEach(function (k) { castPark.appendChild(CAST_INPUTS[k]); });
    syncFactPicks();
    host.innerHTML = '';
    PLAN_ORDER.forEach(function (radio, i) {
      var part = PARTS.filter(function (p) { return p.radio === radio; })[0];
      var s = chosen(part);
      var sec = el('section', { 'class': 'plan-part', 'data-radio': part.radio });
      sec.innerHTML = '<h3>' + (i + 1) + '. ' + part.name + ' <span class="plan-time">' + part.time + '</span></h3>' +
        '<p class="plan-part-lead">' + esc(PLAN_LEAD[radio]) + '</p>';
      if (radio === 'conclusion') {
        var thesis = val('workingThesis');
        sec.appendChild(el('p', { 'class': 'plan-thesis' }, thesis
          ? '<strong>Your working thesis:</strong> ' + esc(thesis)
          : '<strong>Your working thesis:</strong> not written yet. Write it on the Read step, then come back.'));
      }
      var qs = el('div', { 'class': 'plan-qs' });
      PLAN_QS[radio].forEach(function (q) { qs.appendChild(PQ_BLOCKS[q.id]); });
      sec.appendChild(qs);

      var boxes = allBeats(part, s).map(function (bt) { return esc(bt[1]) + ' <span class="plan-box-who">(' + esc(voiceLabel(bt[2]).name) + ')</span>'; });
      if (part.radio === 'conclusion') boxes.push('Source Line');
      var html = '<p class="plan-boxes"><strong>In your script:</strong> ' + boxes.join(' · ') + '</p>';
      if (part.radio === 'content' && noSubject()) html += '<p class="field-hint">For this topic, the Narrator tells the person\'s story. The Narrator can read real words from the time as a quote, from the Voice Bank, saying who said them.</p>';
      sec.insertAdjacentHTML('beforeend', html);
      host.appendChild(sec);
    });
    renderCast(host);
  }

  /* ---------------------------------------------------------------- the frame */
  function linesFor(target) {
    var m = String(target || '').match(/(\d+)\s*-\s*(\d+)/);
    var hi = m ? +m[2] : 40;
    return hi <= 25 ? 2 : hi <= 45 ? 3 : hi <= 80 ? 5 : 6;
  }

  /* One builder, two outputs: forDoc=true is inline-styled HTML for pasting into
     Google Docs (boxes with room to type); forDoc=false is the on-screen preview
     and the paper copy (boxes with ruled lines to write on). */
  function frameHTML(forDoc) {
    /* The Group Doc is the script itself (teacher, Nov 1: the old frame of tables was hard to read
       and use). Each box: its name and who writes it, the group's plan for it, a sentence starter,
       then the writer's name with room to write. When every box is filled, it is the script. */
    var podcast = val('podcastName') || 'Our Podcast';
    var topic = val('subject');
    var members = crewMembers();
    var cs = cast();
    var GRAY = forDoc ? ' style="color:#555;font-size:10pt;margin:0"' : ' class="fr-help"';
    var TIGHT = forDoc ? ' style="margin:0"' : '';
    var h = [];
    h.push('<h1>' + esc(podcast) + (topic ? ': ' + esc(topic) : '') + '</h1>');
    h.push('<p><strong>Our group:</strong> ' + members.map(function (m) {
      var says = m.voices.filter(function (v) { return cs.used.indexOf(v.id) !== -1; }).map(function (v) { return v.name; });
      return esc(m.name || ('Person ' + m.n)) + (says.length ? ' (' + esc(says.join(' and ')) + ')' : '');
    }).join(', ') + '</p>');
    var thesis = val('workingThesis');
    h.push('<p><strong>Our thesis:</strong> ' + (thesis ? esc(thesis) : '________________________________') + '</p>');
    h.push('<p' + GRAY + '>Write your lines under your name. Start every line with who says it, like <strong>Maria:</strong> When every box is filled, this is your script. You can add lines or change anything.</p>');

    function writeLine(name, lines, prefill) {
      var who = esc(name || '________') + ':';
      if (forDoc) return '<p><strong>' + who + '</strong> ' + (prefill ? esc(prefill) : '') + '</p>' + (prefill ? '' : '<p>&nbsp;</p>');
      var ruled = '';
      for (var j = 0; j < lines; j++) ruled += '<span class="fr-line"></span>';
      return '<div class="fr-write"><strong>' + who + '</strong> ' + (prefill ? esc(prefill) : '') + (prefill ? '' : '<div class="fr-lines">' + ruled + '</div>') + '</div>';
    }
    function boxBlock(title, whoNames, plan, starter, target, body) {
      var out = '<div class="fr-box"' + (forDoc ? '' : '') + '>';
      out += '<p' + TIGHT + '><strong>' + esc(title) + '</strong>' + (whoNames ? ' · ' + esc(whoNames) : '') + (target ? ' <span' + GRAY.replace('margin:0', 'margin:0;display:inline') + '>(' + esc(target) + ')</span>' : '') + '</p>';
      if (plan) out += '<p' + GRAY + '>Our plan: ' + esc(plan) + '</p>';
      if (starter) out += '<p' + GRAY + '>Start with: “' + esc(starter.replace(/[.\s]+$/, '')) + '…”</p>';
      return out + body + '</div>';
    }

    PARTS.forEach(function (part) {
      var s = chosen(part);
      h.push('<h2>' + part.name + ' <span style="font-weight:400">(' + part.time + ')</span></h2>');
      allBeats(part, s).forEach(function (b) {
        var g = guideFor(b[0]);
        var target = g.target ? g.target.replace(/\s*\(.*\)\s*$/, '') : '';
        if (b[2] === 'all') {
          var hello = members.filter(function (m) {
            return !(m.voices.length && m.voices.every(function (v) { return v.id === 'subject'; }));
          });
          h.push(boxBlock(b[1], '', '', '', '', hello.map(function (m) { return writeLine(m.name, 1, 'Hi, I\'m ' + (m.name || '___') + '.'); }).join('')));
          return;
        }
        var owners = cs.owners[b[0]] || [];
        var pn = planNoteFor(b[0]);
        var plan = pn ? (pn.answer || '') + (pn.factNo ? ' (' + pn.factNo + ')' : '') : '';
        var oldPlan = val('plan-' + b[0]);
        if (!plan && oldPlan) plan = oldPlan;
        h.push(boxBlock(b[1], owners.join(' and '), plan, g.starter, target,
          writeLine(owners.join(' and '), linesFor(g.target))));
      });
      if (part.radio === 'conclusion') {
        var every = allBeats(part, s), last = every[every.length - 1];
        var who = (cs.owners[last[0]] || []).join(' and ');
        h.push(boxBlock('Source Line', who, '', 'We learned about ' + (topic || '[person]') + ' from', '10-20 words',
          writeLine(who, 2)));
      }
    });

    var fb = facts();
    if (fb.length) {
      h.push('<h2>Our Facts</h2><ol>');
      fb.forEach(function (f) { h.push('<li>' + esc(f.fact) + (f.src ? ' <span' + GRAY.replace('margin:0', 'margin:0;display:inline') + '>(' + esc(f.src) + ')</span>' : '') + '</li>'); });
      h.push('</ol>');
    }
    h.push('<h2>Before You Record</h2><ul style="list-style:none;padding-left:0" class="fr-check">');
    checklist().forEach(function (c) { h.push('<li>☐ ' + esc(c) + '</li>'); });
    h.push('</ul>');
    return h.join('\n');
  }

  function renderDocPreview() {
    var p = $('docPreview');
    if (p) p.innerHTML = frameHTML(false);
    var t = $('docTitleHint');
    if (t) t.textContent = (val('podcastName') || 'Podcast name') + ' - ' + (val('studentName') || 'your names');
    var dj = $('docJobs');
    if (dj && !dj.innerHTML) {
      dj.innerHTML = '<ul>' + JOBS.map(function (j) { return '<li><strong>' + j.name + ':</strong> ' + j.during + '</li>'; }).join('') +
        '<li><strong>Everyone:</strong> writes their own lines. To change someone else\'s line, leave a comment instead of deleting it.</li></ul>';
    }
  }

  window.copyGroupDoc = function () {
    var html = '<meta charset="utf-8"><div style="font-family:Arial,sans-serif;font-size:11pt">' + frameHTML(true) + '</div>';
    var plain = (function () { var d = document.createElement('div'); d.innerHTML = frameHTML(true); return d.innerText || d.textContent; })();
    var ok = function () { if (typeof showToast === 'function') showToast('Copied. Open a new Google Doc and paste (Ctrl+V).', 5000); };
    var fallback = function () {
      var p = $('docPreview');
      if (!p) return;
      var range = document.createRange();
      range.selectNodeContents(p);
      var sel = window.getSelection();
      sel.removeAllRanges(); sel.addRange(range);
      var done = false;
      try { done = document.execCommand('copy'); } catch (e) {}
      if (done) { sel.removeAllRanges(); ok(); }
      else if (typeof showToast === 'function') showToast('The script is selected. Press Ctrl+C to copy it.', 6000);
    };
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        navigator.clipboard.write([new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([plain], { type: 'text/plain' })
        })]).then(ok, fallback);
        return;
      }
    } catch (e) {}
    fallback();
  };

  /* The paper copy follows the print standard: black on white, Atkinson, text at
     11pt or larger, writing lines 0.34in apart. */
  /* Any paper sheet from this site prints the same way: black on white,
     Atkinson, text at 11pt or larger, writing lines 0.34in apart. The Group Doc
     frame and the My Lines sheet both use it, so they match each other and the
     site, which is styled as the same handout. */
  function printSheet(title, bodyHTML) {
    var css = new URL('fonts/fonts.css', location.href).href;
    var doc = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>' + esc(title) + '</title>' +
      '<link rel="stylesheet" href="' + css + '"><style>' +
      '@page{size:letter;margin:0.6in}body{font-family:"Atkinson Hyperlegible Next",Verdana,sans-serif;color:#000;background:#fff;font-size:11.5pt;line-height:1.4}' +
      'h1{font-size:20pt;margin:0 0 4pt}h2{font-size:14pt;margin:14pt 0 6pt;break-after:avoid}p{margin:0 0 4pt}' +
      'table{width:100%;border-collapse:collapse;margin:0 0 6pt}th,td{border:1px solid #000;padding:4pt 6pt;text-align:left;vertical-align:top}' +
      'td.fr-cell{height:0.34in}.fr-note,.fr-help{font-size:10pt}' +
      '.fr-box{border:1.5px solid #000;padding:6pt 8pt;margin:0 0 8pt;break-inside:avoid}' +
      '.fr-lines{margin-top:4pt}.fr-line{display:block;height:0.34in;border-bottom:1px solid #000}' +
      '.fr-check li{margin:0 0 4pt}.fr-frame{font-style:italic;margin:6pt 0 0}.fr-blank{display:inline-block;min-width:1.6in;border-bottom:1px solid #000}' +
      '.fr-bank{border:1px dashed #000;padding:3pt 6pt;margin:4pt 0 2pt;font-size:10.5pt}.fr-names{margin:0 0 8pt}' +
      '</style></head><body>' + bodyHTML + '</body></html>';
    var f = document.createElement('iframe');
    f.setAttribute('aria-hidden', 'true');
    f.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
    document.body.appendChild(f);
    f.onload = function () {
      setTimeout(function () {
        try { f.contentWindow.focus(); f.contentWindow.print(); } catch (e) {}
        setTimeout(function () { f.remove(); }, 2000);
      }, 400);
    };
    f.srcdoc = doc;
  }
  window.printGroupDoc = function () { printSheet(val('podcastName') || 'Group Doc', frameHTML(false)); };

  /* ---------------------------------------------------------------- practice */
  var SECTION_RE = /^\s*(#+\s*)?(the\s+)?(hook|story|wrap|intro|introduction|content|conclusion)\b[^:]*$/i;
  var SPEAKER_RE = /^\s*([A-Za-z][A-Za-z.'\- ]{0,28}?)\s*(\([^)]{0,40}\))?\s*:\s*(.*)$/;
  function parseScript(text) {
    var sections = [], cur = null, last = null;
    function section(label) { cur = { label: label, lines: [] }; sections.push(cur); last = null; }
    String(text || '').split(/\r?\n/).forEach(function (raw) {
      var line = raw.trim();
      if (!line) { last = null; return; }
      if (SECTION_RE.test(line) && line.split(/\s+/).length <= 6) { section(line.replace(/^#+\s*/, '')); return; }
      var m = line.match(SPEAKER_RE);
      if (m && m[1].trim().split(/\s+/).length <= 3) {
        if (!cur) section('');
        last = { speaker: m[1].trim(), text: m[3].trim() };
        cur.lines.push(last);
        return;
      }
      if (!cur) section('');
      if (last) last.text += (last.text ? ' ' : '') + line;
      else { last = { speaker: '', text: line }; cur.lines.push(last); }
    });
    return sections.filter(function (s) { return s.lines.length; });
  }
  function voiceOfSpeaker(name) {
    var n = String(name || '').toLowerCase();
    var hit = '';
    VOICES.forEach(function (v) {
      if (hit) return;
      if (n.indexOf(v.id) !== -1) { hit = v.id; return; }
      var who = window.crewVoiceNames(v.id).toLowerCase();
      if (who && n && who.split(' and ').some(function (x) { return x && n.indexOf(x) !== -1; })) hit = v.id;
    });
    return hit || 'host';
  }
  window.showPastedScript = function () {
    var text = $('practiceScript') ? $('practiceScript').value : '';
    var wrap = $('pastedScriptWrap'), out = $('pastedScriptOutput');
    if (!out || !wrap) return;
    var sections = parseScript(text);
    if (!sections.length) {
      if (typeof showToast === 'function') showToast('Paste your script into the box first.');
      if ($('practiceScript')) $('practiceScript').focus();
      return;
    }
    var words = 0;
    sections.forEach(function (s) { s.lines.forEach(function (l) { words += l.text.split(/\s+/).filter(Boolean).length; }); });
    var mins = words / 130;
    var t = Math.floor(mins) + ':' + String(Math.round((mins % 1) * 60)).padStart(2, '0');
    var verdict = mins < 2 ? 'a little short: aim for 2 to 4 minutes' : mins <= 4 ? 'a good length' : 'long: cut it to 4 minutes or less';
    var html = '<div class="script-doc-header"><div class="script-doc-title">' + esc(val('podcastName') || 'Our Podcast') + '</div>' +
      (val('studentName') ? '<div class="script-doc-meta">' + esc(val('studentName')) + '</div>' : '') +
      '<div class="script-doc-time"><i class="fas fa-clock" aria-hidden="true"></i> About ' + t + ' read aloud (' + words + ' words): ' + verdict + '</div></div><div class="script-doc-body">';
    sections.forEach(function (s) {
      if (s.label) html += '<div class="script-section-divider"><hr><span class="script-section-name">' + esc(s.label) + '</span><hr></div>';
      s.lines.forEach(function (l) {
        var v = voiceOfSpeaker(l.speaker);
        html += '<div class="script-line"><span class="speaker-chip chip-' + v + '">' + esc(l.speaker || '…') + '</span><span class="script-text">' + esc(l.text) + '</span></div>';
      });
    });
    out.innerHTML = html + '</div>';
    wrap.hidden = false;
    if (typeof stopPractice === 'function') stopPractice();
    save();
    try { out.focus({ preventScroll: true }); } catch (e) {}
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ---------------------------------------------------------------- time it */
  /* Nov 1 (teacher): students can't use phone timers, and going back to paste the script was a
     barrier. A plain stopwatch: read the Doc aloud while it runs. */
  var timeIt = { start: 0, spent: 0, tick: null };
  function timeItShow() {
    var ms = timeIt.spent + (timeIt.start ? Date.now() - timeIt.start : 0);
    var sec = Math.floor(ms / 1000);
    if ($('timeItClock')) $('timeItClock').textContent = Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
    return sec;
  }
  window.timeItToggle = function () {
    var go = $('timeItGo'), v = $('timeItVerdict');
    if (timeIt.start) {
      timeIt.spent += Date.now() - timeIt.start; timeIt.start = 0;
      clearInterval(timeIt.tick); timeIt.tick = null;
      var sec = timeItShow();
      if (go) go.textContent = 'Keep going';
      if (v) v.textContent = sec < 120 ? 'Under 2 minutes: add a detail to a scene.' : sec <= 240 ? 'Between 2 and 4 minutes: a good length.' : 'Over 4 minutes: cut a sentence that repeats.';
    } else {
      timeIt.start = Date.now();
      timeIt.tick = setInterval(timeItShow, 250);
      if (go) go.textContent = 'Stop';
      if (v) v.textContent = '';
    }
  };
  window.timeItReset = function () {
    clearInterval(timeIt.tick); timeIt = { start: 0, spent: 0, tick: null };
    timeItShow();
    if ($('timeItGo')) $('timeItGo').textContent = 'Start';
    if ($('timeItVerdict')) $('timeItVerdict').textContent = '';
  };

  /* ---------------------------------------------------------------- steps */
  window.crewOnStep = function (n) {
    if (n === 0) { crewCheck(); }
    if (n === 1) { syncFactRows(); window.crewRenderLevelPick(); }
    if (n === 6) renderPlan();
    if (n === 7) renderDocPreview();
    if (n === 8) {
      var out = $('pastedScriptOutput');
      if (out && !out.innerHTML && val('practiceScript')) window.showPastedScript();
    }
  };

  /* Listen reads the step on screen and the reading drawer; it skips the
     word banks, link lists and form grids, where it would only read noise. */
  function markListen() {
    document.querySelectorAll('.wizard-step, #readingDrawerPanel').forEach(function (e) { e.setAttribute('data-listen', ''); });
    document.querySelectorAll('.verb-bank, #readingSources, .reading-drawer-sources, .level-toggle, .tuner-stepper')
      .forEach(function (e) { e.setAttribute('data-no-listen', ''); });
  }

  buildCrewRows();
  buildCastInputs();
  buildFactRows();
  buildPlanInputs();
  /* Read every field's guidance now, before app.js folds the helper text into
     its "Help me write" panels on load. */
  CREW_OPENING.forEach(function (b) { guideFor(b[0]); });
  PARTS.forEach(function (p) { p.styles.forEach(function (s) { s.beats.forEach(function (b) { guideFor(b[0]); }); }); });
  markListen();
  syncFactRows();

  /* Shared with lines.js (My Lines), which builds on the same parts and beats. */
  window.RV_CREW = {
    PARTS: PARTS, VOICES: VOICES, CREW_OPENING: CREW_OPENING,
    guideFor: guideFor, planNotes: planNotes, planNoteFor: planNoteFor, chosen: chosen, allBeats: allBeats, crewMembers: crewMembers,
    isCrew: isCrew, noSubject: noSubject, voiceLabel: voiceLabel, boxLabel: boxLabel, cast: cast, linesFor: linesFor, printSheet: printSheet, esc: esc
  };
})();

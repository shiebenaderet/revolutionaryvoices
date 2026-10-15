/* Crew workflow for Revolutionary Voices (3.0.0).

   A group plans on this site and writes the script together in a Google Doc:
     Start      - who is in the crew, and each person's job(s) and voice(s)
     Read       - first-pick level cards, the Fact Bank, the working thesis
     Plan       - pick a style for the Hook, Story and Wrap; one line per box
     Group Doc  - copy a frame into a Google Doc (or print it on paper)
     Practice   - paste the finished script back to time it and rehearse
   A solo student still writes the whole script in the Hook / Story / Wrap steps.

   Jobs and voices are checkboxes, not one-per-person dropdowns, on purpose: in a
   pair, or when someone is out, one student does two jobs, and two students can
   split one job. Every input here has an id, so app.js saves and restores it like
   any other field. They are all built now, while the page is parsing, so they
   exist before app.js restores saved work on load. */
(function () {
  'use strict';

  var CREW_MAX = 4, FACT_MAX = 10, FACT_START = 6;

  var JOBS = [
    { id: 'research', name: 'Researcher',
      before: 'Leads the reading and builds the Fact Bank, with a source for every fact.',
      during: 'Checks facts while the script is written. Leaves a comment when a line needs a source.' },
    { id: 'write', name: 'Lead Scriptwriter',
      before: 'Picks the styles for the Hook, Story and Wrap, and fills in the plan.',
      during: "Drafts the script in the Doc and stitches everyone's lines together." },
    { id: 'edit', name: 'Chief Editor',
      before: 'Keeps the time target and the checklist.',
      during: 'Works in Suggesting mode, makes sure every voice has lines, and times a read-aloud.' }
  ];
  var VOICES = [
    { id: 'host', name: 'Host', does: 'Welcomes listeners and asks the questions.' },
    { id: 'narrator', name: 'Narrator', does: 'Sets the scene and moves the story along.' },
    { id: 'subject', name: 'Subject', does: 'Speaks as the historical figure, in first person.' }
  ];

  /* The three parts and the boxes ("beats") inside each style. Field ids are the
     solo writing fields, so a style chosen here is the same style on the solo
     steps, and the guidance and sentence starters come from those fields. */
  var PARTS = [
    { radio: 'intro', prefix: 'intro-', name: 'The Hook', time: '30 to 45 seconds', styles: [
      { id: 'dramatic', name: 'Dramatic Hook', desc: 'Start inside a tense moment.', beats: [
        ['dramatic-hook', 'The Moment', 'host'], ['dramatic-subject', 'Who This Is', 'host'], ['dramatic-stakes', 'What Was at Stake', 'host']] },
      { id: 'fact', name: 'Shocking Fact', desc: 'Open with something surprising and true.', beats: [
        ['fact-statement', 'The Fact', 'host'], ['fact-significance', 'Why It Surprises Us', 'host'], ['fact-subject', 'Meet the Person', 'host']] },
      { id: 'question', name: 'Mystery Question', desc: 'Ask a question listeners want answered.', beats: [
        ['question-hook', 'The Question', 'host'], ['question-buildup', 'More Questions', 'host'], ['question-answer', 'A Hint at the Answer', 'host']] },
      { id: 'sound', name: 'Sound and Setting', desc: 'Drop listeners into the time and place.', beats: [
        ['sound-effects', 'Sound Effects', 'narrator'], ['sound-setting', 'When and Where', 'narrator'],
        ['sound-subject', 'Who Is There', 'narrator'], ['sound-conflict', 'The Problem They Face', 'narrator']] }
    ] },
    { radio: 'content', prefix: 'content-', name: 'The Story', time: '2 to 4 minutes', styles: [
      { id: 'interview', name: 'Interview', desc: 'The Host asks, the historical figure answers.', beats: [
        ['interview-intro', 'Set Up the Interview', 'narrator'],
        ['q1', 'Question 1', 'host'], ['a1', 'Answer 1', 'subject'], ['q2', 'Question 2', 'host'], ['a2', 'Answer 2', 'subject'],
        ['q3', 'Question 3', 'host'], ['a3', 'Answer 3', 'subject'], ['q4', 'Question 4', 'host'], ['a4', 'Answer 4', 'subject'],
        ['q5', 'Question 5', 'host'], ['a5', 'Answer 5', 'subject']] },
      { id: 'narrative', name: 'Story in Three Scenes', desc: 'The historical figure tells it, scene by scene.', beats: [
        ['narrative-intro', 'Set Up the Story', 'narrator'], ['narrative-scene1', 'Scene 1: Before', 'subject'],
        ['narrative-trans1', 'Move to Scene 2', 'narrator'], ['narrative-scene2', 'Scene 2: The Turning Point', 'subject'],
        ['narrative-trans2', 'Move to Scene 3', 'narrator'], ['narrative-scene3', 'Scene 3: After', 'subject']] },
      { id: 'news', name: 'News Report', desc: 'Report it live, like a reporter at the time.', beats: [
        ['news-opening', 'On the Scene', 'host'], ['news-background', 'What Led to This', 'host'],
        ['news-quote', 'In Their Own Words', 'subject'], ['news-turning', 'The Turning Point', 'host'],
        ['news-aftermath', 'What Happened Next', 'host'], ['news-closing', 'Sign Off', 'host']] },
      { id: 'diary', name: 'Diary Entries', desc: 'Three entries that show change over time.', beats: [
        ['diary-intro', 'Set Up the Diary', 'narrator'], ['diary1-content', 'Entry 1: The Beginning', 'subject'],
        ['diary2-content', 'Entry 2: The Turning Point', 'subject'], ['diary3-content', 'Entry 3: Looking Back', 'subject'],
        ['diary-closing', 'What the Diary Shows', 'narrator']] }
    ] },
    { radio: 'conclusion', prefix: 'conclusion-', name: 'The Wrap', time: '45 to 60 seconds', styles: [
      { id: 'significance', name: 'Why It Matters', desc: 'Sum up, then show the bigger picture.', beats: [
        ['sig-what', 'What Happened', 'host'], ['sig-reveals', 'What It Shows', 'host'], ['sig-why', 'Why We Should Care', 'host'], ['sig-final', 'Final Thought', 'host']] },
      { id: 'today', name: 'Then and Now', desc: 'Connect the story to today.', beats: [
        ['today-lesson', 'The Lesson', 'host'], ['today-parallel', 'Where We See It Today', 'host'], ['today-specific', 'A Real Example', 'host'], ['today-final', 'Why It Matters Now', 'host']] },
      { id: 'challenge', name: 'The Missing Story', desc: 'Show what the usual story leaves out.', beats: [
        ['challenge-standard', 'The Usual Story', 'host'], ['challenge-missing', "What's Missing", 'host'], ['challenge-why', 'Why It Was Left Out', 'host'],
        ['challenge-lose', 'What We Lose', 'host'], ['challenge-final', 'A Challenge for Listeners', 'host']] },
      { id: 'legacy', name: 'Legacy', desc: 'What they left behind, and what we can learn.', beats: [
        ['legacy-impact', 'Their Impact', 'host'], ['legacy-lesson', 'The Lesson', 'host'], ['legacy-universal', 'For Everyone', 'host'], ['legacy-honor', 'How We Honor Them', 'host']] }
    ] }
  ];
  /* A crew's Hook opens with the crew introducing themselves. */
  var CREW_OPENING = [['group-intro', 'Crew Introductions', 'all'], ['group-welcome', 'Welcome Listeners', 'host']];

  var CHECKLIST = [
    'The Hook grabs listeners in the first 30 to 45 seconds.',
    'Every voice in the crew has lines.',
    'Every fact traces back to the Fact Bank, with its source.',
    'The Wrap says why this story matters (your thesis).',
    'The historical figure speaks in first person ("I", "my").',
    'We read it aloud with a timer: 3 to 5 minutes.',
    'Every line starts with who says it, like "Maria: ..."'
  ];

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
  function guideFor(id) { if (!GUIDE[id]) GUIDE[id] = readGuide(id); return GUIDE[id]; }

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
      html += '</div></div><div class="crew-picks"><span class="crew-pick-label" id="crew' + i + '-voices-label">Voice</span>' +
        '<div class="chip-checks" role="group" aria-labelledby="crew' + i + '-voices-label">';
      VOICES.forEach(function (v) {
        html += '<label class="chip-check chip-voice-' + v.id + '"><input type="checkbox" id="crew' + i + '-voice-' + v.id + '"><span>' + v.name + '</span></label>';
      });
      html += '</div></div>';
      row.innerHTML = html;
      host.appendChild(row);
    }
    host.addEventListener('input', crewCheck);
    host.addEventListener('change', crewCheck);

    var jobs = '<dl class="job-list">';
    JOBS.forEach(function (j) {
      jobs += '<dt>' + j.name + '</dt><dd><strong>Before writing:</strong> ' + j.before + '<br><strong>In the Doc:</strong> ' + j.during + '</dd>';
    });
    jobs += '<dt>Everyone</dt><dd>Reads the source at their own level, and writes the lines for the voice they will perform.</dd></dl>';
    jobs += '<dl class="job-list">';
    VOICES.forEach(function (v) { jobs += '<dt>' + v.name + ' voice</dt><dd>' + v.does + '</dd>'; });
    jobs += '</dl><p class="field-hint">Sharing is fine. Two people can split a job (one edits the Hook, the other the Story), and one person can do two.</p>';
    if ($('crewJobsBody')) $('crewJobsBody').innerHTML = jobs;
  }

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
    VOICES.forEach(function (v) {
      if (v.id === 'narrator' && crewSize() === 2) return; /* a pair can skip the Narrator */
      if (!members.some(function (m) { return m.voices.indexOf(v) !== -1; })) open.push(v.name + ' voice');
    });
    var noVoice = members.filter(function (m) { return m.name && !m.voices.length; }).map(function (m) { return m.name; });
    var msg = '';
    if (open.length) msg = 'Still open: ' + open.join(', ') + '. Someone can take two.';
    else msg = 'Every job and voice has someone.';
    if (noVoice.length) msg += ' ' + noVoice.join(' and ') + (noVoice.length > 1 ? ' need' : ' needs') + ' a voice too.';
    var box = $('crewCheck');
    if (box) { box.textContent = msg; box.classList.toggle('is-ok', !open.length && !noVoice.length); }
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
        : crew ? 'Your crew plans here, then writes the script together in a Google Doc.'
        : 'Groups plan here, then write together in a Google Doc. If you are working alone, you write your whole script here.';
    }
    var fh = $('factBankHint');
    if (fh) fh.textContent = crew
      ? 'The Researcher leads, and anyone can add. Put each fact in your own words and say where it came from. Aim for six. Every fact in your script should trace back to one of these.'
      : 'Put each fact in your own words and say where it came from. Aim for six. Every fact in your script should trace back to one of these.';
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
        '<input type="text" id="fact' + i + '-src" placeholder="Source, like Britannica">' +
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
  }
  function chosen(part) {
    var r = document.querySelector('input[name="' + part.radio + '"]:checked');
    if (!r) return null;
    return part.styles.filter(function (s) { return s.id === r.value; })[0] || null;
  }
  function voiceLabel(voice) {
    if (voice === 'all') return { name: 'Everyone', who: '' };
    var v = VOICES.filter(function (x) { return x.id === voice; })[0];
    return { name: v ? v.name : voice, who: window.crewVoiceNames(voice) };
  }
  function chip(voice) {
    var l = voiceLabel(voice);
    return '<span class="voice-chip voice-' + voice + '">' + esc(l.name) + (l.who ? ' <span class="voice-who">(' + esc(l.who) + ')</span>' : '') + '</span>';
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
    var mapHtml = '';
    PARTS.forEach(function (part, i) {
      var s = chosen(part);
      mapHtml += '<div class="map-part"><span class="map-name">' + part.name + '</span><span class="map-time">' + part.time + '</span>' +
        '<span class="map-style">' + (s ? esc(s.name) : 'Pick a style') + '</span></div>' +
        (i < PARTS.length - 1 ? '<span class="map-arrow" aria-hidden="true">»</span>' : '');
    });
    if ($('episodeMap')) $('episodeMap').innerHTML = mapHtml + '<p class="map-total">The whole episode: 3 to 5 minutes.</p>';

    /* Park the one-line inputs before redrawing, so their typed text survives. */
    var park = $('planInputPark');
    Object.keys(PLAN_INPUTS).forEach(function (k) { park.appendChild(PLAN_INPUTS[k]); });
    host.innerHTML = '';
    PARTS.forEach(function (part, i) {
      var s = chosen(part);
      var sec = el('section', { 'class': 'plan-part', 'data-radio': part.radio });
      var html = '<h3>' + (i + 1) + '. ' + part.name + ' <span class="plan-time">' + part.time + '</span></h3>' +
        '<div class="style-cards" role="radiogroup" aria-label="' + part.name + ' style">';
      part.styles.forEach(function (st) {
        var on = s && s.id === st.id;
        html += '<label class="style-card' + (on ? ' is-on' : '') + '">' +
          '<input type="radio" name="plan-' + part.radio + '" value="' + st.id + '"' + (on ? ' checked' : '') + '>' +
          '<span class="style-name">' + st.name + '</span><span class="style-desc">' + st.desc + '</span>' +
          '<span class="beat-strip" aria-hidden="true" data-no-listen>' +
          st.beats.map(function (b) { return '<span class="beat-dot voice-' + b[2] + '" title="' + esc(b[1]) + '"></span>'; }).join('') +
          '</span></label>';
      });
      html += '</div>';
      sec.innerHTML = html;
      if (s) {
        var list = el('ol', { 'class': 'plan-beats' });
        allBeats(part, s).forEach(function (b) {
          var g = guideFor(b[0]);
          var li = el('li', { 'class': 'plan-beat' });
          li.innerHTML = '<div class="plan-beat-head"><label for="plan-' + b[0] + '" class="plan-beat-title">' + esc(b[1]) + '</label>' + chip(b[2]) + '</div>' +
            (g.what ? '<p class="plan-beat-what">' + esc(g.what.replace(/[.\s]+$/, '')) + '.' + (g.target ? ' <span class="plan-beat-target">Aim for ' + esc(g.target) + '.</span>' : '') + '</p>' : '');
          li.appendChild(PLAN_INPUTS[b[0]]);
          list.appendChild(li);
        });
        sec.appendChild(list);
      }
      host.appendChild(sec);
      sec.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.addEventListener('change', function () { pickStyle(part, r.value); });
      });
    });
    var note = el('p', { 'class': 'field-hint' }, 'Change who says what if it fits your episode better. Just make sure every voice in your crew has lines.');
    host.appendChild(note);
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
    var podcast = val('podcastName') || 'Our Podcast';
    var topic = val('subject');
    var members = crewMembers();
    var B = forDoc ? 'border:1px solid #000;border-collapse:collapse;' : '';
    var TD = forDoc ? 'border:1px solid #000;padding:6pt 8pt;vertical-align:top;' : '';
    var GRAY = forDoc ? 'color:#444;font-size:10pt;' : '';
    var h = [];
    h.push('<h1>' + esc(podcast) + '</h1>');
    if (topic) h.push('<p><strong>Episode about:</strong> ' + esc(topic) + '</p>');
    h.push('<p' + (forDoc ? ' style="' + GRAY + '"' : ' class="fr-note"') + '>This is a frame to start from. Add boxes, cut boxes, move them, or make your own version. Keep a Hook, a Story and a Wrap, and cite your facts. Start every line with who says it, like <strong>Maria:</strong> …</p>');

    h.push('<h2>Our Crew</h2><table class="fr-table" style="' + B + 'width:100%"><tr>' +
      ['Name', 'Job', 'Voice'].map(function (x) { return '<th style="' + TD + 'text-align:left">' + x + '</th>'; }).join('') + '</tr>');
    members.forEach(function (m) {
      h.push('<tr><td style="' + TD + '">' + (esc(m.name) || '&nbsp;') + '</td><td style="' + TD + '">' +
        esc(m.jobs.map(function (j) { return j.name; }).join(', ')) + '</td><td style="' + TD + '">' +
        esc(m.voices.map(function (v) { return v.name; }).join(', ')) + '</td></tr>');
    });
    h.push('</table>');

    var thesis = val('workingThesis');
    h.push('<h2>Our Working Thesis</h2>');
    h.push(box(thesis ? '<p>' + esc(thesis) + '</p>' : '', thesis ? 0 : 2));

    var fb = facts();
    while (fb.length < FACT_START) fb.push({ fact: '', src: '' });
    h.push('<h2>Fact Bank</h2><table class="fr-table" style="' + B + 'width:100%"><tr>' +
      ['', 'Fact', 'Source'].map(function (x, i) { return '<th style="' + TD + 'text-align:left' + (i === 0 ? ';width:24pt' : '') + '">' + x + '</th>'; }).join('') + '</tr>');
    fb.forEach(function (f, i) {
      h.push('<tr><td style="' + TD + '">' + (i + 1) + '</td><td style="' + TD + '" class="fr-cell">' + (esc(f.fact) || '&nbsp;') +
        '</td><td style="' + TD + '" class="fr-cell">' + (esc(f.src) || '&nbsp;') + '</td></tr>');
    });
    h.push('</table>');

    PARTS.forEach(function (part) {
      var s = chosen(part);
      h.push('<h2>' + part.name + ' <span style="font-weight:400">(' + part.time + (s ? ', ' + esc(s.name) : '') + ')</span></h2>');
      if (!s) { h.push(box('<p>Pick a style for ' + part.name + ' on the Plan step.</p>', 3)); return; }
      allBeats(part, s).forEach(function (b) {
        var g = guideFor(b[0]);
        var v = voiceLabel(b[2]);
        var who = v.who ? ' (' + esc(v.who) + ')' : (b[2] === 'all' ? '' : ' (nobody yet: pick someone)');
        var head = '<p><strong>' + esc(b[1]) + '</strong> · ' + esc(v.name) + who + '</p>';
        var help = '';
        if (g.what) help += esc(g.what.replace(/[.\s]+$/, '')) + '.' + (g.target ? ' Aim for ' + esc(g.target) + '.' : '');
        if (g.starter) help += (help ? '<br>' : '') + 'Start with: “' + esc(g.starter.replace(/[.\s]+$/, '')) + '…”';
        var plan = val('plan-' + b[0]);
        var body = head + (help ? '<p style="' + GRAY + '" class="fr-help">' + help + '</p>' : '') +
          (plan ? '<p><strong>Plan:</strong> ' + esc(plan) + '</p>' : '');
        h.push(box(body, linesFor(g.target)));
      });
    });

    h.push('<h2>Editor\'s Checklist</h2><ul style="list-style:none;padding-left:0" class="fr-check">');
    CHECKLIST.forEach(function (c) { h.push('<li>☐ ' + esc(c) + '</li>'); });
    h.push('</ul>');
    h.push('<h2>Who Does What in This Doc</h2><ul>');
    JOBS.forEach(function (j) { h.push('<li><strong>' + j.name + ':</strong> ' + esc(j.during) + '</li>'); });
    h.push('<li><strong>Everyone:</strong> writes the lines for the voice they will perform.</li></ul>');
    return h.join('\n');

    function box(inner, lines) {
      if (forDoc) {
        var room = '';
        for (var i = 0; i < Math.max(1, Math.ceil(lines / 2)); i++) room += '<p>&nbsp;</p>';
        return '<table style="' + B + 'width:100%;margin:0 0 8pt"><tr><td style="' + TD + '">' + inner + room + '</td></tr></table>';
      }
      var ruled = '';
      for (var j = 0; j < lines; j++) ruled += '<span class="fr-line"></span>';
      return '<div class="fr-box">' + inner + (lines ? '<div class="fr-lines">' + ruled + '</div>' : '') + '</div>';
    }
  }

  function renderDocPreview() {
    var p = $('docPreview');
    if (p) p.innerHTML = frameHTML(false);
    var t = $('docTitleHint');
    if (t) t.textContent = (val('podcastName') || 'Podcast name') + ' - ' + (val('studentName') || 'your names');
    var dj = $('docJobs');
    if (dj && !dj.innerHTML) {
      dj.innerHTML = '<ul>' + JOBS.map(function (j) { return '<li><strong>' + j.name + ':</strong> ' + j.during + '</li>'; }).join('') +
        '<li><strong>Everyone:</strong> writes the lines for the voice they will perform. Leave comments instead of deleting someone else\'s lines.</li></ul>';
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
      else if (typeof showToast === 'function') showToast('The frame is selected. Press Ctrl+C to copy it.', 6000);
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
  window.printGroupDoc = function () {
    var css = new URL('fonts/fonts.css', location.href).href;
    var doc = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>' + esc(val('podcastName') || 'Group Doc') + '</title>' +
      '<link rel="stylesheet" href="' + css + '"><style>' +
      '@page{size:letter;margin:0.6in}body{font-family:"Atkinson Hyperlegible Next",Verdana,sans-serif;color:#000;background:#fff;font-size:11.5pt;line-height:1.4}' +
      'h1{font-size:20pt;margin:0 0 4pt}h2{font-size:14pt;margin:14pt 0 6pt;break-after:avoid}p{margin:0 0 4pt}' +
      'table{width:100%;border-collapse:collapse;margin:0 0 6pt}th,td{border:1px solid #000;padding:4pt 6pt;text-align:left;vertical-align:top}' +
      'td.fr-cell{height:0.34in}.fr-note,.fr-help{font-size:10pt}' +
      '.fr-box{border:1.5px solid #000;border-radius:4pt;padding:6pt 8pt;margin:0 0 8pt;break-inside:avoid}' +
      '.fr-lines{margin-top:4pt}.fr-line{display:block;height:0.34in;border-bottom:1px solid #000}' +
      '.fr-check li{margin:0 0 4pt}</style></head><body>' + frameHTML(false) + '</body></html>';
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
  };

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
    var verdict = mins < 3 ? 'a little short: aim for 3 to 5 minutes' : mins <= 6 ? 'a good length' : 'long: try to cut it to 5 or 6 minutes';
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
  buildFactRows();
  buildPlanInputs();
  /* Read every field's guidance now, before app.js folds the helper text into
     its "Help me write" panels on load. */
  CREW_OPENING.forEach(function (b) { guideFor(b[0]); });
  PARTS.forEach(function (p) { p.styles.forEach(function (s) { s.beats.forEach(function (b) { guideFor(b[0]); }); }); });
  markListen();
  syncFactRows();
})();

/* My Lines (3.1.0): each student builds their own boxes, with help matched to
   their level, then copies them into the Group Doc. Since 3.4.0 a crew student's
   boxes come from Who says it? on the Plan step: the student taps their name and
   sees the boxes with their name on them.

     Quick  - one short frame per sentence, at most two blanks, filled by tapping
              a word bank drawn only from the topic's reading (builder-banks.js),
              plus a worked example about a different person with one frame
              left blank. Frames are optional and plural.
     Clear  - the question, "Stuck?" starters (optional), ruled lines.
     Full   - the question and ruled lines.
     Deep   - the question, ruled lines, and one "go further" move.

   The rules come from the scaffolded-writing guidance: scaffold the structure,
   never the thinking (every blank is a choice); one frame, one sentence; short
   printed text; varied sentence shapes, with reasons ending in "because" or
   "so"; a printed product goal; a model on the same layout with one frame blank.

   Frame notation: {name} {name's} {podcast} are filled in for the student;
   [where] [when] [whoI] [whoName] [people] [did] [hard] [mattered] [feeling]
   [sound] [voice] are blanks with a word bank; [text:hint] is a blank the
   student types. Everything a student chooses is saved as JSON in #linesState. */
(function () {
  'use strict';
  var C = window.RV_CREW;
  if (!C) return;
  var esc = C.esc;
  var LEVELS = ['mostSupport', 'someSupport', 'standard', 'challenge'];
  var HELP_BLURB = {
    mostSupport: 'Fill in sentence frames by tapping words.',
    someSupport: 'Write it, with starters if you get stuck.',
    standard: 'Write it yourself.',
    challenge: 'Write it yourself, then go further.'
  };

  /* What each kind of box asks, in plain words, and its frames. "person" says
     who is speaking in the frames: I (the historical figure) or they (Host,
     Narrator, reporter). */
  var KINDS = {
    crew_intro: { ask: 'Say your name and the part you play.', person: 'they', frames: [
      "Hi, I'm [text:your first name].", "I'm the [voice] today."] },
    welcome: { ask: 'Welcome listeners. Say who the episode is about.', person: 'they', frames: [
      'Welcome to {podcast}.', 'Today you will meet {name}, [whoName].', '{name} lived in [where] in [when].'] },
    hook_moment: { ask: 'Start inside an exciting moment.', person: 'they', frames: [
      'It was [when], in [where].', '{name} [hard].', 'Everything changed when {name} [did].'] },
    hook_who: { ask: 'Say who this story is about.', person: 'they', frames: [
      'This is the story of {name}, [whoName].', 'Few people remember that {name} [did].', '{name} [did].'] },
    hook_stakes: { ask: 'Say why this moment was dangerous or important.', person: 'they', frames: [
      'The danger was real, because {name} [hard].', 'This story matters because {name} [mattered].'] },
    fact_statement: { ask: 'Start with a surprising true fact.', person: 'they', frames: [
      'Here is a surprising fact: in [when], {name} [did].', "Most people don't know that {name} [did]."] },
    fact_significance: { ask: 'Say why the fact is surprising.', person: 'they', frames: [
      'That is surprising, because {name} [hard].', 'It changes how we see the Revolution, because {name} [mattered].'] },
    question_hook: { ask: 'Ask a question listeners want answered.', person: 'they', frames: [
      'What was it like to be [whoI] in [when]?', 'What would you do if you were [whoI]?'] },
    question_buildup: { ask: 'Ask one or two more questions.', person: 'they', frames: [
      'What happened in [where] in [when]?', 'How did [whoI] end up in [where]?'] },
    question_answer: { ask: 'Hint that the answer is coming. Name the person.', person: 'they', frames: [
      'The answer is in the story of {name}, [whoName].', '{name} [did], and you will hear how.'] },
    sound_effects: { ask: 'Name sounds that take us back in time.', person: 'they', frames: [
      'You can hear [sound].', 'Far away, you can hear [sound].'] },
    sound_setting: { ask: 'Say when and where we are.', person: 'they', frames: [
      'It is [when], in [where].', 'People here feel [feeling].'] },
    sound_subject: { ask: 'Show the person in this place.', person: 'they', frames: [
      'In the middle of it all: {name}, [whoName].', '{name} [did].'] },
    sound_conflict: { ask: 'Say what problem they face.', person: 'they', frames: [
      '{name} [hard].', 'Everyone here feels [feeling], and there is no time to wait.'] },
    narrator_setup: { ask: 'Get listeners ready to hear from the person.', person: 'they', frames: [
      "Now let's hear from {name}, [whoName].", '{name} will tell us about [when].'] },
    transition: { ask: 'Move the story forward in time.', person: 'they', frames: [
      'But in [when], everything changed.', 'Years later, {name} [did].'] },
    subject_before: { ask: 'Speak as the person. Tell about your life before.', person: 'I', frames: [
      'I was [whoI].', 'I lived in [where] in [when].', 'Every day I felt [feeling], because I [hard].'] },
    subject_turn: { ask: 'Speak as the person. Tell about the big moment.', person: 'I', frames: [
      'In [when], I [did].', 'I felt [feeling], but I [did].', 'The hardest part was that I [hard].'] },
    subject_after: { ask: 'Speak as the person. Tell what happened after.', person: 'I', frames: [
      'After that, I [did].', 'I want you to remember that I [did].', 'Because of all this, I [mattered].'] },
    host_question: { ask: 'Ask the person a question.', person: 'they', frames: [
      'What was your life like in [where]?', 'What happened in [when]?', 'How did you feel about [people]?', 'What was the hardest part of being [whoI]?'] },
    subject_answer: { ask: 'Answer as the person. Use "I".', person: 'I', frames: [
      'In [where], I [did].', 'I felt [feeling], because I [hard].', 'I am proud that I [did].', 'People should remember that I [mattered].'] },
    news_opening: { ask: 'Report from the scene, like a reporter at the time.', person: 'they', frames: [
      'This is [text:your name], reporting from [where].', 'It is [when], and people here feel [feeling].'] },
    news_background: { ask: 'Tell what led up to this.', person: 'they', frames: [
      'To understand this, we go back to [when].', '{name} [hard].'] },
    news_quote: { ask: 'Speak as the person, in your own words.', person: 'I', frames: [
      'I [did], because I felt [feeling].', 'The hardest part was that I [hard].'] },
    news_turning: { ask: 'Tell the big moment.', person: 'they', frames: [
      'Then {name} [did].', 'Everyone here is talking about how {name} [did].'] },
    news_aftermath: { ask: 'Tell what happened next.', person: 'they', frames: [
      'After that, {name} [did].', 'People felt [feeling] when {name} [did].'] },
    news_closing: { ask: 'Sign off like a reporter.', person: 'they', frames: [
      'Reporting from [where], this is [text:your name].'] },
    diary_closing: { ask: 'Say what the diary shows.', person: 'they', frames: [
      'These words show that {name} [mattered].', '{name} [hard], and still [did].'] },
    wrap_what: { ask: 'Sum up what happened.', person: 'they', frames: [
      'So, {name} [did].', 'We learned that {name} [hard].'] },
    wrap_reveals: { ask: 'Say what the story shows.', person: 'they', frames: [
      'This story shows that {name} [mattered].', '{name} [did], so the Revolution was not only about famous leaders.'] },
    wrap_why: { ask: 'Say why we should care.', person: 'they', frames: [
      'This matters because {name} [mattered].', 'We should care, because {name} [hard].'] },
    wrap_final: { ask: 'End with one strong sentence.', person: 'they', frames: [
      'Remember {name}, [whoName].', '{name} [mattered].'] },
    today_lesson: { ask: 'Say the lesson of the story.', person: 'they', frames: [
      'Here is the lesson: {name} [mattered].', '{name} [hard], and still [did].'] },
    today_now: { ask: 'Connect the story to today.', person: 'they', frames: [
      'Today, people still [text:what people still do or face].', 'We see this today when [text:a real example from today].'] },
    today_final: { ask: 'Say why it still matters.', person: 'they', frames: [
      'This story still matters, because {name} [mattered].'] },
    missing_usual: { ask: 'Say what most people learn about the Revolution.', person: 'they', frames: [
      'Most people learn about [text:famous leaders, like George Washington].', 'Most people learn about [people].'] },
    missing_who: { ask: 'Say who is missing from that story.', person: 'they', frames: [
      'But what about {name}, [whoName]?', 'Few people learn that {name} [did].'] },
    missing_why: { ask: 'Say why the story was left out.', person: 'they', frames: [
      "{name's} story was left out because [text:your reason].", 'Many stories were left out, because people in power [text:what they did].'] },
    missing_lose: { ask: 'Say what we lose when we leave it out.', person: 'they', frames: [
      'If we leave {name} out, we miss how someone [hard].', 'We also miss how someone [did].'] },
    missing_final: { ask: 'End with a challenge for listeners.', person: 'they', frames: [
      'So ask yourself: what would you do if you were [whoI]?'] },
    legacy_impact: { ask: 'Say what they changed.', person: 'they', frames: [
      '{name} [mattered].', 'Because {name} [did], things changed.'] },
    legacy_lesson: { ask: 'Say what we can learn.', person: 'they', frames: [
      'The lesson is that you can [text:what we can do].', '{name} [hard], and still [did].'] },
    legacy_honor: { ask: 'Say how we can honor them.', person: 'they', frames: [
      'We honor {name} by [text:what we can do].', 'Remember {name}, [whoName].'] }
  };
  var BEAT_KIND = {
    'group-intro': 'crew_intro', 'group-welcome': 'welcome',
    'dramatic-hook': 'hook_moment', 'dramatic-subject': 'hook_who', 'dramatic-stakes': 'hook_stakes',
    'fact-statement': 'fact_statement', 'fact-significance': 'fact_significance', 'fact-subject': 'hook_who',
    'question-hook': 'question_hook', 'question-buildup': 'question_buildup', 'question-answer': 'question_answer',
    'sound-effects': 'sound_effects', 'sound-setting': 'sound_setting', 'sound-subject': 'sound_subject', 'sound-conflict': 'sound_conflict',
    'interview-intro': 'narrator_setup', 'narrative-intro': 'narrator_setup', 'diary-intro': 'narrator_setup',
    'q1': 'host_question', 'q2': 'host_question', 'q3': 'host_question', 'q4': 'host_question', 'q5': 'host_question',
    'a1': 'subject_answer', 'a2': 'subject_answer', 'a3': 'subject_answer', 'a4': 'subject_answer', 'a5': 'subject_answer',
    'narrative-scene1': 'subject_before', 'narrative-trans1': 'transition', 'narrative-scene2': 'subject_turn',
    'narrative-trans2': 'transition', 'narrative-scene3': 'subject_after',
    'news-opening': 'news_opening', 'news-background': 'news_background', 'news-quote': 'news_quote',
    'news-turning': 'news_turning', 'news-aftermath': 'news_aftermath', 'news-closing': 'news_closing',
    'diary1-content': 'subject_before', 'diary2-content': 'subject_turn', 'diary3-content': 'subject_after', 'diary-closing': 'diary_closing',
    'sig-what': 'wrap_what', 'sig-reveals': 'wrap_reveals', 'sig-why': 'wrap_why', 'sig-final': 'wrap_final',
    'today-lesson': 'today_lesson', 'today-parallel': 'today_now', 'today-specific': 'today_now', 'today-final': 'today_final',
    'challenge-standard': 'missing_usual', 'challenge-missing': 'missing_who', 'challenge-why': 'missing_why',
    'challenge-lose': 'missing_lose', 'challenge-final': 'missing_final',
    'legacy-impact': 'legacy_impact', 'legacy-lesson': 'legacy_lesson', 'legacy-universal': 'legacy_lesson', 'legacy-honor': 'legacy_honor'
  };
  var STRETCH = {
    intro: 'Go further: open with a real line from the time. Find one in the Voice Bank under Your reading.',
    content: 'Go further: add a "but". Show someone who saw it differently, or what it cost.',
    conclusion: 'Go further: say what changed and what stayed unfinished, using "but" or "even though".'
  };
  var SLOT_NAME = {
    where: 'a place', when: 'a time', people: 'a person', feeling: 'a feeling', sound: 'a sound', voice: 'your part',
    whoI: 'who', whoName: 'who they were'
  };
  function slotName(slot, person) {
    if (slot === 'did') return person === 'I' ? 'something you did' : 'something they did';
    if (slot === 'hard') return person === 'I' ? 'something hard you faced' : 'something hard they faced';
    if (slot === 'mattered') return 'why it matters';
    if (slot === 'whoI') return person === 'I' ? 'who you were' : 'who';
    return SLOT_NAME[slot] || slot;
  }

  /* ---------------------------------------------------------------- state */
  function $(id) { return document.getElementById(id); }
  function load() {
    var raw = $('linesState') ? $('linesState').value : '';
    var st = {};
    try { st = raw ? JSON.parse(raw) : {}; } catch (e) { st = {}; }
    st.voices = st.voices || [];
    st.beats = st.beats || {};
    return st;
  }
  function store(st) {
    var box = $('linesState');
    if (box) box.value = JSON.stringify(st);
    if (typeof autoSave === 'function') autoSave();
  }
  function beatState(st, id) { return st.beats[id] || (st.beats[id] = { s: {}, text: '', edited: false }); }
  function helpLevel(st) { return st.help || (typeof rvLevel === 'function' ? rvLevel() : 'standard'); }

  /* ---------------------------------------------------------------- banks */
  function topicBank(id) {
    var b = window.RV_BANKS && window.RV_BANKS[id];
    if (b) return b;
    var r = window.RV_READINGS && window.RV_READINGS[id];
    return { name: r ? r.name : 'this person', group: false };
  }
  function currentBank() { return topicBank(typeof rvCurrentTopic === 'function' ? rvCurrentTopic() : ''); }
  function options(bank, slot) {
    var shared = window.RV_BANK_SHARED || {};
    if (slot === 'feeling') return shared.feelings || [];
    if (slot === 'sound') return shared.sounds || [];
    if (slot === 'voice') {
      var used = C.isCrew() ? C.cast().used : [];
      var vs = C.VOICES.filter(function (v) { return !used.length || used.indexOf(v.id) !== -1; });
      return vs.map(function (v) { return v.name; });
    }
    return bank[slot] || [];
  }
  function modelTopic() {
    var cur = typeof rvCurrentTopic === 'function' ? rvCurrentTopic() : '';
    var prefer = ['deborah-sampson', 'phillis-wheatley', 'james-armistead'];
    for (var i = 0; i < prefer.length; i++) if (prefer[i] !== cur && window.RV_BANKS && window.RV_BANKS[prefer[i]]) return prefer[i];
    var keys = window.RV_BANKS ? Object.keys(window.RV_BANKS) : [];
    for (var k = 0; k < keys.length; k++) if (keys[k] !== cur) return keys[k];
    return '';
  }

  /* ---------------------------------------------------------------- frames */
  function possessive(n) { return /s$/i.test(n) ? n + "'" : n + "'s"; }
  function fixed(text, bank) {
    // Mid-sentence form ("women", not "Women"); sentence() capitalizes a line's first letter.
    var name = bank.nameMid || bank.name || 'this person';
    var podcast = ($('podcastName') && $('podcastName').value.trim()) || 'our podcast';
    return text.replace(/\{name's\}/g, possessive(name)).replace(/\{name\}/g, name).replace(/\{podcast\}/g, podcast);
  }
  /* A frame as parts: plain text, or a blank { slot, hint, key }. */
  function parse(frame, fi, bank) {
    var parts = [], re = /\[([a-zA-Z]+)(?::([^\]]+))?\]/g, last = 0, m, bi = 0;
    var text = fixed(frame, bank);
    while ((m = re.exec(text))) {
      if (m.index > last) parts.push({ t: text.slice(last, m.index) });
      parts.push({ slot: m[1], hint: m[2] || '', key: fi + '-' + (bi++) });
      last = re.lastIndex;
    }
    if (last < text.length) parts.push({ t: text.slice(last) });
    return parts;
  }
  function sentence(parts, values) {
    var out = '', complete = true;
    parts.forEach(function (p) {
      if (p.t != null) { out += p.t; return; }
      var v = (values[p.key] || '').trim();
      if (!v) complete = false;
      out += v;
    });
    out = out.replace(/\s+/g, ' ').trim();
    if (out) out = out.charAt(0).toUpperCase() + out.slice(1);
    return complete ? out : '';
  }
  function hasBlank(parts) { return parts.some(function (p) { return p.slot; }); }
  /* Filled frames, in order. A frame with no blank (like "Welcome to our
     podcast.") joins in once the student has filled any other frame. */
  function assemble(kind, bank, values) {
    var rows = kind.frames.map(function (f, i) {
      var parts = parse(f, i, bank);
      return hasBlank(parts) ? { s: sentence(parts, values) } : { fixed: parts.map(function (p) { return p.t || ''; }).join('') };
    });
    var any = rows.some(function (r) { return r.s; });
    return rows.map(function (r) { return r.s || (any ? r.fixed || '' : ''); }).filter(Boolean).join(' ');
  }
  function firstOpen(kind, bank, values) {
    for (var i = 0; i < kind.frames.length; i++) {
      var parts = parse(kind.frames[i], i, bank);
      if (hasBlank(parts) && !sentence(parts, values)) return i;
    }
    return 0;
  }
  function goal(target) {
    var m = String(target || '').match(/(\d+)\s*-\s*(\d+)/);
    var hi = m ? +m[2] : 40;
    return hi <= 25 ? '1 or 2 sentences' : hi <= 50 ? '2 or 3 sentences' : '3 to 5 sentences';
  }

  /* ---------------------------------------------------------------- render */
  /* In a crew, a student's boxes are the ones with their name on them. */
  function byCast(st) { return C.isCrew() && !!st.name; }
  function syncVoices(st) {
    if (!byCast(st)) return;
    var c = C.cast();
    var me = c.members.filter(function (m) { return m.label === st.name; })[0];
    st.voices = me ? me.voices.map(function (v) { return v.id; }).filter(function (v) { return c.used.indexOf(v) !== -1; }) : [];
  }
  function voiceNames(st) {
    return st.voices.map(function (v) { return C.VOICES.filter(function (x) { return x.id === v; })[0].name; }).join(' and ');
  }
  function myBeats(st) {
    var out = [];
    var owners = byCast(st) ? C.cast().owners : null;
    C.PARTS.forEach(function (part) {
      var style = C.chosen(part);
      var beats = style ? C.allBeats(part, style).filter(function (b) {
        if (b[2] === 'all') return true;
        if (owners) return (owners[b[0]] || []).indexOf(st.name) !== -1;
        return st.voices.indexOf(b[2]) !== -1;
      }) : [];
      out.push({ part: part, style: style, beats: beats });
    });
    return out;
  }

  function renderWho(st) {
    var host = $('linesWho');
    if (!host) return;
    var members = C.isCrew() ? C.crewMembers().filter(function (m) { return m.name; }) : [];
    var html = '<fieldset class="lines-field"><legend>Which one are you?</legend>';
    if (members.length) {
      html += '<div class="chip-checks">';
      members.forEach(function (m) {
        html += '<label class="chip-check"><input type="radio" name="linesName" value="' + esc(m.name) + '"' +
          (st.name === m.name ? ' checked' : '') + '><span>' + esc(m.name) + '</span></label>';
      });
      html += '</div>';
    } else {
      html += '<label for="linesNameInput" class="sr-only">Your first name</label>' +
        '<input type="text" id="linesNameInput" class="lines-name" placeholder="Your first name" value="' + esc(st.name || '') + '">';
    }
    html += '</fieldset>';
    if (!members.length) {
      html += '<fieldset class="lines-field"><legend>Which part do you say?</legend><div class="chip-checks">';
      C.VOICES.forEach(function (v) {
        html += '<label class="chip-check"><input type="checkbox" name="linesVoice" value="' + v.id + '"' +
          (st.voices.indexOf(v.id) !== -1 ? ' checked' : '') + '><span>' + v.name + '</span></label>';
      });
      html += '</div></fieldset>';
    } else if (st.name && !st.voices.length) {
      html += '<p class="lines-empty">Your name isn\'t on a part yet. Go back to <strong>Plan</strong> and check it under Who says it?</p>';
    }
    host.innerHTML = html;
  }

  function renderHelp(st) {
    var host = $('linesHelp');
    if (!host) return;
    var cur = helpLevel(st);
    var html = '<fieldset class="lines-field"><legend>How much help?</legend>' +
      '<p class="field-hint">It starts at your reading level. Change it anytime.</p><div class="level-toggle" role="group" aria-label="Writing help">';
    LEVELS.forEach(function (k) {
      html += '<button type="button" class="level-pill' + (k === cur ? ' active' : '') + '" aria-pressed="' + (k === cur) + '" data-help="' + k + '">' +
        RV_LEVEL_NAMES[k] + '</button>';
    });
    html += '</div><p class="lines-help-blurb">' + RV_LEVEL_NAMES[cur] + ': ' + HELP_BLURB[cur] + '</p></fieldset>';
    host.innerHTML = html;
  }

  function renderStyles() {
    var host = $('linesStyles');
    if (!host) return;
    var missing = C.PARTS.filter(function (p) { return !C.chosen(p); });
    if (!missing.length) { host.innerHTML = ''; return; }
    var html = '<fieldset class="lines-field"><legend>Which styles did your crew pick?</legend>' +
      '<p class="field-hint">Ask your Lead Scriptwriter, or look at your Group Doc.</p>';
    missing.forEach(function (part) {
      html += '<label for="linesStyle-' + part.radio + '">' + part.name + '</label><select id="linesStyle-' + part.radio + '" data-part="' + part.radio + '">' +
        '<option value="">Choose…</option>' + part.styles.map(function (s) { return '<option value="' + s.id + '">' + s.name + '</option>'; }).join('') + '</select>';
    });
    host.innerHTML = html + '</fieldset>';
  }

  function beatHTML(st, part, b) {
    var id = b[0], kind = KINDS[BEAT_KIND[id]];
    if (!kind) return '';
    var bank = currentBank();
    var g = C.guideFor(id);
    var bs = beatState(st, id);
    var level = helpLevel(st);
    var v = C.voiceLabel(b[2]);
    var html = '<section class="lb-beat" data-beat="' + id + '">' +
      '<div class="plan-beat-head"><h4 class="lb-title">' + esc(b[1]) + '</h4><span class="voice-chip voice-' + b[2] + '">' + esc(v.name) + '</span></div>' +
      '<p class="lb-ask">' + esc(kind.ask) + '</p>' +
      '<p class="lb-goal">Aim for ' + goal(g.target) + '.' + (level === 'mostSupport' ? ' Pick the frames that fit. You don\'t need all of them.' : '') + '</p>';

    if (level === 'mostSupport') {
      /* Only the frame being worked shows its word banks; the others show as a
         sentence with blanks and a button to work on them. Less on screen. */
      var openF = typeof bs.open === 'number' ? bs.open : firstOpen(kind, bank, bs.s);
      kind.frames.forEach(function (f, fi) {
        var parts = parse(f, fi, bank);
        if (!hasBlank(parts)) {
          html += '<div class="lb-frame lb-frame-fixed"><p class="lb-sentence">' + esc(parts.map(function (p) { return p.t || ''; }).join('')) +
            '</p><p class="field-hint">You can start with this line as it is.</p></div>';
          return;
        }
        var done = sentence(parts, bs.s);
        var isOpen = fi === openF;
        html += '<div class="lb-frame' + (done ? ' is-done' : '') + (isOpen ? ' is-open' : '') + '"><p class="lb-sentence">';
        parts.forEach(function (p) {
          if (p.t != null) { html += esc(p.t); return; }
          var val = bs.s[p.key];
          html += '<span class="lb-blank' + (val ? ' is-filled' : '') + '">' + (val ? esc(val) : '<span class="sr-only">blank: </span>' + esc(p.hint || slotName(p.slot, kind.person))) + '</span>';
        });
        html += '</p>';
        if (!isOpen) {
          html += '<button type="button" class="link-btn lb-open" data-open="' + fi + '">' + (done ? 'Change this sentence' : 'Use this sentence') + '</button></div>';
          return;
        }
        parts.forEach(function (p) {
          if (!p.slot) return;
          var label = p.hint || slotName(p.slot, kind.person);
          if (p.slot === 'text') {
            html += '<label class="lb-bank-label" for="lb-' + id + '-' + p.key + '">Type ' + esc(label) + '</label>' +
              '<input type="text" class="lb-own" id="lb-' + id + '-' + p.key + '" data-key="' + p.key + '" value="' + esc(bs.s[p.key] || '') + '">';
            return;
          }
          var opts = options(bank, p.slot);
          html += '<div class="lb-bank" role="group" aria-label="Pick ' + esc(label) + '"><span class="lb-bank-label">Pick ' + esc(label) + ':</span>';
          opts.forEach(function (o) {
            var on = bs.s[p.key] === o;
            html += '<button type="button" class="lb-chip' + (on ? ' is-on' : '') + '" aria-pressed="' + on + '" data-key="' + p.key + '" data-val="' + esc(o) + '">' + esc(o) + '</button>';
          });
          var own = bs.s[p.key] && opts.indexOf(bs.s[p.key]) === -1;
          html += '<button type="button" class="lb-chip lb-chip-own' + (own ? ' is-on' : '') + '" data-own="' + p.key + '">' + (own ? esc(bs.s[p.key]) : 'My own words') + '</button></div>';
        });
        html += '</div>';
      });
      html += modelHTML(kind);
    } else if (level === 'someSupport') {
      var starters = [];
      if (g.starter) starters.push(g.starter.replace(/[.\s]+$/, ''));
      kind.frames.forEach(function (f, fi) {
        var pre = parse(f, fi, bank)[0];
        if (pre && pre.t != null && pre.t.trim().split(/\s+/).length >= 2) starters.push(pre.t.trim().replace(/[,:]$/, ''));
      });
      starters = starters.filter(function (x, i) { return starters.indexOf(x) === i; }).slice(0, 4);
      if (starters.length) {
        html += '<p class="lb-stuck"><strong>Stuck?</strong> Pick a starter if it helps. You don\'t need one.</p><div class="lb-starters">' +
          starters.map(function (x) { return '<button type="button" class="starter-btn lb-starter" data-start="' + esc(x) + '">' + esc(x) + '…</button>'; }).join('') + '</div>';
      }
    } else if (level === 'challenge') {
      html += '<p class="lb-stretch">' + esc(STRETCH[part.radio]) + '</p>';
    }

    var text = (level === 'mostSupport' && !bs.edited) ? assemble(kind, bank, bs.s) : bs.text;
    html += '<label class="lb-out-label" for="lt-' + id + '">' + (level === 'mostSupport' ? 'Your lines (you can change them)' : 'Your lines') + '</label>' +
      '<textarea class="lb-out" id="lt-' + id + '" data-beat="' + id + '" rows="3">' + esc(text) + '</textarea>';
    if (level === 'mostSupport' && bs.edited) html += '<button type="button" class="link-btn lb-reset" data-reset="' + id + '">Go back to the frames</button>';
    return html + '</section>';
  }

  /* A worked example about someone else, on the same frames, with the last
     frame left blank for the student to finish in their head. */
  function modelHTML(kind) {
    var mt = modelTopic();
    if (!mt) return '';
    var bank = topicBank(mt);
    var lines = [];
    kind.frames.forEach(function (f, fi) {
      var parts = parse(f, fi, bank);
      if (!hasBlank(parts)) return;
      var vals = {}, n = 0;
      parts.forEach(function (p) {
        if (!p.slot) return;
        var opts = p.slot === 'text' ? [] : options(bank, p.slot);
        vals[p.key] = opts.length ? opts[(fi + n++) % opts.length] : '';
      });
      lines.push({ parts: parts, vals: vals });
    });
    if (lines.length < 2) return '';
    var html = '<details class="lb-model"><summary>See an example (about ' + esc(bank.name) + ', not your person)</summary><ul>';
    lines.forEach(function (l, i) {
      var last = i === lines.length - 1;
      html += '<li>' + l.parts.map(function (p) {
        if (p.t != null) return esc(p.t);
        var val = l.vals[p.key];
        return (!last && val) ? '<span class="lb-model-fill">' + esc(val) + '</span>' : '<span class="lb-blank">' + esc(p.hint || '…') + '</span>';
      }).join('') + (last ? ' <span class="field-hint">(finish this one in your head)</span>' : '') + '</li>';
    });
    return html + '</ul></details>';
  }

  /* One box at a time, with a row of numbered boxes to jump between. A long
     scroll of every box was a wall for the students this is for. */
  function flatBeats(st) {
    var out = [];
    myBeats(st).forEach(function (row) { row.beats.forEach(function (b) { out.push({ part: row.part, style: row.style, b: b }); }); });
    return out;
  }
  function beatDone(st, id) {
    var bs = st.beats[id];
    if (!bs) return false;
    var kind = KINDS[BEAT_KIND[id]];
    var text = (helpLevel(st) === 'mostSupport' && !bs.edited && kind) ? assemble(kind, currentBank(), bs.s) : bs.text;
    return !!(text && text.trim());
  }
  function renderBeats(st) {
    var host = $('linesBeats');
    if (!host) return;
    if (C.isCrew() && !st.name) { host.innerHTML = '<p class="lines-empty">Tap your name above to see your boxes.</p>'; return; }
    if (!byCast(st) && !st.voices.length) { host.innerHTML = '<p class="lines-empty">Pick your part above to see your boxes.</p>'; return; }
    var rows = myBeats(st);
    var notes = '';
    rows.forEach(function (row) {
      if (!row.style) notes += '<p class="lines-empty">Pick the style for ' + row.part.name + ' above.</p>';
      else if (!row.beats.length) notes += '<p class="lines-empty">You have no boxes in ' + row.part.name + '. Help a crewmate with theirs.</p>';
    });
    var all = flatBeats(st);
    if (!all.length) { host.innerHTML = notes; return; }
    var cur = Math.max(0, Math.min(all.length - 1, st.cur | 0));
    var html = '<nav class="lb-boxes" aria-label="Your boxes"><span class="lb-boxes-label">Your boxes:</span>';
    all.forEach(function (x, i) {
      var done = beatDone(st, x.b[0]);
      html += '<button type="button" class="lb-box-btn' + (i === cur ? ' is-current' : '') + (done ? ' is-done' : '') + '" data-go="' + i + '"' +
        (i === cur ? ' aria-current="step"' : '') + ' aria-label="Box ' + (i + 1) + ': ' + esc(x.b[1]) + (done ? ', done' : '') + '">' + (i + 1) + (done ? ' ✓' : '') + '</button>';
    });
    html += '</nav>';
    var x = all[cur];
    html += '<h3 class="lb-part">Box ' + (cur + 1) + ' of ' + all.length + ' <span class="plan-time">' + x.part.name + ', ' + esc(x.style.name) + '</span></h3>';
    html += beatHTML(st, x.part, x.b);
    html += '<div class="lb-nav">' +
      (cur > 0 ? '<button type="button" class="btn btn-secondary" data-go="' + (cur - 1) + '">Back a box</button>' : '<span></span>') +
      (cur < all.length - 1 ? '<button type="button" class="btn" data-go="' + (cur + 1) + '">Next box</button>' : '<span class="lb-last">That\'s your last box. Copy your lines below.</span>') +
      '</div>';
    host.innerHTML = notes + html;
  }

  function addPeek() {
    var sec = document.querySelector('.section-lines');
    if (!sec || sec.querySelector('.reading-peek')) return;
    var peek = document.createElement('div');
    peek.className = 'reading-peek';
    peek.innerHTML = '<button type="button" class="reading-peek-btn" aria-expanded="false" aria-controls="readingDrawerPanel">Your reading</button>' +
      '<span class="reading-peek-hint">Open the source while you build</span>';
    var lead = sec.querySelector('.step-lead');
    lead.parentNode.insertBefore(peek, lead.nextSibling);
    peek.querySelector('button').addEventListener('click', function () { if (typeof toggleReadingDrawer === 'function') toggleReadingDrawer(this); });
  }

  function render() {
    var st = load();
    syncVoices(st);
    /* The crew introduction already knows who is speaking. */
    if (st.name || st.voices.length) {
      var gi = beatState(st, 'group-intro');
      if (!gi.s['0-0'] && st.name) gi.s['0-0'] = st.name;
      if (!gi.s['1-0'] && st.voices.length) gi.s['1-0'] = C.VOICES.filter(function (v) { return v.id === st.voices[0]; })[0].name;
    }
    addPeek();
    renderWho(st);
    renderHelp(st);
    renderStyles();
    renderBeats(st);
    if (window.READER_TOOLS) window.READER_TOOLS.reset();
  }

  /* ---------------------------------------------------------------- events */
  /* Redraw after a choice, keeping the scroll position and the focus on the
     control the student just used. */
  function rerenderBeat(id, focusSel) {
    var scrollY = window.scrollY;
    renderBeats(load());
    window.scrollTo(0, scrollY);
    if (focusSel) {
      var f = document.querySelector('.lb-beat[data-beat="' + id + '"] ' + focusSel);
      if (f) f.focus({ preventScroll: true });
    }
  }

  function wire() {
    var stepEl = document.querySelector('.section-lines');
    if (!stepEl) return;
    stepEl.addEventListener('click', function (e) {
      var t = e.target.closest('button');
      if (!t) return;
      var st, beat = t.closest('.lb-beat');
      if (t.dataset.help) { st = load(); st.help = t.dataset.help; store(st); render(); return; }
      if (t.dataset.go != null) {
        st = load(); st.cur = +t.dataset.go; store(st); renderBeats(st);
        var h = document.querySelector('#linesBeats .lb-part');
        if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); h.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        return;
      }
      if (t.dataset.open != null && beat) {
        st = load(); beatState(st, beat.dataset.beat).open = +t.dataset.open; store(st);
        rerenderBeat(beat.dataset.beat, '.lb-frame.is-open .lb-chip');
        return;
      }
      if (t.dataset.val != null && beat) {
        st = load();
        var bs = beatState(st, beat.dataset.beat);
        bs.s[t.dataset.key] = bs.s[t.dataset.key] === t.dataset.val ? '' : t.dataset.val;
        var kindNow = KINDS[BEAT_KIND[beat.dataset.beat]];
        var fiNow = +t.dataset.key.split('-')[0];
        if (sentence(parse(kindNow.frames[fiNow], fiNow, currentBank()), bs.s)) {
          var nxt = firstOpen(kindNow, currentBank(), bs.s);
          if (nxt !== fiNow && !sentence(parse(kindNow.frames[nxt], nxt, currentBank()), bs.s)) bs.open = nxt;
        }
        store(st);
        rerenderBeat(beat.dataset.beat, '.lb-chip[data-key="' + t.dataset.key + '"][data-val="' + CSS.escape(t.dataset.val) + '"]');
        return;
      }
      if (t.dataset.own && beat) {
        var words = window.prompt('Type your own words for this blank:');
        if (words == null) return;
        st = load();
        beatState(st, beat.dataset.beat).s[t.dataset.own] = words.trim();
        store(st);
        rerenderBeat(beat.dataset.beat, '.lb-chip-own[data-own="' + t.dataset.own + '"]');
        return;
      }
      if (t.dataset.start && beat) {
        var ta = beat.querySelector('.lb-out');
        if (ta) {
          ta.value = (ta.value.trim() ? ta.value.trim() + ' ' : '') + t.dataset.start + ' ';
          ta.dispatchEvent(new Event('input', { bubbles: true }));
          ta.focus();
          ta.setSelectionRange(ta.value.length, ta.value.length);
        }
        return;
      }
      if (t.dataset.reset && beat) {
        st = load();
        var r = beatState(st, t.dataset.reset); r.edited = false; r.text = '';
        store(st);
        rerenderBeat(t.dataset.reset, '.lb-out');
      }
    });
    stepEl.addEventListener('input', function (e) {
      var t = e.target, st;
      if (t.classList.contains('lb-out')) {
        st = load();
        var bs = beatState(st, t.dataset.beat);
        bs.text = t.value;
        if (helpLevel(st) === 'mostSupport') bs.edited = true;
        store(st);
        return;
      }
      if (t.classList.contains('lb-own')) {
        var beat = t.closest('.lb-beat');
        st = load();
        beatState(st, beat.dataset.beat).s[t.dataset.key] = t.value;
        store(st);
        var out = beat.querySelector('.lb-out');
        var b = beat.dataset.beat;
        if (out && !beatState(st, b).edited) out.value = assemble(KINDS[BEAT_KIND[b]], currentBank(), beatState(st, b).s);
        return;
      }
      if (t.id === 'linesNameInput') { st = load(); st.name = t.value.trim(); store(st); }
    });
    stepEl.addEventListener('change', function (e) {
      var t = e.target, st;
      if (t.name === 'linesName') {
        st = load(); st.name = t.value;
        syncVoices(st);
        var gi = beatState(st, 'group-intro');
        gi.s['0-0'] = st.name;
        if (st.voices.length) gi.s['1-0'] = voiceNames(st).split(' and ')[0];
        store(st); render(); return;
      }
      if (t.name === 'linesVoice') {
        st = load();
        st.voices = Array.prototype.slice.call(stepEl.querySelectorAll('input[name="linesVoice"]:checked')).map(function (x) { return x.value; });
        store(st); renderBeats(st); return;
      }
      if (t.dataset && t.dataset.part) {
        var part = C.PARTS.filter(function (p) { return p.radio === t.dataset.part; })[0];
        var radio = document.querySelector('input[name="' + part.radio + '"][value="' + t.value + '"]');
        if (radio) radio.checked = true;
        part.styles.forEach(function (s) { var f = $(part.prefix + s.id); if (f) f.classList.toggle('active', s.id === t.value); });
        if (typeof autoSave === 'function') autoSave();
        render();
      }
    });
  }

  /* ---------------------------------------------------------------- output */
  function linesText(st) {
    var bank = currentBank();
    var who = st.name || 'Me';
    syncVoices(st);
    var voices = voiceNames(st);
    var out = [who + (voices ? ' (' + voices + ')' : '')];
    myBeats(st).forEach(function (row) {
      row.beats.forEach(function (b) {
        var bs = st.beats[b[0]];
        if (!bs) return;
        var kind = KINDS[BEAT_KIND[b[0]]];
        var text = (helpLevel(st) === 'mostSupport' && !bs.edited && kind) ? assemble(kind, bank, bs.s) : bs.text;
        if (!text || !text.trim()) return;
        out.push('', row.part.name + ': ' + b[1], who + ': ' + text.trim());
      });
    });
    return out.join('\n');
  }
  window.copyMyLines = function () {
    var st = load();
    var text = linesText(st);
    if (text.split('\n').length < 3) { if (typeof showToast === 'function') showToast('Build at least one line first.'); return; }
    var ok = function () { if (typeof showToast === 'function') showToast('Copied. Paste your lines into your Group Doc (Ctrl+V).', 5000); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, function () { window.prompt('Copy your lines (Ctrl+C):', text); });
    else window.prompt('Copy your lines (Ctrl+C):', text);
  };

  /* The paper sheet matches the screen: frames with blanks and a word bank at
     Quick, starters at Clear, the question and ruled lines at Full and Deep. */
  window.printMyLines = function () {
    var st = load();
    var bank = currentBank();
    var level = helpLevel(st);
    syncVoices(st);
    var voices = voiceNames(st);
    var h = ['<h1>My Lines' + (voices ? ': ' + esc(voices) : '') + '</h1>',
      '<p class="fr-names"><strong>Name:</strong> ' + (st.name ? esc(st.name) : '<span class="fr-blank"></span>') +
      ' &nbsp; <strong>Podcast:</strong> ' + esc(($('podcastName') && $('podcastName').value) || '') + '</p>'];
    myBeats(st).forEach(function (row) {
      if (!row.beats.length) return;
      h.push('<h2>' + row.part.name + ' <span style="font-weight:400">(' + row.part.time + ')</span></h2>');
      row.beats.forEach(function (b) {
        var kind = KINDS[BEAT_KIND[b[0]]];
        if (!kind) return;
        var g = C.guideFor(b[0]);
        var inner = '<p><strong>' + esc(b[1]) + '</strong> · ' + esc(C.voiceLabel(b[2]).name) + '</p><p>' + esc(kind.ask) + ' Aim for ' + goal(g.target) + '.</p>';
        if (level === 'mostSupport') {
          var words = {};
          kind.frames.forEach(function (f, fi) {
            var parts = parse(f, fi, bank);
            inner += '<p class="fr-frame">' + parts.map(function (p) {
              if (p.t != null) return esc(p.t);
              if (p.slot !== 'text') options(bank, p.slot).slice(0, 3).forEach(function (o) { words[o] = 1; });
              return '<span class="fr-blank"></span>';
            }).join('') + '</p>';
          });
          var wl = Object.keys(words);
          if (wl.length) inner += '<p class="fr-bank"><strong>Word bank:</strong> ' + wl.map(esc).join(' · ') + '</p>';
        } else if (level === 'someSupport' && g.starter) {
          inner += '<p class="fr-help"><strong>Stuck?</strong> <em>' + esc(g.starter.replace(/[.\s]+$/, '')) + '…</em></p>';
        } else if (level === 'challenge') {
          inner += '<p class="fr-help">' + esc(STRETCH[row.part.radio]) + '</p>';
        }
        var lines = level === 'mostSupport' ? 2 : C.linesFor(g.target);
        var ruled = '';
        for (var i = 0; i < lines; i++) ruled += '<span class="fr-line"></span>';
        h.push('<div class="fr-box">' + inner + '<div class="fr-lines">' + ruled + '</div></div>');
      });
    });
    C.printSheet('My Lines', h.join('\n'));
  };

  /* ---------------------------------------------------------------- hook in */
  var prevOnStep = window.crewOnStep;
  window.crewOnStep = function (n) {
    if (prevOnStep) prevOnStep(n);
    if (n === 9) render();
  };
  window.RV_LINES = { KINDS: KINDS, BEAT_KIND: BEAT_KIND, assemble: assemble, parse: parse, render: render };
  wire();
})();

/* Listen and Font: the reader tools, on every screen of the script builder.

   COPIED FROM colonial-unrest/reader-tools.js (Oct 2026), which was itself copied
   from ams-planning/reader-tools.js. Changes 1-5 are colonial-unrest's, kept here;
   6-10 are this site's. Each is marked "ADAPTED" below so the copies can be compared:
     1. Reads every visible block on the current screen (headings, paragraphs,
        list items, labels, legends, summaries), not only the reading.
     2. Each block is read in its own language (the nearest lang attribute).
     3. READER_TOOLS.reset() stops reading and forgets the sentence list; the
        builder calls it whenever it changes step or reading level.
     4. Text size zooms the page area, whose styles mix px and em.
     5. Recordings (window.READER_AUDIO) are supported but this site has none yet,
        so Listen always uses the computer voice.
     6. Lexend and OpenDyslexic are bundled in fonts/ (fonts/fonts.css). Nothing
        is loaded from Google Fonts: school filters block it, and a blocked font
        falls back silently.
     7. The chosen face applies to the whole page, header included (the header
        here is three buttons, which have room to wrap).
     8. Wide spacing also opens up the writing boxes, not only the reading.
     9. The Font panel also holds Light / Dark, the site's existing theme setting
        (localStorage "rvTheme"), so the header needs no separate theme button.
    10. The panel opens as a dropdown under its button, and Escape or a click
        outside closes it.

   It needs one element on the page, <div id="rtools"></div>, where the buttons go,
   and reads every block inside elements marked data-listen (crew.js marks the
   wizard steps and the reading drawer). Blocks inside data-no-listen are skipped.

   LISTEN
   The browser's own speech (speechSynthesis), one sentence at a time, with the
   sentence being read highlighted. The highlight uses the CSS Custom Highlight API,
   which paints a Range without touching the DOM -- wrapping every sentence in a
   span would break the vocabulary pop-ups inside the paragraphs, and would be a
   second copy of the text for Translate to trip over. Where the API is missing the
   whole paragraph is marked instead.

   Sentences are spoken one utterance each, not a paragraph at a time: Chrome stops
   a long utterance partway through on some voices, and one sentence per utterance
   is also what makes "click a paragraph to jump there" and the highlight exact.
   Pause is a cancel that remembers where it was, because speechSynthesis.pause()
   is unreliable with Chrome's network voices; Resume re-reads that sentence.

   RECORDED AUDIO
   If window.READER_AUDIO maps a part's heading id to {src, cues}, the voice menu
   offers "Mr. B" and that part plays the recording instead, highlighting by the
   cue times (seconds, one per sentence, in the page's own sentence order). Parts
   with no recording fall back to the computer voice, so a half-recorded reading
   still plays straight through. (colonial-unrest's record.html makes them; this
   site has none yet.)

   FONT
   Typeface, size and spacing, saved per browser. The menu says "Font", not
   "dyslexia": dyslexia typefaces show no reading benefit in the research (pooled
   g = -0.04 over 15 studies), so this is a comfort preference, and labelling it as
   an accommodation would invite it to stand in for one. The spacing setting widens
   words, lines and paragraphs in the reading only.

   Every storage access is wrapped: localStorage throws in private windows and
   comes back empty after a clear, and the page has to work either way. */
(function () {
  'use strict';
  var PREF_KEY = 'rtools:prefs';
  var LANG = (document.documentElement.lang || 'en').toLowerCase();
  var ES = LANG.indexOf('es') === 0;
  var T = ES ? {
    listen: 'Escuchar', pause: 'Pausa', resume: 'Seguir', stop: 'Parar',
    font: 'Letra', speed: 'Velocidad', voice: 'Voz', computer: 'Computadora',
    teacher: 'Mr. B', size: 'Tamaño', spacing: 'Espacio', normal: 'Normal',
    wide: 'Amplio', none: 'Este navegador no puede leer en voz alta.',
    tip: 'Mientras escuchas, toca un párrafo para saltar allí.'
  } : {
    listen: 'Listen', pause: 'Pause', resume: 'Resume', stop: 'Stop',
    font: 'Font', speed: 'Speed', voice: 'Voice', computer: 'Computer',
    teacher: 'Mr. B', size: 'Size', spacing: 'Spacing', normal: 'Normal',
    wide: 'Wide', none: 'This browser cannot read aloud.',
    tip: 'While it reads, click any paragraph to jump there.'
  };

  var FONTS = [
    { id: 'atkinson', label: 'Atkinson',
      family: "'Atkinson Hyperlegible Next','Atkinson Hyperlegible',Georgia,serif" },
    /* ADAPTED (6): bundled, no css URL. */
    { id: 'lexend', label: 'Lexend', family: "'Lexend',system-ui,sans-serif" },
    { id: 'opendyslexic', label: 'OpenDyslexic', family: "'OpenDyslexic',sans-serif" },
    { id: 'verdana', label: 'Verdana', family: 'Verdana,Tahoma,sans-serif' }
  ];

  /* ------------------------------------------------------------ prefs */
  function loadPrefs() {
    try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function savePrefs(p) {
    try { localStorage.setItem(PREF_KEY, JSON.stringify(p)); } catch (e) {}
  }
  var prefs = loadPrefs();

  function fontById(id) {
    for (var i = 0; i < FONTS.length; i++) if (FONTS[i].id === id) return FONTS[i];
    return FONTS[0];
  }
  var loadedCss = {};
  function loadFontCss(f) {
    if (!f.css || loadedCss[f.id]) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = f.css;
    document.head.appendChild(l);
    loadedCss[f.id] = true;
  }
  function applyPrefs() {
    var f = fontById(prefs.font);
    loadFontCss(f);
    var root = document.documentElement;
    root.style.setProperty('--rt-font', f.family);
    root.setAttribute('data-rt-font', f.id);
    /* An attribute and a screen-only rule, never root.style.fontSize: an inline
       size beats the print stylesheet's 11pt, and the first version printed every
       page at screen size -- a page longer, silently. */
    root.setAttribute('data-rt-size', String(prefs.size | 0));
    root.setAttribute('data-rt-spacing', prefs.wide ? 'wide' : 'normal');
  }

  /* ADAPTED (9): the site's light/dark setting, shared with the inline script in
     index.html's head that applies it before first paint. */
  function theme() { return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'; }
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('rvTheme', t); } catch (e) {}
  }

  /* ------------------------------------------------------------ styles */
  /* Not called CSS: that would shadow window.CSS, and CSS.highlights with it --
     which is how the first version silently fell back to marking whole paragraphs. */
  var STYLE = [
    /* ADAPTED (6): the @font-face rules live in fonts/fonts.css. */
    /* ADAPTED (7): the whole page takes the chosen face. Form controls don't
       inherit fonts by default, so they are named too. */
    'html[data-rt-font] body, html[data-rt-font] :is(button,input,select,textarea,h1,h2,h3,h4,h5,.btn){font-family:var(--rt-font) !important;}',
    /* ADAPTED (4): sizes 1 and 2 zoom the page area on screen only. */
    '@media screen{html[data-rt-size="1"] :is(.container,.reading-drawer-panel,.wrap){zoom:1.12;}html[data-rt-size="2"] :is(.container,.reading-drawer-panel,.wrap){zoom:1.25;}}',
    /* WCAG 2.2 SC 1.4.12's figures (letters .12em, words .16em, paragraphs 2x) are
       what a page must SURVIVE, not a comfortable setting -- at .12em an already-wide
       face like OpenDyslexic came apart into single letters. Words and lines get the
       full amount, letters a third. */
    'html[data-rt-spacing="wide"] [data-listen] :is(p,li,dd,.reading-body){line-height:1.95;letter-spacing:.04em;word-spacing:.16em;}',
    'html[data-rt-spacing="wide"] [data-listen] :is(p,li){margin-bottom:1.2em;}',
    /* ADAPTED (8) */
    'html[data-rt-spacing="wide"] :is(textarea,input[type="text"]){line-height:1.9;letter-spacing:.04em;word-spacing:.16em;}',
    '#rtools{display:flex;flex-wrap:wrap;gap:8px;align-items:center;position:relative;}',
    '.rt-btn{font:inherit;font-size:16px;font-weight:700;min-height:44px;padding:6px 14px;cursor:pointer;',
    '  border:2px solid var(--hdr-edge,#b8ad97);border-radius:8px;background:transparent;color:var(--hdr-ink,#fffaf0);',
    '  display:inline-flex;align-items:center;gap:8px;letter-spacing:normal;word-spacing:normal;}',
    '.rt-btn:hover{border-color:var(--gold);}',
    '.rt-btn:focus-visible{outline:3px solid var(--focus-on-dark);outline-offset:2px;}',
    '.rt-btn.rt-primary{background:var(--gold);border-color:var(--gold);color:#1a1208;}',
    '.rt-btn svg{width:1.05em;height:1.05em;flex:none;}',
    /* ADAPTED (10): a dropdown under the button. */
    '.rt-panel{position:absolute;right:0;top:calc(100% + 8px);z-index:300;width:min(340px,calc(100vw - 32px));',
    '  border:1.5px solid var(--line);border-radius:12px;background:var(--surface);color:var(--ink);box-shadow:var(--shadow);',
    '  padding:12px 14px;display:none;letter-spacing:normal;word-spacing:normal;line-height:1.5;}',
    '.rt-panel.rt-open{display:block;}',
    /* On a narrow screen the buttons sit at the left, so a right-anchored panel
       would hang off the screen: pin it to the viewport instead. */
    '@media (max-width:640px){.rt-panel{position:fixed;left:12px;right:12px;top:12px;width:auto;max-height:calc(100vh - 24px);overflow:auto;}}',
    '.rt-row{display:grid;grid-template-columns:max-content 1fr;gap:6px 10px;align-items:center;margin:0 0 10px;}',
    '.rt-row:last-child{margin:0;}',
    '.rt-opts{display:flex;flex-wrap:wrap;gap:6px;}',
    '.rt-lab{font-size:15px;font-weight:700;color:var(--ink);}',
    '.rt-opt{font:inherit;font-size:15px;min-height:40px;padding:4px 10px;cursor:pointer;',
    '  border:1.5px solid var(--edge,#74674f);border-radius:8px;background:var(--surface);color:var(--ink);}',
    '.rt-opt[aria-pressed="true"]{border:2px solid var(--ink);background:var(--surface-2);font-weight:800;}',
    '.rt-opt:focus-visible{outline:3px solid var(--focus);outline-offset:2px;}',
    '.rt-note{font-size:14px;color:var(--muted);margin:8px 0 0;}',
    /* The player floats while reading so Pause is reachable wherever the reader
       has scrolled. */
    '.rt-player{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:400;',
    '  display:none;gap:8px;align-items:center;flex-wrap:wrap;justify-content:center;',
    '  background:var(--surface);color:var(--ink);border:2px solid var(--ink);border-radius:12px;',
    '  padding:8px 10px;box-shadow:0 6px 24px rgba(0,0,0,.25);max-width:calc(100vw - 24px);',
    '  letter-spacing:normal;word-spacing:normal;line-height:1.3;}',
    '.rt-player.rt-on{display:flex;}',
    '.rt-player .rt-btn{color:var(--ink);border-color:var(--edge,#74674f);}',
    '.rt-player .rt-btn.rt-primary{background:var(--ink);border-color:var(--ink);color:var(--surface);}',
    '.rt-player select{font:inherit;font-size:15px;min-height:40px;border:1.5px solid var(--edge,#74674f);',
    '  border-radius:8px;background:var(--surface);color:var(--ink);padding:0 6px;}',
    '.rt-tip{font-size:14px;color:var(--muted);flex-basis:100%;text-align:center;}',
    '::highlight(rt-sent){background-color:#ffe28a;color:#111;}',
    '.rt-cur{background:#fff3c4;color:#111;border-radius:4px;}',
    '.rt-playing [data-listen] p,.rt-playing [data-listen] h3{cursor:pointer;}',
    '@media print{#rtools,.rt-player{display:none !important;}}'
  ].join('\n');

  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 6h12v12H6z"/></svg>',
    font: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9.6 4h2.2l5.6 15h-2.3l-1.5-4.1H7.8L6.3 19H4zm-1.1 9h4.9L11 6.6z"/></svg>'
  };

  /* ------------------------------------------------------------ sentences */
  var BLOCKS = 'h1,h2,h3,h4,p,li,legend,label,summary,blockquote'; /* ADAPTED (1) */

  /* Every readable block inside the data-listen containers, in page order, each
     split into sentences with character offsets into its text. */
  function collect() {
    var out = [];
    var roots = document.querySelectorAll('[data-listen]');
    for (var r = 0; r < roots.length; r++) {
      var els = roots[r].querySelectorAll(BLOCKS);
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        /* Skip what crew.js marks as noise (word banks, link lists, form grids)
           and screen-reader-only text, which would be read twice. */
        if (el.closest('[data-no-listen], .sr-only, [inert], [aria-hidden="true"]')) continue;
        /* ADAPTED (1): skip hidden blocks (closed panels) and blocks nested in
           another block, which is read whole. */
        if (!el.getClientRects().length) continue;
        var outer = el.parentElement && el.parentElement.closest(BLOCKS);
        if (outer && roots[r].contains(outer)) continue;
        var text = el.textContent;
        if (!text.replace(/\s/g, '')) continue;
        var langEl = el.closest('[lang]');                              /* ADAPTED (2) */
        var lang = ((langEl && langEl.getAttribute('lang')) || LANG).toLowerCase();
        var skip = foreignSpans(el, lang);
        var sents = split(text, lang);
        for (var s = 0; s < sents.length; s++) {
          var said = spoken(text, sents[s][0], sents[s][1], skip);
          if (!said) continue;
          out.push({ el: el, start: sents[s][0], end: sents[s][1],
                     text: said, part: partOf(el), lang: lang });
        }
      }
    }
    return out;
  }

  /* Character ranges, within el's text, of any descendant marked as another
     language. The Spanish page prints each heading's English beside it, and a
     Spanish voice reading "(What the Columbian Exchange was)" is noise. Words in
     brackets inside a sentence are plain text and are still read. */
  function foreignSpans(el, base) {
    base = base || LANG;
    var out = [];
    var marked = el.querySelectorAll('[lang]');
    if (!marked.length) return out;
    var tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var pos = 0, node;
    while ((node = tw.nextNode())) {
      var host = node.parentElement.closest('[lang]');
      var len = node.nodeValue.length;
      if (host && el.contains(host) && host !== el &&
          host.getAttribute('lang').toLowerCase().split('-')[0] !== base.split('-')[0]) {
        out.push([pos, pos + len]);
      }
      pos += len;
    }
    return out;
  }
  function spoken(text, a, b, skip) {
    if (!skip.length) return text.slice(a, b).trim();
    var said = '';
    for (var i = a; i < b; i++) {
      var inside = false;
      for (var k = 0; k < skip.length; k++) if (i >= skip[k][0] && i < skip[k][1]) { inside = true; break; }
      if (!inside) said += text.charAt(i);
    }
    return said.replace(/\s+/g, ' ').trim();
  }

  function split(text, lang) {
    var res = [];
    if (window.Intl && Intl.Segmenter) {
      var seg = new Intl.Segmenter(lang || LANG, { granularity: 'sentence' });
      var it = seg.segment(text)[Symbol.iterator](), n;
      while (!(n = it.next()).done) {
        var a = n.value.index, b = a + n.value.segment.length;
        if (text.slice(a, b).replace(/\s/g, '')) res.push([a, b]);
      }
      return res;
    }
    var re = /[^.!?]+[.!?]*["”’)]*\s*/g, m;
    while ((m = re.exec(text))) {
      if (m[0].replace(/\s/g, '')) res.push([m.index, m.index + m[0].length]);
      if (!m[0]) re.lastIndex++;
    }
    return res.length ? res : [[0, text.length]];
  }

  /* The part a block belongs to, i.e. which recording covers it. Parts are the
     h3 sections. A region's h2 title opens the first section under it, so a
     recording of "The land and the weather" starts with "New England Colonies"
     rather than that title needing a four-second file of its own. */
  function partOf(el) {
    /* ADAPTED (5): the activity names a recording's text outright. */
    var named = el.closest('[data-audio-part]');
    if (named) return named.getAttribute('data-audio-part');
    var heads = document.querySelectorAll('[data-listen] h2, [data-listen] h3[id]');
    var id = '', pendingH2 = false;
    for (var i = 0; i < heads.length; i++) {
      var h = heads[i];
      var before = h === el || (h.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING);
      if (!before && !pendingH2) break;
      if (h.tagName === 'H2') { pendingH2 = true; continue; }
      if (pendingH2 || before) { id = h.id; pendingH2 = false; if (!before) break; }
    }
    return id;
  }

  /* A Range over [start, end) of an element's text, across its text nodes. */
  function rangeFor(el, start, end) {
    var range = document.createRange();
    var tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var pos = 0, node, set = false;
    while ((node = tw.nextNode())) {
      var len = node.nodeValue.length;
      if (!set && start < pos + len) { range.setStart(node, start - pos); set = true; }
      if (set && end <= pos + len) { range.setEnd(node, end - pos); return range; }
      pos += len;
    }
    if (set) range.setEndAfter(el.lastChild || el);
    else range.selectNodeContents(el);
    return range;
  }

  var HAS_HL = !!(window.CSS && CSS.highlights && window.Highlight);
  var markedEl = null;
  function mark(item) {
    clearMark();
    if (!item) return;
    if (HAS_HL) CSS.highlights.set('rt-sent', new Highlight(rangeFor(item.el, item.start, item.end)));
    else { item.el.classList.add('rt-cur'); markedEl = item.el; }
    var r = item.el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < 70 || r.bottom > vh - 110) {
      item.el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }
  function clearMark() {
    if (HAS_HL) CSS.highlights.delete('rt-sent');
    if (markedEl) { markedEl.classList.remove('rt-cur'); markedEl = null; }
  }

  /* ------------------------------------------------------------ voices */
  var synth = window.speechSynthesis;
  /* ADAPTED (2): one best voice per language, looked up when first needed. */
  var voices = {};
  /* Voices that failed or went silent on this device, by voiceURI. The online
     voices (Google, Microsoft "Online (Natural)") stream from a server; a school
     filter or a bad connection blocks them, and Chrome then errors or simply never
     starts, so the reading ran to the end without a sound. A voice that does that
     is dropped and the sentence is read again with the next best (usually the
     device's own, offline) voice. */
  var badVoices = {};
  function voiceFor(lang) {
    var want = (lang || LANG).split('-')[0];
    if (!(want in voices)) voices[want] = pickVoice(want);
    return voices[want];
  }
  function dropVoice(v) {
    badVoices[v.voiceURI || v.name] = true;
    voices = {};
  }
  function pickVoice(want) {
    if (!synth) return null;
    var vs = synth.getVoices(), best = null, score = -1;
    for (var i = 0; i < vs.length; i++) {
      var v = vs[i], l = (v.lang || '').toLowerCase().replace('_', '-');
      if (l.split('-')[0] !== want) continue;
      if (badVoices[v.voiceURI || v.name]) continue;
      var s = 1;
      if (/natural|online|neural/i.test(v.name)) s += 4;
      if (/google/i.test(v.name)) s += 3;
      if (want === 'en' && l === 'en-us') s += 2;
      if (want === 'es' && (l === 'es-us' || l === 'es-mx')) s += 2;
      if (want === 'pt' && l === 'pt-br') s += 2;
      if (want === 'zh' && (l === 'zh-cn' || l === 'cmn-hans-cn')) s += 2;
      if (v.localService === false) s += 1;
      if (s > score) { score = s; best = v; }
    }
    return best;
  }
  if (synth && synth.addEventListener) synth.addEventListener('voiceschanged', function () { voices = {}; });

  /* ------------------------------------------------------------ player */
  var AUDIO = window.READER_AUDIO || {};
  var hasRec = false;
  for (var k in AUDIO) if (Object.prototype.hasOwnProperty.call(AUDIO, k)) { hasRec = true; break; }
  /* ADAPTED (5): a recording made for a different version of the text (n, the
     sentence count it was cued for, no longer matches) is skipped, so a later
     edit to a reading falls back to the computer voice instead of drifting. */
  function recFor(part) {
    var rec = AUDIO[part];
    if (!rec) return null;
    if (typeof rec.n === 'number' && partItems(part).length !== rec.n) return null;
    return rec;
  }

  var items = [], idx = 0, playing = false, token = 0;
  /* Held here so the browser can't garbage-collect the utterance mid-sentence
     (Chrome and Safari then never fire onend and the reading stalls). */
  var utter = null, startTimer = 0;
  var START_WAIT = 6000;
  var rate = +prefs.rate || 1;
  var useRec = hasRec && prefs.voice !== 'computer';
  var audio = null, audioPart = '';

  function speakFrom(i) {
    token++;
    var my = token;
    clearTimeout(startTimer);
    if (synth) synth.cancel();
    if (audio) audio.pause();
    if (i >= items.length) { stop(); return; }
    idx = i;
    playing = true;
    document.documentElement.classList.add('rt-playing');
    var it = items[i];
    if (useRec && recFor(it.part)) { playRecording(it.part, i, my); return; }
    mark(it);
    render();
    if (!synth) { stop(); return; }
    var u = utter = new SpeechSynthesisUtterance(it.text);
    var voice = voiceFor(it.lang);
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : it.lang;
    u.rate = rate;
    var started = false;
    /* A voice that fails, or never starts, is swapped out and this sentence tried again. */
    function voiceFailed() {
      if (my !== token || !playing) return;
      if (voice) { dropVoice(voice); speakFrom(idx); }
      else speakFrom(idx + 1);
    }
    u.onstart = function () { started = true; clearTimeout(startTimer); };
    u.onend = function () {
      if (my !== token || !playing) return;
      /* Some Chrome network voices "end" at once without speaking when blocked. */
      if (!started && voice && voice.localService === false) { voiceFailed(); return; }
      speakFrom(idx + 1);
    };
    u.onerror = function (e) {
      if (my !== token) return;
      var err = e && e.error;
      if (err === 'interrupted' || err === 'canceled') return;
      /* Speech isn't allowed yet (iPad/iPhone before a tap): stop rather than skip
         through every sentence; the next tap on Listen starts it. */
      if (err === 'not-allowed') { pause(); return; }
      if (voice && !started) { voiceFailed(); return; }
      speakFrom(idx + 1);
    };
    /* Chrome can be left paused (another tab, a sleep), which queues speech silently. */
    if (synth.paused) synth.resume();
    synth.speak(u);
    if (voice) startTimer = setTimeout(function () { if (!started) voiceFailed(); }, START_WAIT);
  }

  /* The item indexes in a part, in order. A part need not be one unbroken run:
     a block outside it (read by the computer voice) can sit between its blocks. */
  function partItems(part) {
    var out = [];
    for (var j = 0; j < items.length; j++) if (items[j].part === part) out.push(j);
    return out;
  }

  /* One recording per part. Sentence n of the part starts at cues[n]. */
  function playRecording(part, i, my) {
    var rec = AUDIO[part];
    if (!audio) {
      audio = new Audio();
      audio.addEventListener('timeupdate', onTime);
      audio.addEventListener('ended', function () {
        if (!playing) return;
        var own = partItems(audioPart);
        speakFrom(own.length ? own[own.length - 1] + 1 : idx + 1);
      });
    }
    if (audioPart !== part) { audio.src = rec.src; audioPart = part; }
    audio.playbackRate = rate;
    var cue = rec.cues[partItems(part).indexOf(i)];
    audio.currentTime = typeof cue === 'number' ? cue : 0;
    mark(items[i]);
    render();
    var pr = audio.play();
    if (pr && pr.catch) pr.catch(function () {
      if (my !== token) return;
      /* The file failed or the browser blocked it: read this part aloud instead. */
      delete AUDIO[part];
      speakFrom(i);
    });
  }
  function onTime() {
    if (!playing || !audio || !AUDIO[audioPart] || !items[idx]) return;
    var cues = AUDIO[audioPart].cues, t = audio.currentTime;
    var own = partItems(audioPart), w = 0;
    for (var c = 0; c < cues.length; c++) if (cues[c] <= t + 0.05) w = c;
    var j = own[w];
    if (j !== undefined && j !== idx) { idx = j; mark(items[j]); }
  }

  function pause() {
    playing = false;
    token++;
    clearTimeout(startTimer);
    if (synth) synth.cancel();
    if (audio) audio.pause();
    document.documentElement.classList.remove('rt-playing');
    render();
  }
  function stop() {
    pause();
    clearMark();
    idx = 0;
    if (player) player.classList.remove('rt-on');
    render();
  }

  /* ------------------------------------------------------------ UI */
  function btn(cls, html, label) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'rt-btn ' + (cls || '');
    b.innerHTML = html;
    if (label) b.setAttribute('aria-label', label);
    return b;
  }

  var host, listenBtn, fontBtn, panel, player, ppBtn, stopBtn, speedSel, voiceSel;

  function render() {
    if (!listenBtn) return;
    var active = player.classList.contains('rt-on');
    var word = playing ? T.pause : (active ? T.resume : T.listen);
    listenBtn.innerHTML = (playing ? ICON.pause : ICON.play) + '<span>' + word + '</span>';
    listenBtn.setAttribute('aria-label', word);
    ppBtn.innerHTML = (playing ? ICON.pause : ICON.play) + '<span>' + (playing ? T.pause : T.resume) + '</span>';
  }

  function toggle() {
    if (playing) { pause(); return; }
    if (!items.length) items = collect();
    if (!items.length) return;
    player.classList.add('rt-on');
    speakFrom(idx);
  }

  function optionRow(label, opts, current, onPick) {
    var row = document.createElement('div');
    row.className = 'rt-row';
    row.setAttribute('role', 'group');
    row.setAttribute('aria-label', label);
    var lab = document.createElement('span');
    lab.className = 'rt-lab'; lab.textContent = label;
    row.appendChild(lab);
    var buttons = [];
    var wrap = document.createElement('div');                     /* ADAPTED (10) */
    wrap.className = 'rt-opts';
    row.appendChild(wrap);
    opts.forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'rt-opt';
      b.textContent = o.label;
      if (o.family) b.style.fontFamily = o.family;
      b.setAttribute('aria-pressed', String(o.value === current));
      b.addEventListener('click', function () {
        buttons.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        onPick(o.value);
      });
      buttons.push(b);
      wrap.appendChild(b);
    });
    return row;
  }

  function build() {
    host = document.getElementById('rtools');
    if (!host) return;
    var st = document.createElement('style');
    st.textContent = STYLE;
    document.head.appendChild(st);
    applyPrefs();

    listenBtn = btn('rt-primary', '');
    fontBtn = btn('', ICON.font + '<span>' + T.font + '</span>');
    fontBtn.setAttribute('aria-expanded', 'false');
    fontBtn.setAttribute('aria-controls', 'rt-panel');
    host.appendChild(listenBtn);
    host.appendChild(fontBtn);

    panel = document.createElement('div');
    panel.className = 'rt-panel'; panel.id = 'rt-panel';
    panel.appendChild(optionRow(T.font, FONTS.map(function (f) {
      return { label: f.label, value: f.id, family: f.family };
    }), fontById(prefs.font).id, function (v) { prefs.font = v; savePrefs(prefs); applyPrefs(); }));
    panel.appendChild(optionRow(T.size, [
      { label: 'A', value: 0 }, { label: 'A+', value: 1 }, { label: 'A++', value: 2 }
    ], prefs.size | 0, function (v) { prefs.size = v; savePrefs(prefs); applyPrefs(); }));
    panel.appendChild(optionRow(T.spacing, [
      { label: T.normal, value: false }, { label: T.wide, value: true }
    ], !!prefs.wide, function (v) { prefs.wide = v; savePrefs(prefs); applyPrefs(); }));
    /* ADAPTED (9) */
    panel.appendChild(optionRow('Screen', [
      { label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }
    ], theme(), setTheme));
    var note = document.createElement('p');
    note.className = 'rt-note';
    note.textContent = 'Pick what is most comfortable to read. These stay set on this computer.';
    panel.appendChild(note);
    host.appendChild(panel);
    /* ADAPTED (10): a dropdown that closes on Escape or a click outside. */
    function setOpen(open) {
      panel.classList.toggle('rt-open', open);
      fontBtn.setAttribute('aria-expanded', String(open));
    }
    fontBtn.addEventListener('click', function () { setOpen(!panel.classList.contains('rt-open')); });
    document.addEventListener('click', function (e) {
      if (panel.classList.contains('rt-open') && !panel.contains(e.target) && !fontBtn.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('rt-open')) { setOpen(false); fontBtn.focus(); }
    });

    player = document.createElement('div');
    player.className = 'rt-player';
    player.setAttribute('role', 'region');
    player.setAttribute('aria-label', T.listen);
    ppBtn = btn('rt-primary', '');
    stopBtn = btn('', ICON.stop + '<span>' + T.stop + '</span>');
    speedSel = document.createElement('select');
    speedSel.setAttribute('aria-label', T.speed);
    [0.75, 0.9, 1, 1.15, 1.3].forEach(function (r) {
      var o = document.createElement('option');
      o.value = String(r); o.textContent = r + '×';
      if (r === rate) o.selected = true;
      speedSel.appendChild(o);
    });
    speedSel.addEventListener('change', function () {
      rate = +speedSel.value; prefs.rate = rate; savePrefs(prefs);
      if (audio) audio.playbackRate = rate;
      if (playing && !(useRec && recFor(items[idx].part))) speakFrom(idx);
    });
    player.appendChild(ppBtn);
    player.appendChild(stopBtn);
    player.appendChild(speedSel);
    if (hasRec) {
      voiceSel = document.createElement('select');
      voiceSel.setAttribute('aria-label', T.voice);
      [['teacher', T.teacher], ['computer', T.computer]].forEach(function (p) {
        var o = document.createElement('option');
        o.value = p[0]; o.textContent = p[1];
        if ((p[0] === 'teacher') === useRec) o.selected = true;
        voiceSel.appendChild(o);
      });
      voiceSel.addEventListener('change', function () {
        useRec = voiceSel.value === 'teacher';
        prefs.voice = useRec ? 'teacher' : 'computer'; savePrefs(prefs);
        if (playing) speakFrom(idx);
      });
      player.appendChild(voiceSel);
    }
    var tip = document.createElement('span');
    tip.className = 'rt-tip'; tip.textContent = T.tip;
    player.appendChild(tip);
    document.body.appendChild(player);

    if (!synth && !hasRec) {
      listenBtn.disabled = true;
      listenBtn.title = T.none;
    }
    listenBtn.addEventListener('click', toggle);
    ppBtn.addEventListener('click', toggle);
    stopBtn.addEventListener('click', stop);

    /* While the player is open, a click on a paragraph moves the reading there.
       Links and the vocabulary pop-ups keep their own behaviour. */
    document.addEventListener('click', function (e) {
      if (!player.classList.contains('rt-on')) return;
      if (e.target.closest('a, button, select, .vpop-bubble')) return;
      var root = e.target.closest('[data-listen]');
      if (!root || e.target.closest('input, textarea, label')) return;
      var block = e.target.closest(BLOCKS);
      if (!block || !root.contains(block)) return;
      if (!items.length) items = collect();
      for (var i = 0; i < items.length; i++) {
        if (items[i].el === block) { speakFrom(i); return; }
      }
    });
    window.addEventListener('pagehide', function () { if (synth) synth.cancel(); });
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  /* For tests and the console. */
  /* ADAPTED (3): the activity calls reset() each time it redraws a screen. */
  function reset() { if (player && (playing || player.classList.contains('rt-on'))) stop(); items = []; idx = 0; }
  /* ADAPTED (5): the teacher's recording page (record.html) uses mark/clearMark to
     highlight the sentence being recorded, from the same sentence list Listen uses. */
  window.READER_TOOLS = { split: split, collect: collect, reset: reset, mark: mark, clearMark: clearMark };
})();

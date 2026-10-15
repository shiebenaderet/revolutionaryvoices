/* Who says it? (3.4.0): the logic behind the cast on the Plan step, kept apart
   from the page so check-crew.js can test it in Node with every combination of
   styles and crew sizes.

   used     voice ids the chosen styles use, e.g. ['host', 'subject']
   byVoice  { voiceId: [box ids in episode order] }
   people   crew member numbers, e.g. [1, 2, 3]                                */
(function (root) {
  'use strict';

  /* Split it up for us: try every way of giving each voice one or more people
     (at most 3 voices and 4 people, so a few thousand options) and keep the
     fairest: everyone has lines, then the smallest gap between the busiest and
     the least busy person, then the fewest shared voices. A shared voice's boxes
     alternate, so its load splits as evenly as it can. */
  function loads(used, byVoice, people, pick) {
    var load = {};
    people.forEach(function (n) { load[n] = 0; });
    used.forEach(function (vid, i) {
      var who = pick[i], n = byVoice[vid].length;
      who.forEach(function (p, k) { load[p] += Math.floor(n / who.length) + (k < n % who.length ? 1 : 0); });
    });
    return load;
  }
  function split(used, byVoice, people) {
    var subsets = [];
    for (var mask = 1; mask < (1 << people.length); mask++) {
      var sub = people.filter(function (_, i) { return mask & (1 << i); });
      subsets.push(sub);
    }
    var best = null;
    (function walk(i, pick) {
      if (i === used.length) {
        var load = loads(used, byVoice, people, pick);
        var vals = people.map(function (n) { return load[n]; });
        var idle = vals.filter(function (v) { return !v; }).length;
        var spread = Math.max.apply(null, vals) - Math.min.apply(null, vals);
        var shared = pick.reduce(function (a, w) { return a + w.length - 1; }, 0);
        var multi = people.filter(function (n) { return pick.filter(function (w) { return w.indexOf(n) !== -1; }).length > 1; }).length;
        /* Two people voicing the one historical figure is odd on air, so avoid it
           unless every other split is off by five boxes or more. */
        var subjectShared = used.indexOf('subject') !== -1 && pick[used.indexOf('subject')].length > 1 ? 1 : 0;
        var cost = idle * 10000 + spread * 100 + subjectShared * 450 + shared * 10 + multi;
        if (!best || cost < best.cost) best = { cost: cost, pick: pick.slice() };
        return;
      }
      subsets.forEach(function (sub) {
        if (sub.length > byVoice[used[i]].length) return; /* nobody shares a part with no box left for them */
        pick.push(sub); walk(i + 1, pick); pick.pop();
      });
    })(0, []);
    var assign = {};
    used.forEach(function (vid, i) { assign[vid] = best ? best.pick[i] : []; });
    return assign;
  }

  /* Who says each box. A voice shared by two people alternates its boxes between
     them, so co-hosts each get lines and nobody writes the same box twice.
     who: { voiceId: [names] } -> { owners: { boxId: [name] }, boxes: { name: n }, open: [voiceId] } */
  function owners(used, byVoice, who, names) {
    var out = {}, boxes = {}, open = [];
    names.forEach(function (n) { boxes[n] = 0; });
    used.forEach(function (vid) {
      var w = who[vid] || [];
      if (!w.length) open.push(vid);
      byVoice[vid].forEach(function (id, k) {
        out[id] = w.length ? [w[k % w.length]] : [];
        if (w.length) boxes[w[k % w.length]] = (boxes[w[k % w.length]] || 0) + 1;
      });
    });
    return { owners: out, boxes: boxes, open: open };
  }

  var api = { split: split, owners: owners };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RV_CAST = api;
})(this);

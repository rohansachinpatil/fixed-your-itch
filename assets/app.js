(function () {
  "use strict";

  /* ── Data guard ── */
  var DATA = window.ITCH_ATLAS;
  if (!DATA || !Array.isArray(DATA.problems) || !DATA.problems.length) return;

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var CATEGORY_ORDER = Object.keys(DATA.categories).sort(function (a, b) {
    return DATA.categories[b] - DATA.categories[a] || a.localeCompare(b);
  });

  var state = { query: "", category: "All", sort: "rating" };
  var returnScroll = null;

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     HELPERS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function num(v, fb) { var n = Number(v); return Number.isFinite(n) ? n : fb; }
  function fmt(v) { var n = num(v, 0); return n % 1 === 0 ? String(n) : n.toFixed(1); }
  function byRank(a, b) { return a.rank - b.rank; }
  function rankLabel(r) { return String(r).padStart(3, "0"); }
  function sourceLabel(p) { return p.source === "platform" ? "Fix My Itch" : "Editorial pick"; }
  function scoreName(p) { return p.source === "platform" ? "itch score" : "founder score"; }

  function filteredProblems() {
    var q = state.query.trim().toLowerCase();
    var list = DATA.problems.filter(function (p) {
      if (state.category !== "All" && p.category !== state.category) return false;
      if (!q) return true;
      return [p.startup, p.title, p.pitch, p.description, p.who, p.category,
              (p.tags || []).join(" ")].join(" ").toLowerCase().indexOf(q) !== -1;
    });
    return list.sort(function (a, b) {
      if (state.sort === "startup")  return a.startup.localeCompare(b.startup) || byRank(a, b);
      if (state.sort === "category") return a.category.localeCompare(b.category) || byRank(a, b);
      if (state.sort === "score-asc")  return (num(a.rating,0) - num(b.rating,0)) || byRank(a,b);
      if (state.sort === "score-desc") return (num(b.rating,0) - num(a.rating,0)) || byRank(a,b);
      return byRank(a, b);
    });
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     MARQUEE (ticker behind scratch card)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function renderMarquee() {
    var el = $("#mq-track");
    if (!el) return;
    var text = "SCRATCH TO REVEAL ✱ ";
    el.textContent = text.repeat(10);
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     HERO STAMPS (scattered background)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /* Use top 7 startup names from the data as hero background stamps */
  function renderHeroStamps() {
    var wrap = $("#hero-stamps");
    if (!wrap) return;

    /* Pick 7 startup names across the rank range for variety */
    var pool = DATA.problems.slice().sort(byRank);
    var picks = [
      pool[0], pool[2], pool[5], pool[10], pool[18], pool[28], pool[40]
    ].filter(Boolean);

    /* [left%, top%, rotation-deg, width-vw, class] */
    var layout = [
      [-2, 20, -6, 26, "gy"],
      [70, 22, -11, 28, "dg"],
      [10, 76, -8,  30, "dg"],
      [54, 80, -4,  32, "gy"],
      [83, 55, -5,  22, "gy"],
      [30, -6,  5,  30, "dg"],
      [60, -4,  4,  28, "gy"]
    ];

    wrap.innerHTML = picks.map(function (p, i) {
      var l = layout[i] || layout[0];
      return (
        '<div class="st ' + l[4] + '" style="' +
          'left:' + l[0] + '%;' +
          'top:'  + l[1] + '%;' +
          '--r:'  + l[2] + 'deg;' +
          'width:' + l[3] + 'vw' +
        '">' + esc(p.startup) + '</div>'
      );
    }).join("");
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     SCRATCH CANVAS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function initScratch() {
    var c0 = $("#c0");
    var c1 = $("#c1");
    if (!c0 || !c1) return;

    var ctx1 = c1.getContext("2d");
    var dragging = false;
    var scratchDone = false;

    /* Determine pixel dimensions from container */
    function resize() {
      var parent = c0.closest(".sw-face");
      if (!parent) return;
      var rect = parent.getBoundingClientRect();
      var w = Math.floor(rect.width)  || 400;
      var h = Math.floor(rect.height) || 444;

      [c0, c1].forEach(function (c) { c.width = w; c.height = h; });

      paintRevealed(c0.getContext("2d"), w, h);

      ctx1.globalCompositeOperation = "source-over";
      paintScratch(ctx1, w, h);
      ctx1.globalCompositeOperation = "destination-out";
    }

    /* Bottom canvas — what gets revealed */
    function paintRevealed(ctx, w, h) {
      ctx.fillStyle = "#f4f4f2";
      ctx.fillRect(0, 0, w, h);

      /* Subtle vertical rule lines */
      ctx.fillStyle = "rgba(47,85,244,.06)";
      for (var x = 0; x < w; x += w / 10) {
        ctx.fillRect(Math.round(x), 0, 1, h);
      }

      /* Big number */
      ctx.fillStyle = "#2f55f4";
      ctx.textAlign = "center";
      ctx.font = "900 " + (w * .52) + "px Anton, Impact, sans-serif";
      ctx.fillText("143", w / 2, h * .40);

      /* Label below number */
      ctx.font = "700 " + (w * .10) + "px Anton, Impact, sans-serif";
      ctx.fillStyle = "#1a1a1a";
      ctx.fillText("STARTUP", w / 2, h * .57);
      ctx.fillText("BRIEFS", w / 2, h * .69);

      /* Sub label */
      ctx.font = "700 " + (w * .046) + "px Inter, sans-serif";
      ctx.fillStyle = "#aaa";
      ctx.fillText("INDIA'S PROBLEMS MAPPED", w / 2, h * .82);

      /* Hint */
      ctx.font = "600 " + (w * .038) + "px Inter, sans-serif";
      ctx.fillStyle = "#bbb";
      ctx.fillText("↓  SCROLL TO EXPLORE  ↓", w / 2, h * .92);
    }

    /* Top canvas — the scratchable surface */
    function paintScratch(ctx, w, h) {
      /* Blue base */
      ctx.fillStyle = "#2f55f4";
      ctx.fillRect(0, 0, w, h);

      /* Horizontal scan-line texture */
      ctx.fillStyle = "rgba(255,255,255,.045)";
      for (var y = 0; y < h; y += 18) {
        ctx.fillRect(0, y, w, 1);
      }

      /* "FIXED your ITCH" headline */
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.font = "900 " + (w * .16) + "px 'Archivo Black', Anton, sans-serif";
      ctx.fillText("FIXED", w / 2, h * .34);
      ctx.font = "italic 900 " + (w * .11) + "px 'Archivo Black', sans-serif";
      ctx.fillText("your", w / 2, h * .47);
      ctx.font = "900 " + (w * .18) + "px 'Archivo Black', Anton, sans-serif";
      ctx.fillText("ITCH", w / 2, h * .63);

      /* Instruction */
      ctx.font = "700 " + (w * .044) + "px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,.75)";
      ctx.fillText("✱  SCRATCH TO REVEAL  ✱", w / 2, h * .82);

      /* Razorpay attribution */
      ctx.font = "500 " + (w * .033) + "px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,.45)";
      ctx.fillText("143 solutions for Razorpay's Fix My Itch", w / 2, h * .91);
    }

    /* Scratch logic */
    function scratch(e) {
      if (!dragging || scratchDone) return;
      var r = c1.getBoundingClientRect();
      var cx = (e.clientX != null ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : null));
      var cy = (e.clientY != null ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : null));
      if (cx == null) return;
      ctx1.beginPath();
      ctx1.arc(cx - r.left, cy - r.top, r.width * .085, 0, Math.PI * 2);
      ctx1.fill();
    }

    function dismissIntro() {
      if (scratchDone) return;
      scratchDone = true;
      c1.classList.add("gone");
      var overlay = $("#intro-scratch-overlay");
      if (overlay) overlay.classList.add("dismissed");
      document.body.style.overflow = "";

      /* Reveal stats & animate pile after transition */
      setTimeout(function () {
        if (overlay) overlay.style.display = "none";
        var pile = $("#pile");
        if (pile && !pile.classList.contains("on")) pile.classList.add("on");
      }, 900);
    }

    function checkDone() {
      /* Sample pixels to check percentage cleared */
      var d = ctx1.getImageData(0, 0, c1.width, c1.height).data;
      var total = 0, cleared = 0;
      for (var i = 3; i < d.length; i += 160) { total++; if (d[i] < 50) cleared++; }
      if (cleared / total > 0.42 && !scratchDone) {
        dismissIntro();
      }
    }

    /* Event listeners */
    c1.addEventListener("pointerdown", function (e) {
      dragging = true;
      c1.setPointerCapture(e.pointerId);
      scratch(e);
    });
    c1.addEventListener("pointermove", scratch);
    c1.addEventListener("pointerup", function () { dragging = false; checkDone(); });
    c1.addEventListener("touchmove", function (e) { e.preventDefault(); scratch(e); }, { passive: false });

    var skipBtn = $("#skip-intro-btn");
    if (skipBtn) {
      skipBtn.addEventListener("click", function () {
        dismissIntro();
      });
    }

    /* If user already visited or is deep-linking to a brief, skip overlay */
    if (location.hash && location.hash.indexOf("#/brief/") === 0) {
      var overlay = $("#intro-scratch-overlay");
      if (overlay) overlay.style.display = "none";
      scratchDone = true;
    } else {
      /* Lock body scroll during intro overlay */
      document.body.style.overflow = "hidden";
    }

    /* Paint once fonts are ready */
    document.fonts.ready.then(resize);
    /* Also paint immediately as fallback */
    resize();
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     STATS (animated counters)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function animateCounter(el, target, ms) {
    var isDecimal = String(target).indexOf(".") !== -1;
    var targetNum = parseFloat(target);
    var start = performance.now();
    function step(now) {
      var p = Math.min((now - start) / ms, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var cur = eased * targetNum;
      el.textContent = isDecimal ? cur.toFixed(1) : Math.round(cur);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  function renderStats() {
    var wrap = $("#hero-stats");
    if (!wrap) return;

    var platform = DATA.problems.filter(function (p) { return p.source === "platform"; }).length;
    var editorial = DATA.problems.length - platform;
    var topScore = DATA.problems.reduce(function (m, p) { return Math.max(m, num(p.rating, 0)); }, 0);

    var items = [
      [DATA.problems.length, "Problems mapped"],
      [CATEGORY_ORDER.length,  "Sectors covered"],
      [platform,               "Platform rows"],
      [fmt(topScore),          "Top itch score"]
    ];

    wrap.innerHTML = items.map(function (s) {
      return '<div class="stat-cell"><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>';
    }).join("");

    /* Animate when stats row enters viewport */
    if (typeof IntersectionObserver === "undefined") return;
    var observed = false;
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !observed) {
        observed = true;
        $$(".stat-cell b", wrap).forEach(function (el) {
          var v = el.textContent;
          var n = parseFloat(v);
          if (!isNaN(n) && n > 1) animateCounter(el, v, 1100);
        });
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(wrap);
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     PILE — scattered category stamps
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /* Deterministic pseudo-random to avoid hydration shifts */
  function seededRng(seed) {
    var s = seed;
    return function () { s = s * 16807 % 2147483647; return (s - 1) / 2147483646; };
  }

  function renderPile() {
    var pile = $("#pile");
    if (!pile) return;

    var rng = seededRng(42);
    var colors = ["bl", "wt", "bl", "wt", "gy", "dg", "bl"];

    /* Use CATEGORY_ORDER + a few top startup names for variety */
    var labels = CATEGORY_ORDER.concat(
      DATA.problems.slice().sort(byRank).slice(0, 4).map(function (p) { return p.startup; })
    );

    pile.innerHTML = labels.map(function (label, i) {
      var c = colors[i % colors.length];
      var l = rng() * 86 - 4;      /* left % */
      var t = rng() * 90 - 6;      /* top % */
      var r = rng() * 48 - 24;     /* rotation deg */
      var w = 22 + rng() * 10;     /* width vw */
      var d = i * 0.055;           /* stagger delay */
      return (
        '<div class="st ' + c + '" style="' +
          'left:' + l.toFixed(1) + '%;' +
          'top:'  + t.toFixed(1) + '%;' +
          '--r:'  + r.toFixed(1) + 'deg;' +
          'width:' + w.toFixed(1) + 'vw;' +
          '--d:'  + d.toFixed(2) + 's' +
        '" aria-hidden="true">' + esc(label) + '</div>'
      );
    }).join("");

    /* Trigger animation when section enters viewport */
    if (typeof IntersectionObserver === "undefined") { pile.classList.add("on"); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { pile.classList.add("on"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(pile);
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     TOP 10 INTERACTIVE CARD DECK
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function renderDeck() {
    var deck = $("#deck");
    if (!deck) return;

    var top10 = DATA.problems.slice().sort(byRank).slice(0, 10);
    var colors = ["bl", "wt", "bl", "wt", "gy", "bl", "wt", "bl", "wt", "gy"];

    deck.innerHTML = top10.map(function (p, i) {
      var c = i % 2 ? "wt" : "bl";
      return (
        '<div class="st ' + c + '" data-id="' + esc(p.id) + '">' +
          '<small>' + esc(p.category) + '</small>' +
          '<span>' + esc(p.startup) + '</span>' +
          '<p class="card-pitch">' + esc(p.pitch) + '</p>' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-end;width:100%">' +
            '<span class="card-btn">Explore Brief →</span>' +
            '<big>' + String(i + 1).padStart(2, "0") + '</big>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    var cs = Array.prototype.slice.call(deck.children);
    var ord = top10.map(function (_, i) { return i; });
    var busy = 0;
    var sx = 0, dx = 0, dn = 0;
    var moved = false;

    function lay() {
      ord.forEach(function (id, p) {
        var e = cs[id];
        if (!e) return;
        e.style.zIndex = 20 - p;
        e.style.opacity = p > 5 ? 0 : 1;
        e.style.pointerEvents = p === 0 ? "auto" : "none";
        var rot = p ? (p % 2 ? 1 : -1) * p * 2.2 : 0;
        e.style.transform = "translate(" + (p * 9) + "px," + (p * 7) + "px) rotate(" + rot + "deg) scale(" + (1 - p * .03) + ")";
      });
      var dc = $("#dc");
      if (dc) dc.textContent = String(ord[0] + 1).padStart(2, "0") + " / 10";
    }

    function go(d, s) {
      if (busy) return;
      s = s || 1;
      busy = 1;
      if (d > 0) {
        var e = cs[ord[0]];
        if (!e) return;
        e.style.zIndex = 30;
        e.style.opacity = 0;
        e.style.transform = "translate(" + (s * window.innerWidth * .6) + "px,-30px) rotate(" + (s * 25) + "deg)";
        setTimeout(function () {
          ord.push(ord.shift());
          lay();
          busy = 0;
        }, 330);
      } else {
        ord.unshift(ord.pop());
        lay();
        setTimeout(function () { busy = 0; }, 300);
      }
    }

    deck.onpointerdown = function (e) {
      if (busy) return;
      sx = e.clientX;
      dx = 0;
      dn = 1;
      moved = false;
      deck.setPointerCapture(e.pointerId);
      if (cs[ord[0]]) cs[ord[0]].classList.add("d");
    };

    deck.onpointermove = function (e) {
      if (!dn || !cs[ord[0]]) return;
      dx = e.clientX - sx;
      if (Math.abs(dx) > 5) moved = true;
      cs[ord[0]].style.transform = "translate(" + dx + "px,0) rotate(" + (dx / 18) + "deg)";
    };

    var up = function () {
      if (!dn) return;
      dn = 0;
      if (cs[ord[0]]) cs[ord[0]].classList.remove("d");
      if (!moved) {
        // Simple tap / click on card opens the brief!
        var topCard = cs[ord[0]];
        var id = topCard && topCard.getAttribute("data-id");
        if (id) {
          location.hash = "#/brief/" + id;
          return;
        }
      }
      if (Math.abs(dx) > 80) {
        go(1, dx < 0 ? -1 : 1);
      } else {
        lay();
      }
    };

    deck.onpointerup = up;
    deck.onpointercancel = up;

    deck.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
        e.preventDefault();
        go(1, e.deltaX > 0 ? -1 : 1);
      }
    }, { passive: false });

    lay();

    var nx = $("#nx");
    var pv = $("#pv");
    if (nx) nx.onclick = function () { go(1, 1); };
    if (pv) pv.onclick = function () { go(-1); };
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     FILTER CHIPS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function renderChips() {
    var wrap = $("#category-chips");
    if (!wrap) return;

    var options = ["All"].concat(CATEGORY_ORDER);
    wrap.innerHTML = options.map(function (name) {
      var active = state.category === name;
      return (
        '<button type="button" class="chip" data-category="' + esc(name) +
        '" aria-pressed="' + active + '">' + esc(name) + '</button>'
      );
    }).join("");
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     LEDGER / LIST
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function renderList() {
    var list  = $("#brief-list");
    var empty = $("#empty-state");
    var cnt   = $("#result-count");
    var note  = $("#list-note");
    if (!list || !empty) return;

    var rows = filteredProblems();
    list.innerHTML = rows.map(function (p) {
      var rating   = num(p.rating, 0);
      var editorial = p.source === "editorial"
        ? '<span class="editorial-badge">Editorial</span>'
        : "";
      return (
        '<li class="brief-row">' +
        '<a href="#/brief/' + esc(p.id) + '">' +
          '<span>' +
            '<span class="row-startup-name">' + esc(p.startup) + editorial + '</span>' +
            '<span class="row-pitch">' + esc(p.pitch) + '</span>' +
            '<span class="row-rank">Rank ' + rankLabel(p.rank) + '</span>' +
          '</span>' +
          '<span class="sc">' + fmt(rating) + '</span>' +
          '<span class="tg">' + esc(p.category) + '</span>' +
        '</a></li>'
      );
    }).join("");

    empty.hidden = rows.length !== 0;
    list.hidden  = rows.length === 0;

    var platform = rows.filter(function (p) { return p.source === "platform"; }).length;
    var ed = rows.length - platform;
    if (cnt) cnt.textContent = rows.length + " brief" + (rows.length !== 1 ? "s" : "") + (state.category !== "All" ? " in " + state.category : "");
    if (note) note.textContent = ed ? platform + " platform · " + ed + " editorial" : platform + " platform";
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     BRIEF DETAIL
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function signalHtml(sig) {
    var v   = num(sig.value, 0);
    var max = num(sig.max, 10) || 10;
    var pct = Math.max(0, Math.min(100, (v / max) * 100));
    return (
      '<div class="signal">' +
        '<div class="signal-head"><span>' + esc(sig.label) + '</span>' +
          '<b>' + fmt(v) + (max === 10 ? '<span class="muted"> / 10</span>' : '') + '</b></div>' +
        '<div class="signal-bar"><i style="width:' + pct + '%"></i></div>' +
      '</div>'
    );
  }

  function navHtml(prev, next) {
    if (!prev && !next) return "";
    return (
      '<nav class="brief-nav" aria-label="More briefs">' +
        (prev
          ? '<a href="#/brief/' + esc(prev.id) + '"><span class="label">← Rank ' + prev.rank + '</span><b>' + esc(prev.startup) + '</b></a>'
          : '<span></span>') +
        (next
          ? '<a href="#/brief/' + esc(next.id) + '"><span class="label">Rank ' + next.rank + ' →</span><b>' + esc(next.startup) + '</b></a>'
          : '<span></span>') +
      '</nav>'
    );
  }

  function renderBrief(p) {
    var view = $("#brief-view");
    var home = $("#home-view");
    if (!view || !home) return;

    var ordered = DATA.problems.slice().sort(byRank);
    var idx  = ordered.findIndex(function (x) { return x.id === p.id; });
    var prev = idx > 0 ? ordered[idx - 1] : null;
    var next = idx > -1 && idx < ordered.length - 1 ? ordered[idx + 1] : null;

    var rating = num(p.rating, 0);
    var market = p.market || {};
    var signals   = (p.signals || []).map(signalHtml).join("");
    var tags      = (p.tags || []).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join("");
    var marketRows = [["Market", market.tam], ["Time to MVP", market.time], ["Starting capital", market.capital]]
      .filter(function (r) { return r[1]; })
      .map(function (r) { return '<div><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></div>'; }).join("");

    view.innerHTML =
      '<a class="back-link" href="#/" data-back>← All ' + DATA.problems.length + ' problems</a>' +
      '<div class="brief-head">' +
        '<div>' +
          '<div class="brief-kicker">' +
            '<span>Rank ' + rankLabel(p.rank) + ' of ' + DATA.problems.length + '</span>' +
            '<span class="dot"></span><span>' + esc(p.category) + '</span>' +
            '<span class="dot"></span><span>' + esc(sourceLabel(p)) + '</span>' +
            '<span class="dot"></span><span>' + esc(scoreName(p)) + ' ' + fmt(rating) + '</span>' +
          '</div>' +
          '<h1 class="brief-title">' + esc(p.title) + '</h1>' +
          '<div class="brief-startup">' +
            '<span class="label">The startup</span>' +
            '<strong>' + esc(p.startup) + '</strong>' +
            '<p>' + esc(p.pitch) + '</p>' +
          '</div>' +
        '</div>' +
        '<aside class="brief-score" aria-label="Rating">' +
          '<span class="score-label">' + esc(scoreName(p)) + '</span>' +
          '<div class="score-value"><b>' + fmt(rating) + '</b><span>/ 100</span></div>' +
          '<div class="score-bar"><i style="width:' + Math.max(0, Math.min(100, rating)) + '%"></i></div>' +
          '<p class="score-note">' + (p.source === "platform"
            ? "Published Fix My Itch rating. Sub-scores: severity, TAM, whitespace, frequency."
            : "Weighted founder score: pain 30 %, market 20 %, timing 15 %, feasibility 15 %, moat 10 %, revenue 10 %.") + '</p>' +
        '</aside>' +
      '</div>' +
      '<div class="brief-body">' +
        '<aside class="brief-aside" aria-label="Signals and market">' +
          (signals ? '<div class="aside-block"><span class="aside-label">Signals</span>' + signals + '</div>' : '') +
          (marketRows ? '<div class="aside-block"><span class="aside-label">At a glance</span><div class="aside-market">' + marketRows + '</div></div>' : '') +
          (tags ? '<div class="aside-block"><span class="aside-label">Tags</span><div class="aside-tags">' + tags + '</div></div>' : '') +
          '<div class="aside-block">' +
            '<div class="aside-actions">' +
              '<button type="button" data-copy>Copy link</button>' +
              '<button type="button" data-copy-brief>Copy brief as text</button>' +
            '</div>' +
          '</div>' +
        '</aside>' +
        '<article class="brief-body-main">' +
          '<section class="brief-section"><h2>The problem <span class="num">01</span></h2>' +
            '<p class="prose">' + esc(p.description) + '</p>' +
            (p.who ? '<p class="who-line"><strong>Who feels it:</strong> ' + esc(p.who) + '</p>' : '') +
          '</section>' +
          '<section class="brief-section"><h2>How you build it <span class="num">02</span></h2>' +
            '<div class="steps">' + p.solution.how.map(function (s) {
              return '<div class="step"><p>' + esc(s) + '</p></div>';
            }).join("") + '</div>' +
          '</section>' +
          '<section class="brief-section"><h2>The first version <span class="num">03</span></h2>' +
            '<ul class="mvp-list">' + p.solution.mvp.map(function (s) {
              return '<li>' + esc(s) + '</li>';
            }).join("") + '</ul>' +
          '</section>' +
          '<section class="brief-section"><h2>How it makes money <span class="num">04</span></h2>' +
            '<div class="model-grid">' +
              '<div class="model-cell"><span class="label">Model</span><p>' + esc(p.solution.model) + '</p></div>' +
              '<div class="model-cell price"><span class="label">Price</span><p>' + esc(p.solution.price) + '</p></div>' +
              '<div class="model-cell"><span class="label">Go to market</span><p>' + esc(p.solution.gtm) + '</p></div>' +
              '<div class="model-cell"><span class="label">Moat</span><p>' + esc(p.solution.moat) + '</p></div>' +
            '</div>' +
          '</section>' +
          '<section class="brief-section"><h2>What can go wrong <span class="num">05</span></h2>' +
            '<div class="risk-list">' + p.risks.map(function (r) {
              return '<div>' + esc(r) + '</div>';
            }).join("") + '</div>' +
          '</section>' +
          '<section class="brief-section"><h2>The verdict <span class="num">06</span></h2>' +
            '<blockquote class="verdict">' + esc(p.verdict) + '</blockquote>' +
          '</section>' +
        '</article>' +
      '</div>' +
      navHtml(prev, next) +
      '<p class="brief-disclaimer">Problem &amp; itch score: Fix My Itch by Razorpay. Not affiliated with Razorpay. ' +
        'Startup concept, build plan, pricing, risks and market notes: independent analysis by ' +
        '<a href="https://github.com/rohansachinpatil" target="_blank" rel="noopener noreferrer">rohansachinpatil</a>. ' +
        'Not investment advice.</p>';

    home.hidden = true;
    view.hidden = false;
    document.title = p.startup + " — " + p.title + " | FIXED your ITCH (Fix My Itch Solutions)";
    window.scrollTo(0, 0);
  }

  function showHome(restore) {
    var view = $("#brief-view");
    var home = $("#home-view");
    if (!view || !home) return;
    view.hidden = true;
    view.innerHTML = "";
    home.hidden = false;
    document.title = "FIXED your ITCH — 143 Startup Ideas & Solutions for Razorpay's Fix My Itch";
    if (restore && returnScroll != null) {
      window.scrollTo(0, returnScroll);
      returnScroll = null;
    }
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     ROUTING
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function route() {
    var hash  = location.hash || "";
    var match = hash.match(/^#\/brief\/([a-z0-9-]+)$/i);
    if (match) {
      var p = DATA.problems.filter(function (x) { return x.id === match[1]; })[0];
      if (p) { renderBrief(p); return; }
    }
    if (hash.indexOf("#/brief/") === 0) { location.hash = "#/"; return; }
    var wasDetail = !$("#brief-view").hidden;
    if (wasDetail) showHome(true);
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     COPY UTILS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function toast(msg) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = msg || "Done!";
    el.classList.add("show");
    setTimeout(function () { el.classList.remove("show"); }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function () { window.prompt("Copy:", text); });
    } else { window.prompt("Copy:", text); }
  }

  function briefAsText(p) {
    var m = p.market || {};
    return [
      p.startup + " — " + p.title,
      "Rank " + p.rank + " · " + p.category + " · " + scoreName(p) + " " + fmt(p.rating) + "/100",
      "", p.pitch, "",
      "THE PROBLEM", p.description,
      "", "WHO FEELS IT", p.who,
      "", "HOW YOU BUILD IT",
      p.solution.how.map(function (s, i) { return (i + 1) + ". " + s; }).join("\n"),
      "", "FIRST VERSION",
      p.solution.mvp.map(function (s) { return "- " + s; }).join("\n"),
      "", "MODEL: " + p.solution.model, "PRICE: " + p.solution.price,
      "GO TO MARKET: " + p.solution.gtm, "MOAT: " + p.solution.moat,
      "", "RISKS", p.risks.map(function (r) { return "- " + r; }).join("\n"),
      "", "MARKET: " + (m.tam||"") + " · MVP: " + (m.time||"") + " · Capital: " + (m.capital||""),
      "", "VERDICT", p.verdict,
      "", "— FIXED your ITCH (Fix My Itch Solutions) by rohansachinpatil — https://github.com/rohansachinpatil"
    ].join("\n");
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     EVENTS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  var sortDir = -1; /* -1 = desc, 1 = asc */

  function resetFilters() {
    state.query = ""; state.category = "All"; state.sort = "rating";
    var s = $("#search"); if (s) s.value = "";
    renderChips(); renderList();
  }

  function bindEvents() {
    /* Sort score toggle */
    var sortBtn = $("#sort-score-btn");
    if (sortBtn) {
      var toggle = function () {
        sortDir = sortDir === -1 ? 1 : -1;
        state.sort = sortDir === -1 ? "score-desc" : "score-asc";
        sortBtn.textContent = "SCORE " + (sortDir === -1 ? "↓" : "↑");
        renderList();
      };
      sortBtn.addEventListener("click", toggle);
      sortBtn.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    }

    /* Delegated clicks */
    document.addEventListener("click", function (e) {
      /* Category chip */
      var chip = e.target.closest("[data-category]");
      if (chip) {
        state.category = chip.getAttribute("data-category");
        renderChips(); renderList(); return;
      }

      /* Reset filters */
      if (e.target.closest("#reset-filters")) { resetFilters(); return; }

      /* Copy link */
      var copy = e.target.closest("[data-copy]");
      if (copy) { copyText(location.href); toast("Link Copied!"); return; }

      /* Copy brief */
      var copyBrief = e.target.closest("[data-copy-brief]");
      if (copyBrief) {
        var match = location.hash.match(/^#\/brief\/([a-z0-9-]+)$/i);
        var p = match && DATA.problems.filter(function (x) { return x.id === match[1]; })[0];
        if (p) { copyText(briefAsText(p)); toast("Brief Copied!"); }
        return;
      }

      /* Share button in footer */
      if (e.target.closest("#share-btn")) { copyText(location.href); toast("Link Copied!"); return; }

      /* Track scroll position before entering brief */
      var briefLink = e.target.closest(".brief-row a, .car-card");
      if (briefLink && $("#brief-view").hidden) { returnScroll = window.scrollY; }

      /* Nav links while in brief view */
      var navLink = e.target.closest(".nav-links a");
      if (navLink && !$("#brief-view").hidden) {
        e.preventDefault();
        var id = navLink.getAttribute("href").slice(1);
        window.location.hash = "#/";
        setTimeout(function () {
          var el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 40);
      }

      /* Back link / logo in brief view */
      var back = e.target.closest("[data-back], [data-route='home']");
      if (back && !$("#brief-view").hidden) {
        e.preventDefault();
        window.location.hash = "#/";
        setTimeout(function () { showHome(true); }, 0);
      }
    });

    /* Search */
    var search = $("#search");
    if (search) {
      search.addEventListener("input", function () { state.query = search.value; renderList(); });
    }

    /* Keyboard shortcuts */
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== search
          && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        e.preventDefault();
        if (search) search.focus();
      }
      if (e.key === "Escape" && search && document.activeElement === search) {
        search.value = ""; state.query = ""; search.blur(); renderList();
      }
    });

    window.addEventListener("hashchange", route);
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     BOOT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  renderMarquee();
  renderHeroStamps();
  renderStats();
  renderPile();
  renderDeck();
  renderChips();
  renderList();
  initScratch();
  bindEvents();
  route();

})();

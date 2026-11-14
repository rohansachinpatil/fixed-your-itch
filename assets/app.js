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

  /* Served from a real host (Vercel) we use clean paths so every brief is its
     own indexable URL. Opened straight from disk we fall back to hash routes. */
  var IS_FILE = location.protocol === "file:";

  /* The intro card is a first-visit thing only. */
  var INTRO_KEY = "fiy.intro.seen.v1";

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

  function briefUrl(id) { return IS_FILE ? ("#/brief/" + id) : ("/brief/" + id); }
  function homeUrl() { return IS_FILE ? "#/" : "/"; }

  function readFlag(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeFlag(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

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
    el.textContent = "SCRATCH TO REVEAL ✱ ".repeat(10);
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     HERO STAMPS (scattered background)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function renderHeroStamps() {
    var wrap = $("#hero-stamps");
    if (!wrap) return;

    var pool = DATA.problems.slice().sort(byRank);
    var picks = [pool[0], pool[2], pool[5], pool[10], pool[18], pool[28], pool[40]].filter(Boolean);

    /* [left%, top%, rotation, width%, class] — widths are % of the viewport so
       the stamps can never push the page wider than the screen. */
    var layout = [
      [-8, 12, -6, 24, "gy"],
      [80, 10, -11, 26, "dg"],
      [-6, 78, -8, 28, "dg"],
      [56, 84, -4, 30, "gy"],
      [88, 54, -5, 20, "gy"],
      [24, -12, 5, 28, "dg"],
      [58, -10, 4, 26, "gy"]
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
     SCRATCH CARD INTRO (first visit only)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function initScratch() {
    var c0 = $("#c0");
    var c1 = $("#c1");
    var overlay = $("#intro-scratch-overlay");
    if (!c0 || !c1 || !overlay) return;

    var ctx1 = c1.getContext("2d");
    var dragging = false;
    var scratchDone = false;

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

      ctx.fillStyle = "rgba(47,85,244,.06)";
      for (var x = 0; x < w; x += w / 10) ctx.fillRect(Math.round(x), 0, 1, h);

      ctx.fillStyle = "#2f55f4";
      ctx.textAlign = "center";
      ctx.font = "900 " + (w * .46) + "px Anton, Impact, sans-serif";
      ctx.fillText("143", w / 2, h * .44);

      ctx.font = "700 " + (w * .095) + "px Anton, Impact, sans-serif";
      ctx.fillStyle = "#1a1a1a";
      ctx.fillText("STARTUP", w / 2, h * .60);
      ctx.fillText("BRIEFS", w / 2, h * .71);

      ctx.font = "700 " + (w * .042) + "px Inter, sans-serif";
      ctx.fillStyle = "#999";
      ctx.fillText("INDIA'S PROBLEMS MAPPED", w / 2, h * .83);

      ctx.font = "600 " + (w * .034) + "px Inter, sans-serif";
      ctx.fillStyle = "#bbb";
      ctx.fillText("↓  SCROLL TO EXPLORE  ↓", w / 2, h * .92);
    }

    /* Top canvas — the scratchable surface */
    function paintScratch(ctx, w, h) {
      ctx.fillStyle = "#2f55f4";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "rgba(255,255,255,.045)";
      for (var y = 0; y < h; y += 18) ctx.fillRect(0, y, w, 1);

      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.font = "900 " + (w * .16) + "px 'Archivo Black', Anton, sans-serif";
      ctx.fillText("FIXED", w / 2, h * .34);
      ctx.font = "italic 900 " + (w * .11) + "px 'Archivo Black', sans-serif";
      ctx.fillText("your", w / 2, h * .47);
      ctx.font = "900 " + (w * .18) + "px 'Archivo Black', Anton, sans-serif";
      ctx.fillText("ITCH", w / 2, h * .63);

      ctx.font = "700 " + (w * .044) + "px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,.75)";
      ctx.fillText("✱  SCRATCH TO REVEAL  ✱", w / 2, h * .82);

      ctx.font = "500 " + (w * .033) + "px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,.45)";
      ctx.fillText("143 solutions for Razorpay's Fix My Itch", w / 2, h * .91);
    }

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
      writeFlag(INTRO_KEY, "1");
      c1.classList.add("gone");
      overlay.classList.add("revealed");
      var badge = $(".scratch-badge");
      if (badge) badge.textContent = "143 BRIEFS READY";

      /* The card flashes and holds for a beat, then the atlas opens. */
      setTimeout(function () {
        overlay.classList.add("dismissed");
        document.body.style.overflow = "";
        setTimeout(function () {
          overlay.style.display = "none";
          activatePile();
          document.body.classList.add("ready");
        }, 900);
      }, 1050);
    }

    function checkDone() {
      var d = ctx1.getImageData(0, 0, c1.width, c1.height).data;
      var total = 0, cleared = 0;
      for (var i = 3; i < d.length; i += 160) { total++; if (d[i] < 50) cleared++; }
      if (cleared / total > 0.42 && !scratchDone) dismissIntro();
    }

    c1.addEventListener("pointerdown", function (e) {
      dragging = true;
      try { c1.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
      scratch(e);
    });
    c1.addEventListener("pointermove", scratch);
    c1.addEventListener("pointerup", function () { dragging = false; checkDone(); });
    c1.addEventListener("pointercancel", function () { dragging = false; });
    c1.addEventListener("touchmove", function (e) { e.preventDefault(); scratch(e); }, { passive: false });

    /* Keyboard users get the same door: Enter or Escape opens the atlas. */
    overlay.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        e.preventDefault();
        dismissIntro();
      }
    });

    /* ── First-visit gate ──
       The card is a welcome, not a toll booth. It shows once per browser and
       never again on refresh, and never when someone lands straight on a
       brief from a search result or a shared link. */
    var deepLink = currentBriefId();
    var alreadySeen = readFlag(INTRO_KEY) === "1";

    if (alreadySeen || deepLink) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
      scratchDone = true;
      writeFlag(INTRO_KEY, "1");
      document.body.classList.add("ready");
    } else {
      overlay.removeAttribute("aria-hidden");
      document.body.style.overflow = "hidden";
      try { overlay.focus({ preventScroll: true }); } catch (err) { overlay.focus(); }
    }

    document.fonts.ready.then(resize);
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
     SECTOR PILE — interactive stamps
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function seededRng(seed) {
    var s = seed;
    return function () { s = s * 16807 % 2147483647; return (s - 1) / 2147483646; };
  }

  /* The sector cards settle in once — right after the intro card is revealed,
     or when the section scrolls into view on a return visit. */
  function activatePile() {
    var stamps = $("#pile-stamps");
    if (stamps && !stamps.classList.contains("on")) stamps.classList.add("on");
  }

  function renderPile() {
    var pile = $("#pile-stamps");
    if (!pile) return;

    var rng = seededRng(42);
    var colors = ["bl", "wt", "bl", "wt", "gy", "dg", "bl"];

    /* Only the sectors belong in the picker — the top startups already have
       their own deck further down the page. */
    var labels = CATEGORY_ORDER.slice();
    var cols = Math.max(2, Math.min(6, Math.round((pile.clientWidth || 900) / 250)));
    var rows = Math.ceil(labels.length / cols);
    var cw = 100 / cols;

    pile.innerHTML = labels.map(function (label, i) {
      var c = colors[i % colors.length];
      var col = i % cols;
      var row = Math.floor(i / cols);
      /* Jitter inside the cell so it reads as a sticker sheet, not a table. */
      var w = Math.min(cw * 0.86, 26);
      var jx = (rng() - 0.5) * (cw - w) * 0.55;
      var l = col * cw + (cw - w) / 2 + jx;
      var r = rng() * 12 - 6;
      var d = (row * cols + col) * 0.05;

      return (
        '<button type="button" class="st ' + c + ' is-sector" data-pile="' + esc(label) + '" style="' +
          'left:' + l.toFixed(2) + '%;' +
          '--w:'  + w.toFixed(2) + '%;' +
          '--r:'  + r.toFixed(1) + 'deg;' +
          '--d:'  + d.toFixed(2) + 's' +
        '">' + esc(label) + '</button>'
      );
    }).join("");

    /* Rows are sized from the real card height (labels wrap to two lines
       sometimes) so nothing can ever be clipped by the container. */
    var cards = $$(".st", pile);
    var tallest = 0;
    cards.forEach(function (el) { tallest = Math.max(tallest, el.offsetHeight); });
    var rowH = tallest + 16;
    pile.style.height = (rows * rowH + 46) + "px";
    cards.forEach(function (el, i) {
      var row = Math.floor(i / cols);
      var jy = (rng() - 0.5) * 10;
      /* 20px of head-room so the tilted corners of the first row never clip. */
      el.style.top = Math.round(row * rowH + jy + 20) + "px";
    });

    if (typeof IntersectionObserver === "undefined") { activatePile(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { activatePile(); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(pile);

    /* Keep the grid tidy when the viewport changes. */
    var last = pile.clientWidth;
    window.addEventListener("resize", function () {
      if (Math.abs(pile.clientWidth - last) < 60) return;
      last = pile.clientWidth;
      pile.classList.remove("on");
      renderPile();
    });
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     TOP 10 INTERACTIVE CARD DECK
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function renderDeck() {
    var deck = $("#deck");
    if (!deck) return;

    var top10 = DATA.problems.slice().sort(byRank).slice(0, 10);

    deck.innerHTML = top10.map(function (p, i) {
      var c = i % 2 ? "wt" : "bl";
      return (
        '<div class="st ' + c + '" data-id="' + esc(p.id) + '">' +
          '<small>' + esc(p.category) + '</small>' +
          '<span>' + esc(p.startup) + '</span>' +
          '<p class="card-pitch">' + esc(p.pitch) + '</p>' +
          '<div class="card-foot">' +
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

    function spread() { return window.innerWidth < 720 ? 3 : 9; }

    function lay() {
      var sp = spread();
      ord.forEach(function (id, p) {
        var e = cs[id];
        if (!e) return;
        e.style.zIndex = 20 - p;
        e.style.opacity = p > 5 ? 0 : 1;
        e.style.pointerEvents = p === 0 ? "auto" : "none";
        var rot = p ? (p % 2 ? 1 : -1) * p * 2.2 : 0;
        e.style.transform = "translate(" + (p * sp) + "px," + (p * 7) + "px) rotate(" + rot + "deg) scale(" + (1 - p * .03) + ")";
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
        if (!e) { busy = 0; return; }
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
      try { deck.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
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
        var topCard = cs[ord[0]];
        var id = topCard && topCard.getAttribute("data-id");
        if (id) { navigate(briefUrl(id)); return; }
      }
      if (Math.abs(dx) > 80) go(1, dx < 0 ? -1 : 1);
      else lay();
    };

    deck.onpointerup = up;
    deck.onpointercancel = up;

    deck.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
        e.preventDefault();
        go(1, e.deltaX > 0 ? 1 : -1);
      }
    }, { passive: false });

    lay();
    window.addEventListener("resize", lay);

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
      var count = name === "All" ? DATA.problems.length : DATA.categories[name];
      return (
        '<button type="button" class="chip" data-category="' + esc(name) +
        '" aria-pressed="' + active + '">' + esc(name) +
        ' <span class="chip-n">' + count + '</span></button>'
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
        '<a href="' + esc(briefUrl(p.id)) + '">' +
          '<span class="row-lead">' +
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
          ? '<a href="' + esc(briefUrl(prev.id)) + '"><span class="label">← Rank ' + prev.rank + '</span><b>' + esc(prev.startup) + '</b></a>'
          : "<span></span>") +
        (next
          ? '<a href="' + esc(briefUrl(next.id)) + '"><span class="label">Rank ' + next.rank + ' →</span><b>' + esc(next.startup) + '</b></a>'
          : "<span></span>") +
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
      '<div class="brief-top-bar">' +
        '<a class="back-link" href="' + esc(homeUrl()) + '" data-back>← Back to Ledger (All ' + DATA.problems.length + ' Problems)</a>' +
        '<div class="brief-top-actions">' +
          '<button type="button" class="action-btn" data-copy>🔗 Copy Share Link</button>' +
          '<button type="button" class="action-btn primary" data-copy-brief>📋 Copy Full Brief</button>' +
        '</div>' +
      '</div>' +

      '<section class="brief-hero" aria-labelledby="brief-startup-name">' +
        '<div class="brief-hero-top">' +
          '<div class="brief-kicker">' +
            '<span class="kicker-pill">Rank ' + rankLabel(p.rank) + ' of ' + DATA.problems.length + '</span>' +
            '<span class="kicker-tag">' + esc(p.category) + '</span>' +
            '<span class="kicker-source">' + esc(sourceLabel(p)) + '</span>' +
          '</div>' +
          '<div class="brief-hero-score-badge">' +
            '<span class="score-badge-label">' + esc(scoreName(p)) + '</span>' +
            '<span class="score-badge-val">' + fmt(rating) + '</span>' +
            '<span class="score-badge-max">/ 100</span>' +
          '</div>' +
        '</div>' +
        '<div class="brief-hero-main">' +
          '<p class="brief-hero-pre">The startup blueprint</p>' +
          '<h1 class="brief-startup-hero" id="brief-startup-name">' + esc(p.startup) + '</h1>' +
          '<p class="brief-pitch-hero">' + esc(p.pitch) + '</p>' +
        '</div>' +
      '</section>' +

      '<div class="brief-head">' +
        '<div class="brief-head-main">' +
          '<span class="brief-label-sm">The verified problem statement</span>' +
          '<h2 class="brief-problem-title">' + esc(p.title) + '</h2>' +
          (p.who ? '<p class="brief-who"><strong>Who feels it:</strong> ' + esc(p.who) + '</p>' : '') +
        '</div>' +
        '<aside class="brief-score-card" aria-label="Itch score overview">' +
          '<div class="score-card-header">' +
            '<span class="score-label">' + esc(scoreName(p)) + '</span>' +
            '<span class="score-val-small">' + fmt(rating) + ' / 100</span>' +
          '</div>' +
          '<div class="score-bar"><i style="width:' + Math.max(0, Math.min(100, rating)) + '%"></i></div>' +
          '<p class="score-note">' + (p.source === "platform"
            ? "Published Fix My Itch rating, analysed across severity, market size, whitespace and frequency."
            : "Weighted founder score: pain 30%, market 20%, timing 15%, feasibility 15%, moat 10%, revenue 10%.") + '</p>' +
        '</aside>' +
      '</div>' +

      '<div class="brief-body">' +
        '<aside class="brief-aside" aria-label="Signals and market">' +
          (signals ? '<div class="aside-block"><span class="aside-label">Validation signals</span>' + signals + '</div>' : '') +
          (marketRows ? '<div class="aside-block"><span class="aside-label">Opportunity specs</span><div class="aside-market">' + marketRows + '</div></div>' : '') +
          (tags ? '<div class="aside-block"><span class="aside-label">Sectors &amp; tags</span><div class="aside-tags">' + tags + '</div></div>' : '') +
        '</aside>' +
        '<article class="brief-body-main">' +
          '<section class="brief-section"><h2>The problem <span class="num">01</span></h2>' +
            '<p class="prose">' + esc(p.description) + '</p>' +
          '</section>' +
          '<section class="brief-section"><h2>Technical build blueprint <span class="num">02</span></h2>' +
            '<div class="steps">' + p.solution.how.map(function (s) {
              return '<div class="step"><p>' + esc(s) + '</p></div>';
            }).join("") + '</div>' +
          '</section>' +
          '<section class="brief-section"><h2>The first version (MVP roadmap) <span class="num">03</span></h2>' +
            '<ul class="mvp-list">' + p.solution.mvp.map(function (s) {
              return '<li>' + esc(s) + '</li>';
            }).join("") + '</ul>' +
          '</section>' +
          '<section class="brief-section"><h2>Business model &amp; economics <span class="num">04</span></h2>' +
            '<div class="model-grid">' +
              '<div class="model-cell"><span class="label">Revenue model</span><p>' + esc(p.solution.model) + '</p></div>' +
              '<div class="model-cell price"><span class="label">Recommended pricing</span><p>' + esc(p.solution.price) + '</p></div>' +
              '<div class="model-cell"><span class="label">Go-to-market</span><p>' + esc(p.solution.gtm) + '</p></div>' +
              '<div class="model-cell"><span class="label">Defensibility &amp; moat</span><p>' + esc(p.solution.moat) + '</p></div>' +
            '</div>' +
          '</section>' +
          '<section class="brief-section"><h2>Vulnerabilities &amp; what can kill it <span class="num">05</span></h2>' +
            '<div class="risk-list">' + p.risks.map(function (r) {
              return '<div>' + esc(r) + '</div>';
            }).join("") + '</div>' +
          '</section>' +
          '<section class="brief-section"><h2>The founder verdict <span class="num">06</span></h2>' +
            '<blockquote class="verdict">' + esc(p.verdict) + '</blockquote>' +
          '</section>' +
        '</article>' +
      '</div>' +
      navHtml(prev, next) +
      '<p class="brief-disclaimer">Problem statement &amp; itch score: Fix My Itch by Razorpay. Not affiliated with Razorpay Software Pvt. Ltd. ' +
        'Startup blueprint, MVP roadmap, architecture, pricing and risk analysis: independent founder analysis by ' +
        '<a href="https://github.com/rohansachinpatil" target="_blank" rel="noopener noreferrer">rohansachinpatil</a>. ' +
        'Not investment advice.</p>';

    home.hidden = true;
    view.hidden = false;
    document.title = p.startup + " — " + p.title + " | FIXED your ITCH";
    updateSeo(p);
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
    updateSeo(null);
    if (restore && returnScroll != null) {
      window.scrollTo(0, returnScroll);
      returnScroll = null;
    }
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     SEO — canonical, meta and per-brief schema
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  var SITE = "https://fixed-your-itch.vercel.app";

  function currentBriefId() {
    var m = (location.pathname || "").match(/\/brief\/([a-z0-9-]+)\/?$/i);
    if (m) return m[1];
    m = (location.hash || "").match(/^#\/brief\/([a-z0-9-]+)$/i);
    return m ? m[1] : null;
  }

  function setMeta(attr, key, content) {
    var el = document.head.querySelector("meta[" + attr + "='" + key + "']");
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function updateSeo(p) {
    var url = p
      ? (IS_FILE ? (SITE + "/brief/" + p.id) : location.origin + "/brief/" + p.id)
      : SITE + "/";

    var canonical = document.head.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    setMeta("property", "og:url", url);

    if (p) {
      var title = p.startup + " — " + p.title;
      var desc = p.pitch + " Build plan, MVP roadmap, pricing, go-to-market, moat and risks for " +
                 p.category.toLowerCase() + " in India. Rated " + fmt(p.rating) + "/100.";
      document.title = title + " | FIXED your ITCH";
      setMeta("name", "description", desc);
      setMeta("property", "og:title", title + " | FIXED your ITCH");
      setMeta("property", "og:description", desc);
      setMeta("name", "twitter:title", title + " | FIXED your ITCH");
      setMeta("name", "twitter:description", desc);
      setMeta("property", "og:type", "article");
    } else {
      var homeDesc = "India asked to Fix My Itch — we FIXED your ITCH. All 133 problems from Razorpay's Fix My Itch " +
                     "plus 10 editorial picks, each turned into a startup blueprint, MVP roadmap, pricing model and risk audit.";
      document.title = "FIXED your ITCH — 143 Startup Ideas & Solutions for Razorpay's Fix My Itch";
      setMeta("name", "description", homeDesc);
      setMeta("property", "og:title", "FIXED your ITCH — 143 Startup Blueprints from Razorpay's Fix My Itch");
      setMeta("property", "og:description", homeDesc);
      setMeta("name", "twitter:title", "FIXED your ITCH — 143 Solutions for Razorpay's Fix My Itch");
      setMeta("name", "twitter:description", homeDesc);
      setMeta("property", "og:type", "website");
    }

    var ld = document.getElementById("brief-schema");
    if (!ld) return;
    if (!p) { ld.textContent = ""; return; }

    var schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": url + "#article",
          "headline": p.startup + " — " + p.title,
          "description": p.pitch,
          "articleSection": p.category,
          "url": url,
          "datePublished": "2026-11-13",
          "dateModified": "2026-11-14",
          "author": { "@type": "Person", "name": "Rohan Sachin Patil", "@id": SITE + "/#author" },
          "publisher": { "@type": "Organization", "name": "FIXED your ITCH", "url": SITE + "/" },
          "about": { "@type": "Thing", "name": p.title },
          "keywords": (p.tags || []).join(", "),
          "isBasedOn": "https://razorpay.com/m/fix-my-itch/"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "FIXED your ITCH", "item": SITE + "/" },
            { "@type": "ListItem", "position": 2, "name": p.category, "item": SITE + "/#ranked" },
            { "@type": "ListItem", "position": 3, "name": p.startup, "item": url }
          ]
        }
      ]
    };
    ld.textContent = JSON.stringify(schema);
  }

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     ROUTING
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  function navigate(href) {
    if (IS_FILE) { location.hash = href.replace(/^#/, "#"); return; }
    history.pushState({}, "", href);
    route();
  }

  function route() {
    var id = currentBriefId();
    if (id) {
      var p = DATA.problems.filter(function (x) { return x.id === id; })[0];
      if (p) { renderBrief(p); return; }
      /* Unknown brief id — send them home rather than a blank page. */
      navigate(homeUrl());
      return;
    }
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

  function focusCategory(name) {
    state.category = name;
    state.query = "";
    var s = $("#search"); if (s) s.value = "";
    renderChips(); renderList();
    var target = $("#ranked");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function bindEvents() {
    /* Sort score toggle */
    var sortBtn = $("#sort-score-btn");
    if (sortBtn) {
      var toggle = function () {
        sortDir = sortDir === -1 ? 1 : -1;
        state.sort = sortDir === -1 ? "score-desc" : "score-asc";
        sortBtn.textContent = "ITCH SCORE " + (sortDir === -1 ? "↓" : "↑");
        renderList();
      };
      sortBtn.addEventListener("click", toggle);
      sortBtn.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    }

    /* Delegated clicks */
    document.addEventListener("click", function (e) {
      /* Sector stamp in the pile */
      var pileStamp = e.target.closest("[data-pile]");
      if (pileStamp) {
        var name = pileStamp.getAttribute("data-pile");
        if (name) { focusCategory(name); }
        return;
      }

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
      if (copy) { copyText(location.href); toast("Link copied!"); return; }

      /* Copy brief */
      var copyBrief = e.target.closest("[data-copy-brief]");
      if (copyBrief) {
        var id = currentBriefId();
        var p = id && DATA.problems.filter(function (x) { return x.id === id; })[0];
        if (p) { copyText(briefAsText(p)); toast("Brief copied!"); }
        return;
      }

      /* Share button in footer */
      if (e.target.closest("#share-btn")) { copyText(location.href); toast("Link copied!"); return; }

      /* Track scroll position before entering brief */
      var briefLink = e.target.closest(".brief-row a");
      if (briefLink && $("#brief-view").hidden) { returnScroll = window.scrollY; }

      /* Internal brief links — route without a full page load */
      var briefAnchor = e.target.closest('a[href*="/brief/"]');
      if (briefAnchor && !IS_FILE) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
        e.preventDefault();
        navigate(briefAnchor.getAttribute("href"));
        return;
      }

      /* Nav links while in brief view */
      var navLink = e.target.closest(".nav-links a");
      if (navLink && !$("#brief-view").hidden) {
        e.preventDefault();
        var anchor = navLink.getAttribute("href").slice(1);
        navigate(homeUrl());
        setTimeout(function () {
          var el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 40);
      }

      /* Back link / logo in brief view */
      var back = e.target.closest("[data-back], [data-route='home']");
      if (back && !$("#brief-view").hidden) {
        e.preventDefault();
        navigate(homeUrl());
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
    window.addEventListener("popstate", route);
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

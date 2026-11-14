const fs = require('fs');
const PORT = 9222;

async function main() {
  const res = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' });
  const tab = await res.json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  let id = 0; const pending = new Map();
  await new Promise((r) => ws.addEventListener('open', r));
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.reject(new Error(JSON.stringify(m.error))) : p.resolve(m.result); }
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => { const i = ++id; pending.set(i, { resolve, reject }); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (x) => { const r = await send('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true }); if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails)); return r.result.value; };
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1100, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'https://razorpay.com/m/fix-my-itch/' });
  await wait(5000);

  const categories = await ev(`(() => {
    const s = document.querySelector('[aria-label="fixmyitch-allproblems"]');
    const known = ['B2B Services','Beauty & Personal Care','Consumer Services','E-commerce','EdTech','FinTech','Food & Beverage','Home Services','Logistics','Payment Issues','Real Estate','SaaS','Transportation','Travel','Healthtech','Other'];
    return known;
  })()`).then((list) => {
    const only = process.env.ONLY_CATEGORY;
    return only ? list.filter((c) => c === only) : list;
  });
  const rowLimit = process.env.ROW_LIMIT ? parseInt(process.env.ROW_LIMIT, 10) : Infinity;
  const outFile = process.env.OUT_FILE || 'data/scraped.json';

  async function clickCategory(name) {
    const pt = await ev(`(() => {
      const s = document.querySelector('[aria-label="fixmyitch-allproblems"]');
      const els = [...s.querySelectorAll('div')].filter(el => (el.textContent || '').trim() === ${JSON.stringify(name)} && el.children.length <= 2);
      const el = els[els.length - 1];
      if (!el) return null;
      el.scrollIntoView({ block: 'center' });
      const r = el.getBoundingClientRect();
      return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) };
    })()`);
    if (!pt) return false;
    await wait(500);
    const pt2 = await ev(`(() => {
      const s = document.querySelector('[aria-label="fixmyitch-allproblems"]');
      const els = [...s.querySelectorAll('div')].filter(el => (el.textContent || '').trim() === ${JSON.stringify(name)} && el.children.length <= 2);
      const el = els[els.length - 1];
      const r = el.getBoundingClientRect();
      return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2) };
    })()`);
    await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: pt2.x, y: pt2.y, button: 'left', clickCount: 1 });
    await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: pt2.x, y: pt2.y, button: 'left', clickCount: 1 });
    await wait(1300);
    return true;
  }

  const rowSelector = `[aria-label="fixmyitch-allproblems"] .framer-bshf49`;

  // Every table row is a React component whose props hold the full record.
  // Reading the fiber avoids relying on the flaky expand-on-click animation.
  const readRows = () => ev(`(() => {
    const rows = [...document.querySelectorAll('${rowSelector}')];
    const num = (v) => {
      if (v == null) return null;
      const n = parseFloat(String(v).replace(/[^0-9.]/g, ''));
      return Number.isFinite(n) ? n : null;
    };
    return rows.map((row) => {
      const key = Object.keys(row).find((k) => k.startsWith('__reactFiber$'));
      if (!key) return null;
      let fiber = row[key];
      let depth = 0;
      while (fiber && depth < 40) {
        const p = fiber.memoizedProps;
        if (p && typeof p === 'object' && typeof p.GxYbmSCXm === 'string') {
          return {
            title: p.GxYbmSCXm,
            industry: p.FSdKAOYFe || null,
            description: p.n5CZyq2G_ || null,
            itchScore: num(p.lJoSHNtMf),
            severityScore: num(p.gSNpzHAC1),
            tamScore: num(p.Wswmh3n6k),
            whitespaceScore: num(p.n0499yZT9),
            frequencyScore: num(p.Gz1HNukn9)
          };
        }
        fiber = fiber.return;
        depth++;
      }
      return null;
    });
  })()`);

  const all = [];
  for (const category of categories) {
    const ok = await clickCategory(category);
    if (!ok) { console.log('MISSING CATEGORY', category); continue; }
    await wait(700);
    const records = await readRows();
    console.log('CATEGORY', category, 'rows', records.length);
    records.slice(0, rowLimit).forEach((rec, i) => {
      if (!rec || !rec.title) { console.log('PARSE FAIL', category, i); return; }
      const parsed = {
        category,
        title: rec.title,
        itchScore: rec.itchScore,
        industry: rec.industry || category,
        description: rec.description,
        severityScore: rec.severityScore,
        tamScore: rec.tamScore,
        whitespaceScore: rec.whitespaceScore,
        frequencyScore: rec.frequencyScore
      };
      if (!parsed.description) console.log('NO DESC', category, i, parsed.title);
      all.push(parsed);
    });
    // save incrementally
    fs.writeFileSync(outFile, JSON.stringify({ scrapedAt: new Date().toISOString(), source: 'https://razorpay.com/m/fix-my-itch/', categories, problems: all }, null, 2));
  }

  console.log('TOTAL', all.length, 'categories', new Set(all.map(p => p.category)).size);
  ws.close();
}

main().catch((e) => { console.error('FAILED', e); process.exit(1); });

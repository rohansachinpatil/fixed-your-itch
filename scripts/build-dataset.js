const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const scraped = require(path.join(ROOT, 'data/scraped.json')).problems;
const editorialSource = require(path.join(ROOT, 'data/editorial.json')).problems;
const priorPlatform = require(path.join(ROOT, 'data/b2b-blueprints.json')).entries;

const solutionSets = [
  require('./solutions/beauty-consumer-ecom'),
  require('./solutions/edtech-fintech-food-home'),
  require('./solutions/logistics-payments-realestate-saas'),
  require('./solutions/transport-travel-health-other')
];

const SOLUTIONS = {};
for (const set of solutionSets) {
  for (const [category, entries] of Object.entries(set)) {
    if (SOLUTIONS[category]) throw new Error(`Duplicate category in solution sets: ${category}`);
    SOLUTIONS[category] = entries;
  }
}

const norm = (s) => String(s || '')
  .toLowerCase()
  .replace(/[^a-z0-9 ]/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const slugify = (s) => norm(s)
  .split(' ')
  .slice(0, 9)
  .join('-');

// The source table is inconsistent: some sectors publish sub-scores out of 10
// and others out of 100. Normalise everything to a 0-10 scale.
const toTen = (v) => {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return Math.round((n > 10 ? n / 10 : n) * 10) / 10;
};

const usedIds = new Set();
const idFor = (title, category) => {
  let base = slugify(title) || 'problem';
  if (usedIds.has(base)) base = `${base}-${slugify(category).split('-')[0]}`;
  let id = base;
  let n = 2;
  while (usedIds.has(id)) id = `${base}-${n++}`;
  usedIds.add(id);
  return id;
};

// ---------- platform problems, with authored blueprints ----------

const missing = [];
const problems = scraped.map((row) => {
  const entries = SOLUTIONS[row.category];
  let entry = entries ? entries.find((e) => norm(row.title).includes(norm(e.match))) : null;

  // B2B problems already had full blueprints in the first build; reuse them.
  if (!entry) {
    const prior = priorPlatform.find((p) => norm(p.title) === norm(row.title));
    if (prior) {
      entry = {
        startup: prior.startup,
        pitch: prior.pitch,
        who: prior.who,
        tags: prior.tags,
        how: prior.how,
        mvp: prior.mvp,
        model: prior.model,
        price: prior.price,
        gtm: prior.gtm,
        moat: prior.moat,
        risks: prior.risks,
        market: prior.market,
        verdict: prior.verdict
      };
    }
  }

  if (!entry) { missing.push(`${row.category} :: ${row.title}`); return null; }
  return {
    id: idFor(row.title, row.category),
    startup: entry.startup,
    title: row.title,
    category: row.category,
    source: 'platform',
    rating: row.itchScore,
    prompt: null,
    description: row.description,
    who: entry.who,
    tags: entry.tags || [],
    pitch: entry.pitch,
    signals: [
      { label: 'Severity', value: toTen(row.severityScore), max: 10 },
      { label: 'Market (TAM)', value: toTen(row.tamScore), max: 10 },
      { label: 'Whitespace', value: toTen(row.whitespaceScore), max: 10 },
      { label: 'Frequency', value: toTen(row.frequencyScore), max: 10 }
    ],
    solution: {
      how: entry.how,
      mvp: entry.mvp,
      model: entry.model,
      price: entry.price,
      gtm: entry.gtm,
      moat: entry.moat
    },
    risks: entry.risks,
    market: entry.market,
    verdict: entry.verdict
  };
}).filter(Boolean);

// ---------- editorial problems from the earlier build ----------

const editorial = editorialSource.map((p) => ({
  id: idFor(p.title, p.category),
  startup: p.startup,
  title: p.title,
  category: p.category,
  source: 'editorial',
  rating: p.rating,
  prompt: null,
  description: p.description,
  who: p.who,
  tags: p.tags || [],
  pitch: p.pitch,
  signals: p.signals,
  solution: p.solution,
  risks: p.risks,
  market: p.market,
  verdict: p.verdict
}));

// ---------- validate ----------

const unmatchedEntries = [];
for (const [category, entries] of Object.entries(SOLUTIONS)) {
  for (const entry of entries) {
    const row = scraped.find((r) => r.category === category && norm(r.title).includes(norm(entry.match)));
    if (!row) unmatchedEntries.push(`${category} :: ${entry.match}`);
  }
}

const all = problems.concat(editorial).sort((a, b) => b.rating - a.rating || a.title.localeCompare(b.title));
all.forEach((p, i) => { p.rank = i + 1; });

console.log('platform problems :', problems.length);
console.log('editorial problems:', editorial.length);
console.log('total             :', all.length);
console.log('missing solutions :', missing.length);
missing.forEach((m) => console.log('  MISSING', m));
console.log('unused blueprints :', unmatchedEntries.length);
unmatchedEntries.forEach((m) => console.log('  UNUSED ', m));

const byCategory = {};
for (const p of all) {
  byCategory[p.category] = (byCategory[p.category] || 0) + 1;
}
console.log('categories:', Object.keys(byCategory).length);

if (missing.length) {
  console.error('Refusing to write: every platform problem needs a blueprint.');
  process.exit(1);
}

// ---------- write ----------

const meta = {
  title: 'Itch Atlas',
  subtitle: "Every problem on Razorpay's Fix My Itch, turned into a startup brief",
  source: 'Razorpay Fix My Itch',
  sourceUrl: 'https://razorpay.com/m/fix-my-itch/',
  extracted: '2026-11-13',
  platformProblems: problems.length,
  editorialProblems: editorial.length,
  total: all.length,
  categories: Object.keys(byCategory).length,
  ratingNote: 'Platform problems are rated by the Fix My Itch score (0-100). Editorial picks are rated by a weighted founder score (0-100).'
};

const payload = { meta, categories: byCategory, problems: all };
fs.writeFileSync(path.join(ROOT, 'data/problems.json'), JSON.stringify(payload, null, 2));

const js = `/* Generated by scripts/build-dataset.js — do not edit by hand. */\nwindow.ITCH_ATLAS = ${JSON.stringify(payload, null, 2)};\n`;
fs.writeFileSync(path.join(ROOT, 'data/problems.js'), js);

const csvEscape = (v) => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`;
const csvHeader = ['rank', 'startup', 'title', 'category', 'source', 'rating', 'itch_score', 'severity', 'tam', 'whitespace', 'frequency', 'pitch', 'price', 'market_tam', 'verdict'];
const csvRows = all.map((p) => {
  const sig = (label) => {
    const s = (p.signals || []).find((x) => x.label === label);
    return s ? s.value : '';
  };
  return [
    p.rank, p.startup, p.title, p.category, p.source, p.rating,
    p.source === 'platform' ? p.rating : '',
    p.source === 'platform' ? sig('Severity') : '',
    p.source === 'platform' ? sig('Market (TAM)') : '',
    p.source === 'platform' ? sig('Whitespace') : '',
    p.source === 'platform' ? sig('Frequency') : '',
    p.pitch, p.solution.price, p.market.tam, p.verdict
  ].map(csvEscape).join(',');
});
fs.writeFileSync(path.join(ROOT, 'data/problems.csv'), [csvHeader.join(','), ...csvRows].join('\n'));

console.log('\nWrote data/problems.json, data/problems.js, data/problems.csv');
console.log('Top 12:');
all.slice(0, 12).forEach((p) => console.log(`  ${String(p.rank).padStart(3)}. ${p.rating.toFixed(1)}  ${p.startup} — ${p.title.slice(0, 70)}`));

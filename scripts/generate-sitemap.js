/* Generates sitemap.xml with one real, indexable URL per brief.
   Briefs are served from /brief/<id> (Vercel rewrites that to index.html),
   so every entry is a standalone page rather than a hash fragment. */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const d = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/problems.json'), 'utf8'));
const base = (process.env.SITE_URL || 'https://fixed-your-itch.vercel.app').replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const url = (loc, priority, changefreq, extra) =>
  '  <url>\n' +
  '    <loc>' + esc(loc) + '</loc>\n' +
  '    <lastmod>' + today + '</lastmod>\n' +
  '    <changefreq>' + changefreq + '</changefreq>\n' +
  '    <priority>' + priority + '</priority>\n' +
  (extra || '') +
  '  </url>\n';

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
xml += url(base + '/', '1.0', 'daily');
xml += url(base + '/#faq', '0.7', 'monthly');
xml += url(base + '/#method', '0.6', 'monthly');
xml += url(base + '/privacy.html', '0.3', 'yearly');
xml += url(base + '/terms.html', '0.3', 'yearly');
xml += url(base + '/disclaimer.html', '0.3', 'yearly');

d.problems.forEach((p) => {
  /* Higher-ranked briefs are the ones worth surfacing most. */
  const priority = p.rank <= 10 ? '0.9' : p.rank <= 40 ? '0.8' : '0.7';
  xml += url(base + '/brief/' + p.id, priority, 'weekly');
});

xml += '</urlset>\n';
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
console.log('Sitemap generated with ' + (d.problems.length + 6) + ' URLs → ' + base);

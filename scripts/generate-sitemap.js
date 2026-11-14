const fs = require('fs');
const d = JSON.parse(fs.readFileSync('data/problems.json', 'utf8'));
const base = 'https://fixed-your-itch.vercel.app';
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
xml += '  <url>\n    <loc>' + base + '/</loc>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n';
d.problems.forEach(p => {
  xml += '  <url>\n    <loc>' + base + '/#/brief/' + p.id + '</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n';
});
xml += '</urlset>\n';
fs.writeFileSync('sitemap.xml', xml, 'utf8');
console.log('Sitemap generated with ' + (d.problems.length + 1) + ' URLs.');

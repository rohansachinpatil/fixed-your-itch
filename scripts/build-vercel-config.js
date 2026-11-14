/* Generates vercel.json.
   Vercel ignores the top-level "headers" block when "routes" are present, so
   the security headers are inlined into every route instead. The
   "handle": "filesystem" entry lets real files (legal pages, assets, data)
   win before the brief rewrite and the 404 fallback. */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const SECURITY = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    'font-src \'self\' https://fonts.gstatic.com; img-src \'self\' data:; connect-src \'self\'; manifest-src \'self\'; ' +
    "base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests"
};

const route = (src, dest, extra, status) => {
  const r = { src, dest, headers: Object.assign({}, SECURITY, extra || {}) };
  if (status) r.status = status;
  return r;
};

const config = {
  version: 2,
  name: 'fixed-your-itch',
  builds: [{ src: '**', use: '@vercel/static' }],
  routes: [
    route('/robots.txt', '/robots.txt', {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }),
    route('/sitemap.xml', '/sitemap.xml', {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }),
    route('/site.webmanifest', '/site.webmanifest', {
      'Content-Type': 'application/manifest+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }),
    route('/assets/(.*)', '/assets/$1', { 'Cache-Control': 'public, max-age=0, must-revalidate' }),
    route('/data/(.*)', '/data/$1', { 'Cache-Control': 'public, max-age=0, must-revalidate' }),
    /* The home page is named explicitly so the security headers ride along —
       the filesystem handle below would otherwise serve it bare. */
    route('/', '/index.html', { 'Cache-Control': 'public, max-age=0, must-revalidate' }),
    { handle: 'filesystem' },
    route('/brief/(.*)', '/index.html', { 'Cache-Control': 'public, max-age=0, must-revalidate' }),
    route('/(.*)', '/404.html', { 'Cache-Control': 'public, max-age=0, must-revalidate' }, 404)
  ]
};

fs.writeFileSync(path.join(ROOT, 'vercel.json'), JSON.stringify(config, null, 2) + '\n', 'utf8');
console.log('vercel.json written: ' + config.routes.length + ' routes');

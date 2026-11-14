/* Zero-dependency static server for local preview.
   Mirrors the Vercel rewrite in vercel.json: real files are served as-is,
   and anything else falls back to index.html so /brief/<id> works locally. */

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PORT = Number(process.env.PORT || 8000);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.csv': 'text/csv; charset=utf-8'
};

function send(res, status, body, type, extraHeaders) {
  const headers = Object.assign({
    'Content-Type': type || 'text/plain; charset=utf-8',
    'X-Content-Type-Options': 'nosniff'
  }, extraHeaders || {});
  res.writeHead(status, headers);
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);
  let filePath = path.join(ROOT, path.normalize(url).replace(/^([/\\])+/, ''));

  if (!filePath.startsWith(ROOT)) return send(res, 403, 'Forbidden');

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const type = TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, Object.assign({ 'Content-Type': type, 'X-Content-Type-Options': 'nosniff' }, { 'Cache-Control': 'public, max-age=0, must-revalidate' }));
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    /* SPA fallback — same behaviour as the Vercel catch-all route. */
    const index = path.join(ROOT, 'index.html');
    fs.readFile(index, (err2, buf) => {
      if (err2) return send(res, 404, 'Not found');
      send(res, 200, buf, TYPES['.html'], { 'Cache-Control': 'public, max-age=0, must-revalidate' });
    });
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('FIXED your ITCH → http://127.0.0.1:' + PORT + '/');
  console.log('Brief preview  → http://127.0.0.1:' + PORT + '/brief/<id>');
});

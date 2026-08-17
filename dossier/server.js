const http = require('http');
const fs = require('fs');
const path = require('path');

const PASSWORD = 'savankong';
const PORT = process.env.PORT || 8080;
const FILE_PATH = path.join(__dirname, 'growth99-analysis.html');

function isAuthorized(req) {
  const header = req.headers['authorization'];
  if (!header || !header.startsWith('Basic ')) return false;
  const decoded = Buffer.from(header.slice('Basic '.length), 'base64').toString('utf8');
  const separatorIndex = decoded.indexOf(':');
  const password = separatorIndex === -1 ? decoded : decoded.slice(separatorIndex + 1);
  return password === PASSWORD;
}

const server = http.createServer((req, res) => {
  if (!isAuthorized(req)) {
    res.writeHead(401, {
      'WWW-Authenticate': 'Basic realm="Growth99 Dossier"',
      'Content-Type': 'text/plain; charset=utf-8',
    });
    res.end('Password required.');
    return;
  }

  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Error loading page.');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Growth99 dossier server listening on port ${PORT}`);
});

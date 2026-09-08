const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>CEO HQ IS LIVE</h1><p>Welcome to JEN FLASH BUILDER</p>');
});

server.listen(PORT, () => {
  console.log(`HQ RUNNING ON PORT ${PORT}`);
});

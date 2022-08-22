// Copied from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const util = require('node:util');

const parsedArgs = util.parseArgs({
  strict: true,
  allowPositionals: true,
  options: {
    port: {
      type: 'string',
      short: 'p',
    },
  },
});

const options = {
  directory: parsedArgs.positionals[0],
  port: parsedArgs.values.port,
};
 
http
  .createServer((request, response) => {
    console.log(`request ${request.url}`);

    let filePath = `.${request.url}`;
    if (filePath === './') {
      filePath = './index.html';
    }
    filePath = path.join(options.directory, filePath);

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.svg': 'image/svg+xml',
      '.wasm': 'application/wasm',
    };

    const contentType = mimeTypes[extname] ?? 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          response.writeHead(404);
          response.end('Sorry, missing file ..\n');
        } else {
          response.writeHead(500);
          response.end(
            `Sorry, check with the site admin for error: ${error.code} ..\n`,
          );
        }
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }
    });
  })
  .listen(options.port);
console.log(`Server running at http://127.0.0.1:${options.port}/`);

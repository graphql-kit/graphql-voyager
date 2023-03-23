// Copied from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework
import * as http from 'node:http';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as util from 'node:util';

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

function consoleError(msg: string) {
  console.error('\x1b[31m%s\x1b[0m', msg);
}

http
  .createServer((request, response) => {
    const url = new URL(request.url, 'file:');
    let filePath = url.pathname;
    if (filePath === '/') {
      filePath = '/index.html';
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
      '.map': 'application/json',
    };

    const contentType = mimeTypes[extname] ?? 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          consoleError(`${request.url} => 404`);
          response.writeHead(404);
          response.end('Sorry, missing file ..\n');
        } else {
          consoleError(`${request.url} => 500`);
          response.writeHead(500);
          response.end(
            `Sorry, check with the site admin for error: ${error.code} ..\n`,
          );
        }
      } else {
        console.log(`${request.url} => ${contentType}`);
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }
    });
  })
  .listen(options.port);

console.log(`Server running at http://127.0.0.1:${options.port}/`);

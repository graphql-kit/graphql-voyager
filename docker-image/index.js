const express = require('express');
const voyager = require('graphql-voyager/middleware');

const app = express();

const headersJS = (() => {
  if (!process.env.HEADERS || typeof process.env.HEADERS !== 'string') {
    return JSON.stringify({});
  };
  const headers = {};

  process.env.HEADERS.split('&').forEach(header => {
      let headerSplit = header.split('=');

    if (headerSplit.length === 2) {
        headers[headerSplit[0]] = headerSplit[1];
      }
  });
  return JSON.stringify(headers);
})()

app.use('/', voyager.express({
  endpointUrl: process.env.GRAPHQL_ENDPOINT,
  headersJS: headersJS
}));

process.on('SIGINT', function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  process.exit(1);
});

const port = process.env.PORT;

app.listen(port, function(err) {
  if (err) {
      throw new Error(
          `Failed to start listening on ${port}, error: ${err.message}`
      );
  }
  console.log(`listening on http://0.0.0.0:${port}`);
});

const express = require('express');
const voyager = require('graphql-voyager/middleware');

const DEFAULT_GRAPHQL_ENDPOINT = '/graphql';
const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || DEFAULT_GRAPHQL_ENDPOINT;
const PORT = process.env.PORT || 3400;

const app = express();

app.use(
  '/',
  voyager.express({
    endpointUrl: GRAPHQL_ENDPOINT,
  }),
);

process.on('SIGINT', function () {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  process.exit(1);
});

app.listen(PORT, function (err) {
  if (err) {
    throw new Error(
      `Failed to start listening on ${PORT}, error: ${err.message}`,
    );
  }
  console.log(`listening on http://0.0.0.0:${PORT}`);
});

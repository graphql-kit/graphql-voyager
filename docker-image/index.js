const express = require('express');
const voyager = require('graphql-voyager/middleware');

const app = express();

app.use('/', voyager.express({ endpointUrl: process.env.GRAPHQL_ENDPOINT }));

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

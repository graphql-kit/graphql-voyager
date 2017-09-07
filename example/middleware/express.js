const express = require('express');
const graphqlHTTP = require('express-graphql');
const { express: voyagerMiddleware } = require('graphql-voyager/middleware');
const schema = require('../schema');

const app = express();
const PORT = 3001;

app.use('/graphql', graphqlHTTP(() => ({ schema })));
app.use('/voyager', voyagerMiddleware({
  endpointUrl: '/graphql',
  displayOptions: {
    sortByAlphabet: true,
  },
}));

app.listen(PORT, function() {
  const port = this.address().port;

  console.log(`Started on http://localhost:${port}/voyager`);
});

import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as schema from 'graphql-voyager/example/schema';
import voyagerMiddleware from '../src/index';

const app = express();
const PORT = 3001;

app.use('/graphql', graphqlHTTP(() => ({ schema })));
app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

app.listen(PORT, function() {
  const port = this.address().port;

  console.log(`Started on http://localhost:${port}/`);
});

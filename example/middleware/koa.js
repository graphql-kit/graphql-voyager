const Koa = require('koa');
const KoaRouter = require('koa-router');
const graphqlHTTP = require('koa-graphql');
const { koa: voyagerMiddleware } = require('graphql-voyager/middleware');
const schema = require('../schema');

const app = new Koa();
const router = new KoaRouter();
const PORT = 3001;

router.all('/graphql', graphqlHTTP({ schema }));
router.all('/voyager', voyagerMiddleware({
  endpointUrl: '/graphql',
  displayOptions: {
    sortByAlphabet: true,
  },
}));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT, function() {
  const port = this.address().port;

  console.log(`Started on http://localhost:${port}/voyager`);
});

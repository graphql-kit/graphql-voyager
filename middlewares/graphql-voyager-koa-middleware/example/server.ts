import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as graphqlHTTP from 'koa-graphql';
import * as schema from 'graphql-voyager/example/schema';
import voyagerMiddleware from '../src/index';

const app = new Koa();
const router = new KoaRouter();
const PORT = 3001;

router.all('/graphql', graphqlHTTP({ schema }));
router.use('/voyager', voyagerMiddleware({
    endpointUrl: '/graphql'
}));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT, function() {
    const port = this.address().port;

    console.log(`Started on http://localhost:${port}/`);
});
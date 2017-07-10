import * as path from 'path';
import * as Router from 'koa-router';
import * as send from 'koa-send';
import renderVoyagerMiddlewarePage, { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';

export { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';

export interface KoaVoyagerMiddleware {
    (options: VoyagerMiddlewareOptions): Router;
}

const voyagerKoa: KoaVoyagerMiddleware = function(options: VoyagerMiddlewareOptions) {
    const middleware = new Router();

    async function voyager(ctx, next) {
        try {
            ctx.body = renderVoyagerMiddlewarePage(options);
            await next();
        } catch (err) {
            ctx.body = { message: err.message };
            ctx.status = err.status || 500
        }
    }

    async function files(ctx, next) {
        try {
            await send(ctx, ctx.params.file, {
                root: path.join(__dirname, '../node_modules/graphql-voyager/dist'),
                hidden: true
            });
            await next();
        } catch (err) {
            ctx.body = { message: err.message };
            ctx.status = err.status || 500
        }
    }

    middleware
        .get('/client/:file', files)
        .get('/', voyager);

    return middleware.routes();
};

export default voyagerKoa;

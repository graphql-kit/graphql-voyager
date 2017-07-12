import * as Koa from 'koa';
import renderVoyagerMiddlewarePage, { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';

const { version } = require('../package.json');

interface KoaVoyagerMiddleware {
  (ctx: Koa.Context, next: () => void): void;
}

interface Register {
  (options): KoaVoyagerMiddleware
}

const koa: Register = function (options) {
  const voyagerMiddlewareOptions: VoyagerMiddlewareOptions = {
    ...options,
    version
  };

  return async function voyager(ctx, next) {
    try {
      ctx.body = renderVoyagerMiddlewarePage(voyagerMiddlewareOptions);
      await next();
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = err.status || 500
    }
  }
};

export default koa;

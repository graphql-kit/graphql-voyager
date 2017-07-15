import { Context } from 'koa';
import renderVoyagerPage, { MiddlewareOptions } from './render-voyager-page';

const { version } = require('../package.json');

interface KoaVoyagerMiddleware {
  (ctx: Context, next: () => void): void;
}

interface Register {
  (options): KoaVoyagerMiddleware
}

const koa: Register = function (options) {
  const middlewareOptions: MiddlewareOptions = {
    ...options,
    version
  };

  return async function voyager(ctx, next) {
    try {
      ctx.body = renderVoyagerPage(middlewareOptions);
      await next();
    } catch (err) {
      ctx.body = {message: err.message};
      ctx.status = err.status || 500
    }
  }
};

export default koa;

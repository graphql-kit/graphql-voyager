import { Context } from 'koa';
import renderVoyagerPage, { MiddlewareOptions } from './render-voyager-page';

export default function koaMiddleware(
  options: MiddlewareOptions
): (ctx: Context, next: () => void) => void {
  return async function voyager(ctx, next) {
    try {
      ctx.body = renderVoyagerPage(options);
      await next();
    } catch (err) {
      ctx.body = { message: err.message };
      ctx.status = err.status || 500;
    }
  };
};

import * as path from 'path';
import * as express from 'express';
import renderVoyagerMiddlewarePage, { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';

export { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';

export interface ExpressVoyagerMiddleware {
    (options: VoyagerMiddlewareOptions): express.Router;
}

const router = express.Router();
const assetsPath = path.join(__dirname, '../node_modules/graphql-voyager/dist');

const voyagerExpress: ExpressVoyagerMiddleware = function voyagerExpress(options: VoyagerMiddlewareOptions) {
  router.use(
    '/client',
    express.static(assetsPath)
  );

  router.use(
    '/',
    (_req:express.Request, res: express.Response, next: Function) => {
      res.setHeader('Content-Type', 'text/html');
      res.write(renderVoyagerMiddlewarePage(options));
      res.end();
      next();
    }
  );

  return router;
};

export default voyagerExpress;

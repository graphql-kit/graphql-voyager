import * as express from 'express';
import renderVoyagerMiddlewarePage, { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';

const { version } = require('../package.json');

interface ExpressVoyagerMiddleware {
  (_req: express.Request, res: express.Response, next: () => void): void;
}

interface Register {
  (options): ExpressVoyagerMiddleware
}

const voyagerExpress: Register = function voyagerExpress(options) {
  const voyagerMiddlewareOptions: VoyagerMiddlewareOptions = {
    ...options,
    version
  };

  return (_req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(renderVoyagerMiddlewarePage(voyagerMiddlewareOptions));
    res.end();
    next();
  }
};

export default voyagerExpress;

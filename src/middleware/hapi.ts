import { Server } from 'hapi';
import renderVoyagerMiddlewarePage, { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';

const pkg = require('../package.json');

interface Register {
  (server: Server, options: any, next: any): void;
  attributes?: any;
}

const hapi: Register = function(server, options, next) {
  if (!options || !options.voyagerOptions) {
    throw new Error('Voyager middleware requires options.');
  }

  if (arguments.length !== 3) {
    throw new Error(`Voyager middleware expects exactly 3 arguments, got ${arguments.length}`);
  }

  const voyagerMiddlewareOptions: VoyagerMiddlewareOptions = {
    ...options.voyagerOptions,
    version: pkg.version
  };

  server.route({
    method: 'GET',
    path: options.path,
    config: options.route || {},
    handler: (_request, reply) => {
      reply(renderVoyagerMiddlewarePage(voyagerMiddlewareOptions))
        .header('Content-Type', 'text/html')
    },
  });

  return next();
};

hapi.attributes = {
  pkg,
  multiple: false
};

export default hapi;

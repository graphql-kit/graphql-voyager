import { Server } from 'hapi';
import renderVoyagerPage, { MiddlewareOptions } from './render-voyager-page';

const pkg = require('../package.json');

export interface Register {
  (server: Server, options, next: any): void;
  attributes?: any;
}

const hapi: Register = function(server, options, next) {
  if (arguments.length !== 3) {
    throw new Error(`Voyager middleware expects exactly 3 arguments, got ${arguments.length}`);
  }

  const { path, route: config = {}, ...middlewareOptions } = options;

  server.route({
    method: 'GET',
    path,
    config,
    handler: (_request, reply) => {
      reply(
        renderVoyagerPage(<MiddlewareOptions>middlewareOptions),
      ).header('Content-Type', 'text/html');
    }
  });

  return next();
};

hapi.attributes = {
  pkg,
  multiple: false,
};

export default hapi;

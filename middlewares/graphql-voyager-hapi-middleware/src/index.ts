import * as path from 'path';
import { Server } from 'hapi';
import * as Inert from 'inert';
import renderVoyagerMiddlewarePage, { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';
import * as pkg from '../package.json';

export { VoyagerMiddlewareOptions } from './render-voyager-middleware-page';

const assetsPath = path.join(__dirname, '../node_modules/graphql-voyager/dist');

export interface Register {
  (server: Server, options: any, next: any): void;
  attributes?: any;
}

export interface HapiVoyagerPluginOptions {
  path: string;
  route?: any;
  voyagerOptions: VoyagerMiddlewareOptions;
}

const voyagerHapi: Register = function(server: Server, options: HapiVoyagerPluginOptions, next) {
  if (!options || !options.voyagerOptions) {
    throw new Error('Voyager middleware requires options.');
  }

  if (arguments.length !== 3) {
    throw new Error(`Voyager middleware expects exactly 3 arguments, got ${arguments.length}`);
  }

  if (!server.registrations.inert) {
    server.register(Inert, () => {});
  }

  server.route({
    method: 'GET',
    path: `${options.path}/client/{param*}`,
    handler: {
      directory: {
        path: assetsPath,
        index: false,
        listing: false
      }
    }
  });

  server.route({
    method: 'GET',
    path: options.path,
    config: options.route || {},
    handler: (_request, reply) => {
      reply(renderVoyagerMiddlewarePage(options.voyagerOptions))
        .header('Content-Type', 'text/html')
    },
  });

  return next();
};

voyagerHapi.attributes = {
  pkg,
  multiple: false
};

export default voyagerHapi;

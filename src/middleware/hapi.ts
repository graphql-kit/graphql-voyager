import { Server } from 'hapi';
import renderVoyagerPage, { MiddlewareOptions } from './render-voyager-page';

const pkg = require('../package.json');

export interface Register {
  (server: Server, options): void;
}

export interface Plugin {
  pkg?: any;
  register: Register;
}

const hapi: Plugin = {
  pkg,
  register: function(server, options: any) {
    if (arguments.length !== 2) {
      throw new Error(`Voyager middleware expects exactly 3 arguments, got ${arguments.length}`);
    }

    const { path, route: config = {}, ...middlewareOptions } = options;

    server.route({
      method: 'GET',
      path,
      config,
      handler: (_request, h) => h.response(renderVoyagerPage(<MiddlewareOptions>middlewareOptions)),
    });
  },
};

export default hapi;

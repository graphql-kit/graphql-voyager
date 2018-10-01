import renderVoyagerPage, { MiddlewareOptions } from './render-voyager-page';

const pkg = require('../package.json');

const hapi = {
  pkg,
  register(server, options: any) {
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

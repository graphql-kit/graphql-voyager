import renderVoyagerPage, { MiddlewareOptions } from './render-voyager-page';

export default function expressMiddleware(options: MiddlewareOptions) {
  return (_req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(renderVoyagerPage(options));
    res.end();
  };
}

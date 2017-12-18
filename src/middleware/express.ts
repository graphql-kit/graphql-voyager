import { Request, Response } from 'express';
import renderVoyagerPage, { MiddlewareOptions } from './render-voyager-page';

export default function expressMiddleware(
  options: MiddlewareOptions
): (_req: Request, res: Response, next: () => void) => void {
  return (_req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(renderVoyagerPage(options));
    res.end();
  };
};

import { Request, Response, NextFunction } from 'express';

import IMiddleware from '@presentation/protocols/IMiddleware';
import { IHttpRequest } from '@presentation/protocols/IHttp';

const middlewareAdapter = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const httpRequest: IHttpRequest = {
        body: req.body,
        headers: req.headers,
        params: req.params,
        query: req.query,
      };

      const { body } = await middleware.handle(httpRequest);

      Object.assign(req, body);

      return next();
    } catch (error) {
      return next(error);
    }
  };
};

export { middlewareAdapter };

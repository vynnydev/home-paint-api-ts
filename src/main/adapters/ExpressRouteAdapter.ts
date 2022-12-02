import { Request, Response, NextFunction } from 'express';

import IController from '@presentation/protocols/IController';
import { IHttpRequest } from '@presentation/protocols/IHttp';

const routeAdapter = (controller: IController) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const httpRequest: IHttpRequest = {
        body: req.body,
        headers: req.headers,
        params: req.params,
        query: req.query,
      };

      const httpResponse = await controller.handle(httpRequest);

      return res.status(httpResponse.status_code).json(httpResponse.body);
    } catch (error) {
      return next(error);
    }
  };
};

export { routeAdapter };

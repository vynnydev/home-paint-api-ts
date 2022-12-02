import { Request, Response, NextFunction } from 'express';

import AppError from '@utils/errors/AppError';

import IController from '@presentation/protocols/IController';
import { IHttpRequest } from '@presentation/protocols/IHttp';

const routeRedirectAdapter = (controller: IController) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const httpRequest: IHttpRequest = {
        body: req.body,
        headers: req.headers,
        params: req.params,
        query: req.query,
      };

      const httpResponse = await controller.handle(httpRequest);

      if (!httpResponse.redirect_to)
        throw new AppError({ message: 'Redirect url not provided', status_code: 500 });

      return res.status(httpResponse.status_code).redirect(httpResponse.redirect_to);
    } catch (error) {
      return next(error);
    }
  };
};

export { routeRedirectAdapter };

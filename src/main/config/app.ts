import express from 'express';

import setupErrorHandler from './errorHandler';
import setupMiddlewares from './middlewares';
import setupRoutes from './routes';

const app = express();

setupMiddlewares(app);
setupRoutes(app);
setupErrorHandler(app);

export { app };

import { Router } from 'express';

import { routeAdapter } from '@main/adapters/ExpressRouteAdapter';

import createThirdWallControllerFactory from '@main/factories/controllers/thirdWall/CreateThirdWallControllerFactory';
import findThirdWallControllerFactory from '@main/factories/controllers/thirdWall/FindThirdWallControllerFactory';
import updateThirdWallControllerFactory from '@main/factories/controllers/thirdWall/UpdateThirdWallControllerFactory';
import deleteThirdWallControllerFactory from '@main/factories/controllers/thirdWall/DeleteThirdWallControllerFactory';

const router = Router();

router
  .route('/third-walls/:room_id')
  .post(routeAdapter(createThirdWallControllerFactory.makeCreateThirdWallController()))
  .get(routeAdapter(findThirdWallControllerFactory.makeFindThirdWallController()));

router
  .route('/third-walls/:id')
  .put(routeAdapter(updateThirdWallControllerFactory.makeUpdateThirdWallController()))
  .delete(routeAdapter(deleteThirdWallControllerFactory.makeDeleteThirdWallController()));

export default { router };

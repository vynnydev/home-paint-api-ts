import { Router } from 'express';

import { routeAdapter } from '@main/adapters/ExpressRouteAdapter';

import createFourthWallControllerFactory from '@main/factories/controllers/fourthWall/CreateFourthWallControllerFactory';
import findFourthWallControllerFactory from '@main/factories/controllers/fourthWall/FindFourthWallControllerFactory';
import updateFourthWallControllerFactory from '@main/factories/controllers/fourthWall/UpdateFourthWallControllerFactory';
import deleteFourthWallControllerFactory from '@main/factories/controllers/fourthWall/DeleteFourthWallControllerFactory';

const router = Router();

router
  .route('/fourth-walls/:room_id')
  .post(routeAdapter(createFourthWallControllerFactory.makeCreateFourthWallController()))
  .get(routeAdapter(findFourthWallControllerFactory.makeFindFourthWallController()));

router
  .route('/fourth-walls/:id')
  .put(routeAdapter(updateFourthWallControllerFactory.makeUpdateFourthWallController()))
  .delete(routeAdapter(deleteFourthWallControllerFactory.makeDeleteFourthWallController()));

export default { router };

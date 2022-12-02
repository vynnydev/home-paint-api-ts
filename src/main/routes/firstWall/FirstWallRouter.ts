import { Router } from 'express';

import { routeAdapter } from '@main/adapters/ExpressRouteAdapter';

import createFirstWallControllerFactory from '@main/factories/controllers/firstWall/CreateFirstWallControllerFactory';
import findFirstWallControllerFactory from '@main/factories/controllers/firstWall/FindFirstWallControllerFactory';
import updateFirstWallControllerFactory from '@main/factories/controllers/firstWall/UpdateFirstWallControllerFactory';
import deleteFirstWallControllerFactory from '@main/factories/controllers/firstWall/DeleteFirstWallControllerFactory';

const router = Router();

router
  .route('/first-walls/:room_id')
  .post(routeAdapter(createFirstWallControllerFactory.makeCreateFirstWallController()))
  .get(routeAdapter(findFirstWallControllerFactory.makeFindFirstWallController()));

router
  .route('/first-walls/:id')
  .put(routeAdapter(updateFirstWallControllerFactory.makeUpdateFirstWallController()))
  .delete(routeAdapter(deleteFirstWallControllerFactory.makeDeleteFirstWallController()));

export default { router };

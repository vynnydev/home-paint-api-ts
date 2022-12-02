import { Router } from 'express';

import { routeAdapter } from '@main/adapters/ExpressRouteAdapter';

import createSecondWallControllerFactory from '@main/factories/controllers/secondWall/CreateSecondWallControllerFactory';
import findSecondWallControllerFactory from '@main/factories/controllers/secondWall/FindSecondWallControllerFactory';
import updateSecondWallControllerFactory from '@main/factories/controllers/secondWall/UpdateSecondWallControllerFactory';
import deleteSecondWallControllerFactory from '@main/factories/controllers/secondWall/DeleteSecondWallControllerFactory';

const router = Router();

router
  .route('/second-walls/:room_id')
  .post(routeAdapter(createSecondWallControllerFactory.makeCreateSecondWallController()))
  .get(routeAdapter(findSecondWallControllerFactory.makeFindSecondWallController()));

router
  .route('/second-walls/:id')
  .put(routeAdapter(updateSecondWallControllerFactory.makeUpdateSecondWallController()))
  .delete(routeAdapter(deleteSecondWallControllerFactory.makeDeleteSecondWallController()));

export default { router };

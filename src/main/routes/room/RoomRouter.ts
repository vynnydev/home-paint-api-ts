import { Router } from 'express';

import { routeAdapter } from '@main/adapters/ExpressRouteAdapter';

import createRoomControllerFactory from '@main/factories/controllers/room/CreateRoomControllerFactory';
import findRoomsControllerFactory from '@main/factories/controllers/room/FindRoomsControllerFactory';
import updateRoomControllerFactory from '@main/factories/controllers/room/UpdateRoomControllerFactory';
import deleteRoomControllerFactory from '@main/factories/controllers/room/DeleteRoomControllerFactory';

const router = Router();

router
  .route('/rooms')
  .post(routeAdapter(createRoomControllerFactory.makeCreateRoomController()))
  .get(routeAdapter(findRoomsControllerFactory.makeFindRoomsController()));

router
  .route('/rooms/:store_alias_id')
  .put(routeAdapter(updateRoomControllerFactory.makeUpdateRoomController()))
  .delete(routeAdapter(deleteRoomControllerFactory.makeDeleteRoomController()));

export default { router };

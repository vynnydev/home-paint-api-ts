import IController from '@presentation/protocols/IController';

import FindRoomsController from '@presentation/controllers/room/FindRoomsController';

import findRoomsFactory from '@main/factories/useCases/room/FindRoomsFactory';
import findRoomsPresenterFactory from '@main/factories/presenters/room/FindRoomsPresenterFactory';

const makeFindRoomsController = (): IController => {
  const findRooms = findRoomsFactory.makeFindRooms();
  const findRoomsPresenter = findRoomsPresenterFactory.makeFindRoomsPresenter();

  const findRoomsController = new FindRoomsController(findRooms, findRoomsPresenter);

  return findRoomsController;
};

export default { makeFindRoomsController };

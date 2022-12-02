import IController from '@presentation/protocols/IController';

import DeleteRoomController from '@presentation/controllers/room/DeleteRoomController';

import deleteRoomFactory from '@main/factories/useCases/room/DeleteRoomFactory';
import deleteRoomPresenterFactory from '@main/factories/presenters/room/DeleteRoomPresenterFactory';

const makeDeleteRoomController = (): IController => {
  const deleteRoom = deleteRoomFactory.makeDeleteRoom();
  const deleteRoomPresenter = deleteRoomPresenterFactory.makeDeleteRoomPresenter();

  const deleteRoomController = new DeleteRoomController(deleteRoom, deleteRoomPresenter);

  return deleteRoomController;
};

export default { makeDeleteRoomController };

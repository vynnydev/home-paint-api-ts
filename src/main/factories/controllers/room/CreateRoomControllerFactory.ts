import IController from '@presentation/protocols/IController';

import CreateRoomController from '@presentation/controllers/room/CreateRoomController';

import createRoomFactory from '@main/factories/useCases/room/CreateRoomFactory';
import createRoomPresenterFactory from '@main/factories/presenters/room/CreateRoomPresenterFactory';
import createRoomValidationFactory from '@main/factories/controllers/room/CreateRoomValidationFactory';

const makeCreateRoomController = (): IController => {
  const createRoom = createRoomFactory.makeCreateRoom();
  const createRoomPresenter = createRoomPresenterFactory.makeCreateRoomPresenter();
  const createRoomValidation = createRoomValidationFactory.makeCreateRoomValidation();

  const createRoomController = new CreateRoomController(
    createRoom,
    createRoomValidation,
    createRoomPresenter,
  );

  return createRoomController;
};

export default { makeCreateRoomController };

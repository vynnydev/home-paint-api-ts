import IController from '@presentation/protocols/IController';

import UpdateRoomController from '@presentation/controllers/room/UpdateRoomController';

import UpdateRoomFactory from '@main/factories/useCases/room/UpdateRoomFactory';
import UpdateRoomPresenterFactory from '@main/factories/presenters/room/UpdateRoomPresenterFactory';
import UpdateRoomValidationFactory from '@main/factories/controllers/room/UpdateRoomValidationFactory';

const makeUpdateRoomController = (): IController => {
  const updateRoom = UpdateRoomFactory.makeUpdateRoom();
  const updateRoomPresenter = UpdateRoomPresenterFactory.makeUpdateRoomPresenter();
  const updateRoomValidation = UpdateRoomValidationFactory.makeUpdateRoomValidation();

  const updateRoomController = new UpdateRoomController(
    updateRoom,
    updateRoomValidation,
    updateRoomPresenter,
  );

  return updateRoomController;
};

export default { makeUpdateRoomController };

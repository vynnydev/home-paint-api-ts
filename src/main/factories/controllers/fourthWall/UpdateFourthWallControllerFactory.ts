import IController from '@presentation/protocols/IController';

import UpdateFourthWallController from '@presentation/controllers/fourthWall/UpdateFourthWallController';

import UpdateFourthWallFactory from '@main/factories/useCases/fourthWall/UpdateFourthWallFactory';
import UpdateFourthWallPresenterFactory from '@main/factories/presenters/fourthWall/UpdateFourthWallPresenterFactory';
import UpdateFourthWallValidationFactory from '@main/factories/controllers/fourthWall/UpdateFourthWallValidationFactory';

const makeUpdateFourthWallController = (): IController => {
  const updateFourthWall = UpdateFourthWallFactory.makeUpdateFourthWall();
  const updateFourthWallPresenter =
    UpdateFourthWallPresenterFactory.makeUpdateFourthWallPresenter();
  const updateFourthWallValidation =
    UpdateFourthWallValidationFactory.makeUpdateFourthWallValidation();

  const updateFourthWallController = new UpdateFourthWallController(
    updateFourthWall,
    updateFourthWallValidation,
    updateFourthWallPresenter,
  );

  return updateFourthWallController;
};

export default { makeUpdateFourthWallController };

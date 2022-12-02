import IController from '@presentation/protocols/IController';

import UpdateSecondWallController from '@presentation/controllers/secondWall/UpdateSecondWallController';

import UpdateSecondWallFactory from '@main/factories/useCases/secondWall/UpdateSecondWallFactory';
import UpdateSecondWallPresenterFactory from '@main/factories/presenters/secondWall/UpdateSecondWallPresenterFactory';
import UpdateSecondWallValidationFactory from '@main/factories/controllers/secondWall/UpdateSecondWallValidationFactory';

const makeUpdateSecondWallController = (): IController => {
  const updateSecondWall = UpdateSecondWallFactory.makeUpdateSecondWall();
  const updateSecondWallPresenter = UpdateSecondWallPresenterFactory.makeUpdateSecondWallPresenter();
  const updateSecondWallValidation = UpdateSecondWallValidationFactory.makeUpdateSecondWallValidation();

  const updateSecondWallController = new UpdateSecondWallController(
    updateSecondWall,
    updateSecondWallValidation,
    updateSecondWallPresenter,
  );

  return updateSecondWallController;
};

export default { makeUpdateSecondWallController };

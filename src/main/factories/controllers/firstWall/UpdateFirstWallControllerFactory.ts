import IController from '@presentation/protocols/IController';

import UpdateFirstWallController from '@presentation/controllers/firstWall/UpdateFirstWallController';

import UpdateFirstWallFactory from '@main/factories/useCases/firstWall/UpdateFirstWallFactory';
import UpdateFirstWallPresenterFactory from '@main/factories/presenters/firstWall/UpdateFirstWallPresenterFactory';
import UpdateFirstWallValidationFactory from '@main/factories/controllers/firstWall/UpdateFirstWallValidationFactory';

const makeUpdateFirstWallController = (): IController => {
  const updateFirstWall = UpdateFirstWallFactory.makeUpdateFirstWall();
  const updateFirstWallPresenter = UpdateFirstWallPresenterFactory.makeUpdateFirstWallPresenter();
  const updateFirstWallValidation = UpdateFirstWallValidationFactory.makeUpdateFirstWallValidation();

  const updateFirstWallController = new UpdateFirstWallController(
    updateFirstWall,
    updateFirstWallValidation,
    updateFirstWallPresenter,
  );

  return updateFirstWallController;
};

export default { makeUpdateFirstWallController };

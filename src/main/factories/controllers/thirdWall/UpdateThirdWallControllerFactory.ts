import IController from '@presentation/protocols/IController';

import UpdateThirdWallController from '@presentation/controllers/thirdWall/UpdateThirdWallController';

import UpdateThirdWallFactory from '@main/factories/useCases/thirdWall/UpdateThirdWallFactory';
import UpdateThirdWallPresenterFactory from '@main/factories/presenters/thirdWall/UpdateThirdWallPresenterFactory';
import UpdateThirdWallValidationFactory from '@main/factories/controllers/thirdWall/UpdateThirdWallValidationFactory';

const makeUpdateThirdWallController = (): IController => {
  const updateThirdWall = UpdateThirdWallFactory.makeUpdateThirdWall();
  const updateThirdWallPresenter = UpdateThirdWallPresenterFactory.makeUpdateThirdWallPresenter();
  const updateThirdWallValidation = UpdateThirdWallValidationFactory.makeUpdateThirdWallValidation();

  const updateThirdWallController = new UpdateThirdWallController(
    updateThirdWall,
    updateThirdWallValidation,
    updateThirdWallPresenter,
  );

  return updateThirdWallController;
};

export default { makeUpdateThirdWallController };

import IController from '@presentation/protocols/IController';

import CreateThirdWallController from '@presentation/controllers/thirdWall/CreateThirdWallController';

import createThirdWallFactory from '@main/factories/useCases/thirdWall/CreateThirdWallFactory';
import createThirdWallPresenterFactory from '@main/factories/presenters/thirdWall/CreateThirdWallPresenterFactory';
import createThirdWallValidationFactory from '@main/factories/controllers/thirdWall/CreateThirdWallValidationFactory';

const makeCreateThirdWallController = (): IController => {
  const createThirdWall = createThirdWallFactory.makeCreateThirdWall();
  const createThirdWallPresenter = createThirdWallPresenterFactory.makeCreateThirdWallPresenter();
  const createThirdWallValidation = createThirdWallValidationFactory.makeCreateThirdWallValidation();

  const createThirdWallController = new CreateThirdWallController(
    createThirdWall,
    createThirdWallValidation,
    createThirdWallPresenter,
  );

  return createThirdWallController;
};

export default { makeCreateThirdWallController };

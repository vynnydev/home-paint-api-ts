import IController from '@presentation/protocols/IController';

import CreateFourthWallController from '@presentation/controllers/fourthWall/CreateFourthWallController';

import createFourthWallFactory from '@main/factories/useCases/fourthWall/CreateFourthWallFactory';
import createFourthWallPresenterFactory from '@main/factories/presenters/fourthWall/CreateFourthWallPresenterFactory';
import createFourthWallValidationFactory from '@main/factories/controllers/fourthWall/CreateFourthWallValidationFactory';

const makeCreateFourthWallController = (): IController => {
  const createFourthWall = createFourthWallFactory.makeCreateFourthWall();
  const createFourthWallPresenter = createFourthWallPresenterFactory.makeCreateFourthWallPresenter();
  const createFourthWallValidation = createFourthWallValidationFactory.makeCreateFourthWallValidation();

  const createFourthWallController = new CreateFourthWallController(
    createFourthWall,
    createFourthWallValidation,
    createFourthWallPresenter,
  );

  return createFourthWallController;
};

export default { makeCreateFourthWallController };

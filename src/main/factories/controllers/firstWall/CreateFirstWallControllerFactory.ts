import IController from '@presentation/protocols/IController';

import CreateFirstWallController from '@presentation/controllers/firstWall/CreateFirstWallController';

import createFirstWallFactory from '@main/factories/useCases/firstWall/CreateFirstWallFactory';
import createFirstWallPresenterFactory from '@main/factories/presenters/firstWall/CreateFirstWallPresenterFactory';
import createFirstWallValidationFactory from '@main/factories/controllers/firstWall/CreateFirstWallValidationFactory';

const makeCreateFirstWallController = (): IController => {
  const createFirstWall = createFirstWallFactory.makeCreateFirstWall();
  const createFirstWallPresenter = createFirstWallPresenterFactory.makeCreateFirstWallPresenter();
  const createFirstWallValidation = createFirstWallValidationFactory.makeCreateFirstWallValidation();

  const createFirstWallController = new CreateFirstWallController(
    createFirstWall,
    createFirstWallValidation,
    createFirstWallPresenter,
  );

  return createFirstWallController;
};

export default { makeCreateFirstWallController };

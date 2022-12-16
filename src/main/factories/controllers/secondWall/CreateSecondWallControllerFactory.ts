import IController from '@presentation/protocols/IController';

import CreateSecondWallController from '@presentation/controllers/secondWall/CreateSecondWallController';

import createSecondWallFactory from '@main/factories/useCases/secondWall/CreateSecondWallFactory';
import createSecondWallPresenterFactory from '@main/factories/presenters/secondWall/CreateSecondWallPresenterFactory';
import createSecondWallValidationFactory from '@main/factories/controllers/secondWall/CreateSecondWallValidationFactory';

const makeCreateSecondWallController = (): IController => {
  const createSecondWall = createSecondWallFactory.makeCreateSecondWall();
  const createSecondWallPresenter =
    createSecondWallPresenterFactory.makeCreateSecondWallPresenter();
  const createSecondWallValidation =
    createSecondWallValidationFactory.makeCreateSecondWallValidation();

  const createSecondWallController = new CreateSecondWallController(
    createSecondWall,
    createSecondWallValidation,
    createSecondWallPresenter,
  );

  return createSecondWallController;
};

export default { makeCreateSecondWallController };

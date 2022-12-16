import IController from '@presentation/protocols/IController';

import DeleteSecondWallController from '@presentation/controllers/secondWall/DeleteSecondWallController';

import deleteSecondWallFactory from '@main/factories/useCases/secondWall/DeleteSecondWallFactory';
import deleteSecondWallPresenterFactory from '@main/factories/presenters/secondWall/DeleteSecondWallPresenterFactory';

const makeDeleteSecondWallController = (): IController => {
  const deleteSecondWall = deleteSecondWallFactory.makeDeleteSecondWall();
  const deleteSecondWallPresenter =
    deleteSecondWallPresenterFactory.makeDeleteSecondWallPresenter();

  const deleteSecondWallController = new DeleteSecondWallController(
    deleteSecondWall,
    deleteSecondWallPresenter,
  );

  return deleteSecondWallController;
};

export default { makeDeleteSecondWallController };

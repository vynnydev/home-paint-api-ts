import IController from '@presentation/protocols/IController';

import DeleteFirstWallController from '@presentation/controllers/firstWall/DeleteFirstWallController';

import deleteFirstWallFactory from '@main/factories/useCases/firstWall/DeleteFirstWallFactory';
import deleteFirstWallPresenterFactory from '@main/factories/presenters/firstWall/DeleteFirstWallPresenterFactory';

const makeDeleteFirstWallController = (): IController => {
  const deleteFirstWall = deleteFirstWallFactory.makeDeleteFirstWall();
  const deleteFirstWallPresenter = deleteFirstWallPresenterFactory.makeDeleteFirstWallPresenter();

  const deleteFirstWallController = new DeleteFirstWallController(
    deleteFirstWall,
    deleteFirstWallPresenter,
  );

  return deleteFirstWallController;
};

export default { makeDeleteFirstWallController };

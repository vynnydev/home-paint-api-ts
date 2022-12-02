import IController from '@presentation/protocols/IController';

import DeleteFourthWallController from '@presentation/controllers/fourthWall/DeleteFourthWallController';

import deleteFourthWallFactory from '@main/factories/useCases/fourthWall/DeleteFourthWallFactory';
import deleteFourthWallPresenterFactory from '@main/factories/presenters/fourthWall/DeleteFourthWallPresenterFactory';

const makeDeleteFourthWallController = (): IController => {
  const deleteFourthWall = deleteFourthWallFactory.makeDeleteFourthWall();
  const deleteFourthWallPresenter = deleteFourthWallPresenterFactory.makeDeleteFourthWallPresenter();

  const deleteFourthWallController = new DeleteFourthWallController(
    deleteFourthWall,
    deleteFourthWallPresenter,
  );

  return deleteFourthWallController;
};

export default { makeDeleteFourthWallController };

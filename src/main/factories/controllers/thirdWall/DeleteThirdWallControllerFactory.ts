import IController from '@presentation/protocols/IController';

import DeleteThirdWallController from '@presentation/controllers/thirdWall/DeleteThirdWallController';

import deleteThirdWallFactory from '@main/factories/useCases/thirdWall/DeleteThirdWallFactory';
import deleteThirdWallPresenterFactory from '@main/factories/presenters/thirdWall/DeleteThirdWallPresenterFactory';

const makeDeleteThirdWallController = (): IController => {
  const deleteThirdWall = deleteThirdWallFactory.makeDeleteThirdWall();
  const deleteThirdWallPresenter = deleteThirdWallPresenterFactory.makeDeleteThirdWallPresenter();

  const deleteThirdWallController = new DeleteThirdWallController(
    deleteThirdWall,
    deleteThirdWallPresenter,
  );

  return deleteThirdWallController;
};

export default { makeDeleteThirdWallController };

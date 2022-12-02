import IController from '@presentation/protocols/IController';

import FindThirdWallController from '@presentation/controllers/thirdWall/FindThirdWallController';

import findThirdWallFactory from '@main/factories/useCases/thirdWall/FindThirdWallFactory';
import findThirdWallPresenterFactory from '@main/factories/presenters/thirdWall/FindThirdWallPresenterFactory';

const makeFindThirdWallController = (): IController => {
  const findThirdWall = findThirdWallFactory.makeFindThirdWall();
  const findThirdWallPresenter = findThirdWallPresenterFactory.makeFindThirdWallPresenter();

  const findThirdWallController = new FindThirdWallController(
    findThirdWall,
    findThirdWallPresenter,
  );

  return findThirdWallController;
};

export default { makeFindThirdWallController };

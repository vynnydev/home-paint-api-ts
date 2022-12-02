import IController from '@presentation/protocols/IController';

import FindFourthWallController from '@presentation/controllers/fourthWall/FindFourthWallController';

import findFourthWallFactory from '@main/factories/useCases/fourthWall/FindFourthWallFactory';
import findFourthWallPresenterFactory from '@main/factories/presenters/fourthWall/FindFourthWallPresenterFactory';

const makeFindFourthWallController = (): IController => {
  const findFourthWall = findFourthWallFactory.makeFindFourthWall();
  const findFourthWallPresenter = findFourthWallPresenterFactory.makeFindFourthWallPresenter();

  const findFourthWallController = new FindFourthWallController(
    findFourthWall,
    findFourthWallPresenter,
  );

  return findFourthWallController;
};

export default { makeFindFourthWallController };

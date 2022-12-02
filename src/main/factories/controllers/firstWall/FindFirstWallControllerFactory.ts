import IController from '@presentation/protocols/IController';

import FindFirstWallController from '@presentation/controllers/firstWall/FindFirstWallController';

import findFirstWallFactory from '@main/factories/useCases/firstWall/FindFirstWallFactory';
import findFirstWallPresenterFactory from '@main/factories/presenters/firstWall/FindFirstWallPresenterFactory';

const makeFindFirstWallController = (): IController => {
  const findFirstWall = findFirstWallFactory.makeFindFirstWall();
  const findFirstWallPresenter = findFirstWallPresenterFactory.makeFindFirstWallPresenter();

  const findFirstWallController = new FindFirstWallController(
    findFirstWall,
    findFirstWallPresenter,
  );

  return findFirstWallController;
};

export default { makeFindFirstWallController };

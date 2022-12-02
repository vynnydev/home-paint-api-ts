import IController from '@presentation/protocols/IController';

import FindSecondWallController from '@presentation/controllers/secondWall/FindSecondWallController';

import findSecondWallFactory from '@main/factories/useCases/secondWall/FindSecondWallFactory';
import findSecondWallPresenterFactory from '@main/factories/presenters/secondWall/FindSecondWallPresenterFactory';

const makeFindSecondWallController = (): IController => {
  const findSecondWall = findSecondWallFactory.makeFindSecondWall();
  const findSecondWallPresenter = findSecondWallPresenterFactory.makeFindSecondWallPresenter();

  const findSecondWallController = new FindSecondWallController(
    findSecondWall,
    findSecondWallPresenter,
  );

  return findSecondWallController;
};

export default { makeFindSecondWallController };

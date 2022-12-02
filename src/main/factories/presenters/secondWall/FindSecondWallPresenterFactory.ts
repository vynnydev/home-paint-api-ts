import IPresenter from '@presentation/protocols/IPresenter';

import FindSecondWallPresenter from '@presentation/presenters/secondWall/FindSecondWallPresenter';

const makeFindSecondWallPresenter = (): IPresenter => {
  const findSecondWallPresenter = new FindSecondWallPresenter();

  return findSecondWallPresenter;
};

export default { makeFindSecondWallPresenter };

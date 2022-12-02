import IPresenter from '@presentation/protocols/IPresenter';

import FindFirstWallPresenter from '@presentation/presenters/firstWall/FindFirstWallPresenter';

const makeFindFirstWallPresenter = (): IPresenter => {
  const findFirstWallPresenter = new FindFirstWallPresenter();

  return findFirstWallPresenter;
};

export default { makeFindFirstWallPresenter };

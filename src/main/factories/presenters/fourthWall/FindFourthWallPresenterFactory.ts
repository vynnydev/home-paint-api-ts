import IPresenter from '@presentation/protocols/IPresenter';

import FindFourthWallPresenter from '@presentation/presenters/fourthWall/FindFourthWallPresenter';

const makeFindFourthWallPresenter = (): IPresenter => {
  const findFourthWallPresenter = new FindFourthWallPresenter();

  return findFourthWallPresenter;
};

export default { makeFindFourthWallPresenter };

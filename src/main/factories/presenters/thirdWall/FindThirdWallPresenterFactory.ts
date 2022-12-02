import IPresenter from '@presentation/protocols/IPresenter';

import FindThirdWallPresenter from '@presentation/presenters/thirdWall/FindThirdWallPresenter';

const makeFindThirdWallPresenter = (): IPresenter => {
  const findThirdWallPresenter = new FindThirdWallPresenter();

  return findThirdWallPresenter;
};

export default { makeFindThirdWallPresenter };

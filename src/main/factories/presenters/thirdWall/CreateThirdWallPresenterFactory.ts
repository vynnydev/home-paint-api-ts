import IPresenter from '@presentation/protocols/IPresenter';

import CreateThirdWallPresenter from '@presentation/presenters/thirdWall/CreateThirdWallPresenter';

const makeCreateThirdWallPresenter = (): IPresenter => {
  const createThirdWallPresenter = new CreateThirdWallPresenter();

  return createThirdWallPresenter;
};

export default { makeCreateThirdWallPresenter };

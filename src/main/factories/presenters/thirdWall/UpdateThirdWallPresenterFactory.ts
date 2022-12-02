import IPresenter from '@presentation/protocols/IPresenter';

import UpdateThirdWallPresenter from '@presentation/presenters/thirdWall/UpdateThirdWallPresenter';

const makeUpdateThirdWallPresenter = (): IPresenter => {
  const updateThirdWallPresenter = new UpdateThirdWallPresenter();

  return updateThirdWallPresenter;
};

export default { makeUpdateThirdWallPresenter };

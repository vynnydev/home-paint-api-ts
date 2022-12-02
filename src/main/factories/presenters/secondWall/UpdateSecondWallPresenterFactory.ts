import IPresenter from '@presentation/protocols/IPresenter';

import UpdateSecondWallPresenter from '@presentation/presenters/secondWall/UpdateSecondWallPresenter';

const makeUpdateSecondWallPresenter = (): IPresenter => {
  const updateSecondWallPresenter = new UpdateSecondWallPresenter();

  return updateSecondWallPresenter;
};

export default { makeUpdateSecondWallPresenter };

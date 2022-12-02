import IPresenter from '@presentation/protocols/IPresenter';

import UpdateFirstWallPresenter from '@presentation/presenters/firstWall/UpdateFirstWallPresenter';

const makeUpdateFirstWallPresenter = (): IPresenter => {
  const updateFirstWallPresenter = new UpdateFirstWallPresenter();

  return updateFirstWallPresenter;
};

export default { makeUpdateFirstWallPresenter };

import IPresenter from '@presentation/protocols/IPresenter';

import DeleteFirstWallPresenter from '@presentation/presenters/firstWall/DeleteFirstWallPresenter';

const makeDeleteFirstWallPresenter = (): IPresenter => {
  const deleteFirstWallPresenter = new DeleteFirstWallPresenter();

  return deleteFirstWallPresenter;
};

export default { makeDeleteFirstWallPresenter };

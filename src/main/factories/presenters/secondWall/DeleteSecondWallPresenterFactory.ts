import IPresenter from '@presentation/protocols/IPresenter';

import DeleteSecondWallPresenter from '@presentation/presenters/secondWall/DeleteSecondWallPresenter';

const makeDeleteSecondWallPresenter = (): IPresenter => {
  const deleteSecondWallPresenter = new DeleteSecondWallPresenter();

  return deleteSecondWallPresenter;
};

export default { makeDeleteSecondWallPresenter };

import IPresenter from '@presentation/protocols/IPresenter';

import UpdateFourthWallPresenter from '@presentation/presenters/fourthWall/UpdateFourthWallPresenter';

const makeUpdateFourthWallPresenter = (): IPresenter => {
  const updateFourthWallPresenter = new UpdateFourthWallPresenter();

  return updateFourthWallPresenter;
};

export default { makeUpdateFourthWallPresenter };

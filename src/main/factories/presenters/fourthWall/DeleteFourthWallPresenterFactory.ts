import IPresenter from '@presentation/protocols/IPresenter';

import DeleteFourthWallPresenter from '@presentation/presenters/fourthWall/DeleteFourthWallPresenter';

const makeDeleteFourthWallPresenter = (): IPresenter => {
  const deleteFourthWallPresenter = new DeleteFourthWallPresenter();

  return deleteFourthWallPresenter;
};

export default { makeDeleteFourthWallPresenter };

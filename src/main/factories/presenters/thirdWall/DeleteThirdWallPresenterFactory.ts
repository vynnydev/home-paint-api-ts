import IPresenter from '@presentation/protocols/IPresenter';

import DeleteThirdWallPresenter from '@presentation/presenters/thirdWall/DeleteThirdWallPresenter';

const makeDeleteThirdWallPresenter = (): IPresenter => {
  const deleteThirdWallPresenter = new DeleteThirdWallPresenter();

  return deleteThirdWallPresenter;
};

export default { makeDeleteThirdWallPresenter };

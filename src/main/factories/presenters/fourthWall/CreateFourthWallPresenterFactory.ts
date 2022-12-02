import IPresenter from '@presentation/protocols/IPresenter';

import CreateFourthWallPresenter from '@presentation/presenters/fourthWall/CreateFourthWallPresenter';

const makeCreateFourthWallPresenter = (): IPresenter => {
  const createFourthWallPresenter = new CreateFourthWallPresenter();

  return createFourthWallPresenter;
};

export default { makeCreateFourthWallPresenter };

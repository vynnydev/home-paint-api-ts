import IPresenter from '@presentation/protocols/IPresenter';

import CreateFirstWallPresenter from '@presentation/presenters/firstWall/CreateFirstWallPresenter';

const makeCreateFirstWallPresenter = (): IPresenter => {
  const createFirstWallPresenter = new CreateFirstWallPresenter();

  return createFirstWallPresenter;
};

export default { makeCreateFirstWallPresenter };

import IPresenter from '@presentation/protocols/IPresenter';

import CreateSecondWallPresenter from '@presentation/presenters/secondWall/CreateSecondWallPresenter';

const makeCreateSecondWallPresenter = (): IPresenter => {
  const createSecondWallPresenter = new CreateSecondWallPresenter();

  return createSecondWallPresenter;
};

export default { makeCreateSecondWallPresenter };

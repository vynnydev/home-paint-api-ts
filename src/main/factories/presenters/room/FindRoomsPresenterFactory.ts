import IPresenter from '@presentation/protocols/IPresenter';

import FindRoomsPresenter from '@presentation/presenters/room/FindRoomsPresenter';

const makeFindRoomsPresenter = (): IPresenter => {
  const findRoomsPresenter = new FindRoomsPresenter();

  return findRoomsPresenter;
};

export default { makeFindRoomsPresenter };

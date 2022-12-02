import IPresenter from '@presentation/protocols/IPresenter';

import CreateRoomPresenter from '@presentation/presenters/room/CreateRoomPresenter';

const makeCreateRoomPresenter = (): IPresenter => {
  const createRoomPresenter = new CreateRoomPresenter();

  return createRoomPresenter;
};

export default { makeCreateRoomPresenter };

import IPresenter from '@presentation/protocols/IPresenter';

import UpdateRoomPresenter from '@presentation/presenters/room/UpdateRoomPresenter';

const makeUpdateRoomPresenter = (): IPresenter => {
  const updateRoomPresenter = new UpdateRoomPresenter();

  return updateRoomPresenter;
};

export default { makeUpdateRoomPresenter };

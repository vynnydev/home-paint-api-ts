import IPresenter from '@presentation/protocols/IPresenter';

import DeleteRoomPresenter from '@presentation/presenters/room/DeleteRoomPresenter';

const makeDeleteRoomPresenter = (): IPresenter => {
  const deleteRoomPresenter = new DeleteRoomPresenter();

  return deleteRoomPresenter;
};

export default { makeDeleteRoomPresenter };

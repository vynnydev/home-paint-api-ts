import DeleteRoomController from '@presentation/controllers/room/DeleteRoomController';

import FakeDeleteRoom from '@data/useCases/room/fakes/FakeDeleteRoom';
import FakeDeleteRoomPresenter from '@presentation/presenters/room/fakes/FakeDeleteRoomPresenter';

let deleteRoomController: DeleteRoomController;

let fakeDeleteRoom: FakeDeleteRoom;
let fakeDeleteRoomPresenter: FakeDeleteRoomPresenter;

describe('DeleteRoomController', () => {
  beforeEach(() => {
    fakeDeleteRoom = new FakeDeleteRoom();
    fakeDeleteRoomPresenter = new FakeDeleteRoomPresenter();

    deleteRoomController = new DeleteRoomController(fakeDeleteRoom, fakeDeleteRoomPresenter);
  });

  it('should be able to call delete room with correct values', async () => {
    const deleteSpy = jest.spyOn(fakeDeleteRoom, 'delete');

    await deleteRoomController.handle({ params: { room_alias_id: 'any_alias_id' } });

    expect(deleteSpy).toHaveBeenCalledWith('any_alias_id');
  });

  it('should be able to throw if delete room throws', async () => {
    jest.spyOn(fakeDeleteRoom, 'delete').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteRoomController.handle({ params: { room_alias_id: 'any_alias_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeDeleteRoomPresenter, 'reply');

    await deleteRoomController.handle({ params: { room_alias_id: 'any_alias_id' } });

    expect(replySpy).toHaveBeenCalledWith({ data: {} });
  });

  it('should be able to throw if reply throws', async () => {
    jest.spyOn(fakeDeleteRoomPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteRoomController.handle({ params: { room_alias_id: 'any_alias_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });
});

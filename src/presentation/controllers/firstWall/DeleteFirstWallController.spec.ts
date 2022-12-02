import DeleteFirstWallController from '@presentation/controllers/firstWall/DeleteFirstWallController';

import FakeDeleteFirstWall from '@data/useCases/firstWall/fakes/FakeDeleteFirstWall';
import FakeDeleteFirstWallPresenter from '@presentation/presenters/firstWall/fakes/FakeDeleteFirstWallPresenter';

let deleteFirstWallController: DeleteFirstWallController;

let fakeDeleteFirstWall: FakeDeleteFirstWall;
let fakeDeleteFirstWallPresenter: FakeDeleteFirstWallPresenter;

describe('DeleteFirstWallController', () => {
  beforeEach(() => {
    fakeDeleteFirstWall = new FakeDeleteFirstWall();
    fakeDeleteFirstWallPresenter = new FakeDeleteFirstWallPresenter();

    deleteFirstWallController = new DeleteFirstWallController(fakeDeleteFirstWall, fakeDeleteFirstWallPresenter);
  });

  it('should be able to call delete first wall with correct values', async () => {
    const deleteSpy = jest.spyOn(fakeDeleteFirstWall, 'delete');

    await deleteFirstWallController.handle({ params: { room_id: 'any_room_id' } });

    expect(deleteSpy).toHaveBeenCalledWith('any_room_id');
  });

  it('should be able to throw if delete first wall throws', async () => {
    jest.spyOn(fakeDeleteFirstWall, 'delete').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteFirstWallController.handle({ params: { room_id: 'any_room_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeDeleteFirstWallPresenter, 'reply');

    await deleteFirstWallController.handle({ params: { room_id: 'any_room_id' } });

    expect(replySpy).toHaveBeenCalledWith({ data: {} });
  });

  it('should be able to throw if reply throws', async () => {
    jest.spyOn(fakeDeleteFirstWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteFirstWallController.handle({ params: { room_id: 'any_room_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });
});

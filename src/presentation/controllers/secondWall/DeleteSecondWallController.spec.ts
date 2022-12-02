import DeleteSecondWallController from '@presentation/controllers/secondWall/DeleteSecondWallController';

import FakeDeleteSecondWall from '@data/useCases/secondWall/fakes/FakeDeleteSecondWall';
import FakeDeleteSecondWallPresenter from '@presentation/presenters/secondWall/fakes/FakeDeleteSecondWallPresenter';

let deleteSecondWallController: DeleteSecondWallController;

let fakeDeleteSecondWall: FakeDeleteSecondWall;
let fakeDeleteSecondWallPresenter: FakeDeleteSecondWallPresenter;

describe('DeleteSecondWallController', () => {
  beforeEach(() => {
    fakeDeleteSecondWall = new FakeDeleteSecondWall();
    fakeDeleteSecondWallPresenter = new FakeDeleteSecondWallPresenter();

    deleteSecondWallController = new DeleteSecondWallController(fakeDeleteSecondWall, fakeDeleteSecondWallPresenter);
  });

  it('should be able to call delete second wall with correct values', async () => {
    const deleteSpy = jest.spyOn(fakeDeleteSecondWall, 'delete');

    await deleteSecondWallController.handle({ params: { room_id: 'any_room_id' } });

    expect(deleteSpy).toHaveBeenCalledWith('any_room_id');
  });

  it('should be able to throw if delete second wall throws', async () => {
    jest.spyOn(fakeDeleteSecondWall, 'delete').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteSecondWallController.handle({ params: { room_id: 'any_room_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeDeleteSecondWallPresenter, 'reply');

    await deleteSecondWallController.handle({ params: { room_id: 'any_room_id' } });

    expect(replySpy).toHaveBeenCalledWith({ data: {} });
  });

  it('should be able to throw if reply throws', async () => {
    jest.spyOn(fakeDeleteSecondWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteSecondWallController.handle({ params: { room_id: 'any_room_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });
});

import DeleteFourthWallController from '@presentation/controllers/fourthWall/DeleteFourthWallController';

import FakeDeleteFourthWall from '@data/useCases/fourthWall/fakes/FakeDeleteFourthWall';
import FakeDeleteFourthWallPresenter from '@presentation/presenters/fourthWall/fakes/FakeDeleteFourthWallPresenter';

let deleteFourthWallController: DeleteFourthWallController;

let fakeDeleteFourthWall: FakeDeleteFourthWall;
let fakeDeleteFourthWallPresenter: FakeDeleteFourthWallPresenter;

describe('DeleteFourthWallController', () => {
  beforeEach(() => {
    fakeDeleteFourthWall = new FakeDeleteFourthWall();
    fakeDeleteFourthWallPresenter = new FakeDeleteFourthWallPresenter();

    deleteFourthWallController = new DeleteFourthWallController(fakeDeleteFourthWall, fakeDeleteFourthWallPresenter);
  });

  it('should be able to call delete first wall with correct values', async () => {
    const deleteSpy = jest.spyOn(fakeDeleteFourthWall, 'delete');

    await deleteFourthWallController.handle({ params: { room_id: 'any_room_id' } });

    expect(deleteSpy).toHaveBeenCalledWith('any_room_id');
  });

  it('should be able to throw if delete first wall throws', async () => {
    jest.spyOn(fakeDeleteFourthWall, 'delete').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteFourthWallController.handle({ params: { room_id: 'any_room_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeDeleteFourthWallPresenter, 'reply');

    await deleteFourthWallController.handle({ params: { room_id: 'any_room_id' } });

    expect(replySpy).toHaveBeenCalledWith({ data: {} });
  });

  it('should be able to throw if reply throws', async () => {
    jest.spyOn(fakeDeleteFourthWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteFourthWallController.handle({ params: { room_id: 'any_room_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });
});

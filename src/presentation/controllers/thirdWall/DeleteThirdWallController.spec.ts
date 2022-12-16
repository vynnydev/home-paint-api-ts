import DeleteThirdWallController from '@presentation/controllers/thirdWall/DeleteThirdWallController';

import FakeDeleteThirdWall from '@data/useCases/thirdWall/fakes/FakeDeleteThirdWall';
import FakeDeleteThirdWallPresenter from '@presentation/presenters/thirdWall/fakes/FakeDeleteThirdWallPresenter';

let deleteThirdWallController: DeleteThirdWallController;

let fakeDeleteThirdWall: FakeDeleteThirdWall;
let fakeDeleteThirdWallPresenter: FakeDeleteThirdWallPresenter;

describe('DeleteThirdWallController', () => {
  beforeEach(() => {
    fakeDeleteThirdWall = new FakeDeleteThirdWall();
    fakeDeleteThirdWallPresenter = new FakeDeleteThirdWallPresenter();

    deleteThirdWallController = new DeleteThirdWallController(
      fakeDeleteThirdWall,
      fakeDeleteThirdWallPresenter,
    );
  });

  it('should be able to call delete third wall with correct values', async () => {
    const deleteSpy = jest.spyOn(fakeDeleteThirdWall, 'delete');

    await deleteThirdWallController.handle({ params: { room_id: 'any_room_id' } });

    expect(deleteSpy).toHaveBeenCalledWith('any_room_id');
  });

  it('should be able to throw if delete third wall throws', async () => {
    jest.spyOn(fakeDeleteThirdWall, 'delete').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteThirdWallController.handle({ params: { room_id: 'any_room_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeDeleteThirdWallPresenter, 'reply');

    await deleteThirdWallController.handle({ params: { room_id: 'any_room_id' } });

    expect(replySpy).toHaveBeenCalledWith({ data: {} });
  });

  it('should be able to throw if reply throws', async () => {
    jest.spyOn(fakeDeleteThirdWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      deleteThirdWallController.handle({ params: { room_id: 'any_room_id' } }),
    ).rejects.toBeInstanceOf(Error);
  });
});

import AppError from '@utils/errors/AppError';

import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import FakeThirdWallRepository from '@infra/database/repositories/thirdWall/fakes/FakeThirdWallRepository';

import DeleteThirdWall from '@data/useCases/thirdWall/DeleteThirdWall';

let fakeThirdWallRepository: FakeThirdWallRepository;

let deleteThirdWall: DeleteThirdWall;

describe('DeleteThirdWall', () => {
  beforeEach(() => {
    fakeThirdWallRepository = new FakeThirdWallRepository();

    deleteThirdWall = new DeleteThirdWall(fakeThirdWallRepository);
  });

  it('should be able to call delete third wall with correct values', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(mockThirdWallModel.mock());

    const updateSpy = jest.spyOn(fakeThirdWallRepository, 'findByRoomId');

    await deleteThirdWall.delete(createdThirdWall.room_id);

    expect(updateSpy).toHaveBeenCalledWith(createdThirdWall.room_id);
  });

  it('should be able to throw if delete third wall throws', async () => {
    await fakeThirdWallRepository.create(mockThirdWallModel.mock());

    jest.spyOn(fakeThirdWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(deleteThirdWall.delete('any_room_id')).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if third wall does not exists', async () => {
    await expect(deleteThirdWall.delete('any_room_id')).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to throw if delete return undefined', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(mockThirdWallModel.mock());

    jest.spyOn(fakeThirdWallRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(deleteThirdWall.delete(createdThirdWall.id)).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete room', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(mockThirdWallModel.mock());

    const error = await deleteThirdWall.delete(createdThirdWall.room_id);

    expect(error).toBeFalsy();
  });
});

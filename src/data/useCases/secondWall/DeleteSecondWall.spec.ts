import AppError from '@utils/errors/AppError';

import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import FakeSecondWallRepository from '@infra/database/repositories/secondWall/fakes/FakeSecondWallRepository';

import DeleteSecondWall from '@data/useCases/secondWall/DeleteSecondWall';

let fakeSecondWallRepository: FakeSecondWallRepository;

let deleteSecondWall: DeleteSecondWall;

describe('DeleteSecondWall', () => {
  beforeEach(() => {
    fakeSecondWallRepository = new FakeSecondWallRepository();

    deleteSecondWall = new DeleteSecondWall(fakeSecondWallRepository);
  });

  it('should be able to call delete second wall with correct values', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(mockSecondWallModel.mock());

    const updateSpy = jest.spyOn(fakeSecondWallRepository, 'findByRoomId');

    await deleteSecondWall.delete(createdSecondWall.room_id);

    expect(updateSpy).toHaveBeenCalledWith(createdSecondWall.room_id);
  });

  it('should be able to throw if delete second wall throws', async () => {
    await fakeSecondWallRepository.create(mockSecondWallModel.mock());

    jest.spyOn(fakeSecondWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(deleteSecondWall.delete('any_room_id')).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if second wall does not exists', async () => {
    await expect(deleteSecondWall.delete('any_room_id')).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to throw if delete return undefined', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(mockSecondWallModel.mock());

    jest.spyOn(fakeSecondWallRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(deleteSecondWall.delete(createdSecondWall.id)).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete room', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(mockSecondWallModel.mock());

    const error = await deleteSecondWall.delete(createdSecondWall.room_id);

    expect(error).toBeFalsy();
  });
});

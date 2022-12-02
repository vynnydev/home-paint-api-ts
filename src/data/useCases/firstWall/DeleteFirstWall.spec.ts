import AppError from '@utils/errors/AppError';

import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import FakeFirstWallRepository from '@infra/database/repositories/firstWall/fakes/FakeFirstWallRepository';

import DeleteFirstWall from '@data/useCases/firstWall/DeleteFirstWall';

let fakeFirstWallRepository: FakeFirstWallRepository;

let deleteFirstWall: DeleteFirstWall;

describe('DeleteFirstWall', () => {
  beforeEach(() => {
    fakeFirstWallRepository = new FakeFirstWallRepository();

    deleteFirstWall = new DeleteFirstWall(fakeFirstWallRepository);
  });

  it('should be able to call delete second wall with correct values', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(mockFirstWallModel.mock());

    const updateSpy = jest.spyOn(fakeFirstWallRepository, 'findByRoomId');

    await deleteFirstWall.delete(createdFirstWall.room_id);

    expect(updateSpy).toHaveBeenCalledWith(createdFirstWall.room_id);
  });

  it('should be able to throw if delete second wall throws', async () => {
    await fakeFirstWallRepository.create(mockFirstWallModel.mock());

    jest.spyOn(fakeFirstWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(deleteFirstWall.delete('any_room_id')).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if second wall does not exists', async () => {
    await expect(deleteFirstWall.delete('any_room_id')).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to throw if delete return undefined', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(mockFirstWallModel.mock());

    jest.spyOn(fakeFirstWallRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(deleteFirstWall.delete(createdFirstWall.id)).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete first wall', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(mockFirstWallModel.mock());

    const error = await deleteFirstWall.delete(createdFirstWall.room_id);

    expect(error).toBeFalsy();
  });
});

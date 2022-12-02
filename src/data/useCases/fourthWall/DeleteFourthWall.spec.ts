import AppError from '@utils/errors/AppError';

import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import FakeFourthWallRepository from '@infra/database/repositories/fourthWall/fakes/FakeFourthWallRepository';

import DeleteFourthWall from '@data/useCases/fourthWall/DeleteFourthWall';

let fakeFourthWallRepository: FakeFourthWallRepository;

let deleteFourthWall: DeleteFourthWall;

describe('DeleteFourthWall', () => {
  beforeEach(() => {
    fakeFourthWallRepository = new FakeFourthWallRepository();

    deleteFourthWall = new DeleteFourthWall(fakeFourthWallRepository);
  });

  it('should be able to call delete fourth wall with correct values', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(mockFourthWallModel.mock());

    const updateSpy = jest.spyOn(fakeFourthWallRepository, 'findByRoomId');

    await deleteFourthWall.delete(createdFourthWall.room_id);

    expect(updateSpy).toHaveBeenCalledWith(createdFourthWall.room_id);
  });

  it('should be able to throw if delete fourth wall throws', async () => {
    await fakeFourthWallRepository.create(mockFourthWallModel.mock());

    jest.spyOn(fakeFourthWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(deleteFourthWall.delete('any_room_id')).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if fourth wall does not exists', async () => {
    await expect(deleteFourthWall.delete('any_room_id')).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to throw if delete return undefined', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(mockFourthWallModel.mock());

    jest.spyOn(fakeFourthWallRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(deleteFourthWall.delete(createdFourthWall.id)).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete fourth wall', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(mockFourthWallModel.mock());

    const error = await deleteFourthWall.delete(createdFourthWall.room_id);

    expect(error).toBeFalsy();
  });
});

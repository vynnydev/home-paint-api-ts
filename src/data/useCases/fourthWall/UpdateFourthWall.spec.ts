import AppError from '@utils/errors/AppError';

import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import FakeFourthWallRepository from '@infra/database/repositories/fourthWall/fakes/FakeFourthWallRepository';

import UpdateFourthWall from '@data/useCases/fourthWall/UpdateFourthWall';

let fakeFourthWallRepository: FakeFourthWallRepository;

let updateFourthWall: UpdateFourthWall;

describe('UpdateFourthWall', () => {
  beforeEach(() => {
    fakeFourthWallRepository = new FakeFourthWallRepository();

    updateFourthWall = new UpdateFourthWall(fakeFourthWallRepository);
  });

  it('should be able to call find fourth wall by room id with correct values', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(
      mockFourthWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const findByRoomId = jest.spyOn(fakeFourthWallRepository, 'findByRoomId');

    await updateFourthWall.update({
      room_id: createdFourthWall.room_id,
      data: { height: 3 },
    });

    expect(findByRoomId).toHaveBeenCalledWith(createdFourthWall.room_id);
  });

  it('should be able to throw if find fourth wall by room id throws', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(mockFourthWallModel.mock());

    jest.spyOn(fakeFourthWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateFourthWall.update({
        room_id: createdFourthWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if fourth wall does not exists', async () => {
    await expect(
      updateFourthWall.update({
        room_id: 'any_room_id',
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call update fourth wall with correct values', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(
      mockFourthWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const updateSpy = jest.spyOn(fakeFourthWallRepository, 'findByRoomId');

    await updateFourthWall.update({
      room_id: createdFourthWall.room_id,
      data: { height: 3 },
    });

    expect(updateSpy).toHaveBeenCalledWith(createdFourthWall.room_id);
  });

  it('should be able to throw if update fourth wall throws', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(mockFourthWallModel.mock());

    jest.spyOn(fakeFourthWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateFourthWall.update({
        room_id: createdFourthWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if update return undefined', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(mockFourthWallModel.mock());

    jest.spyOn(fakeFourthWallRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(
      updateFourthWall.update({
        room_id: createdFourthWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update fourth wall', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(
      mockFourthWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const updatedFourthWall = await updateFourthWall.update({
      room_id: createdFourthWall.room_id,
      data: { height: 3 },
    });

    expect(updatedFourthWall).toEqual({
      id: updatedFourthWall.id,
      height: createdFourthWall.height,
      width: createdFourthWall.width,
      door_quantity: createdFourthWall.door_quantity,
      window_quantity: createdFourthWall.window_quantity,
      room_id: createdFourthWall.room_id,
      created_at: updatedFourthWall.created_at,
      updated_at: updatedFourthWall.updated_at,
    });
  });
});

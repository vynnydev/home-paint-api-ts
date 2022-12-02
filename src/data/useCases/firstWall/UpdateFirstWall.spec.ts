import AppError from '@utils/errors/AppError';

import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import FakeFirstWallRepository from '@infra/database/repositories/firstWall/fakes/FakeFirstWallRepository';

import UpdateFirstWall from '@data/useCases/firstWall/UpdateFirstWall';

let fakeFirstWallRepository: FakeFirstWallRepository;

let updateFirstWall: UpdateFirstWall;

describe('UpdateFirstWall', () => {
  beforeEach(() => {
    fakeFirstWallRepository = new FakeFirstWallRepository();

    updateFirstWall = new UpdateFirstWall(fakeFirstWallRepository);
  });

  it('should be able to call find first wall by room id with correct values', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(
      mockFirstWallModel.mock({
        room_id: 'any_room_id',
       }),
    );

    const findByRoomId = jest.spyOn(fakeFirstWallRepository, 'findByRoomId');

    await updateFirstWall.update({
      room_id: createdFirstWall.room_id,
      data: { height: 3 },
    });

    expect(findByRoomId).toHaveBeenCalledWith(createdFirstWall.room_id);
  });

  it('should be able to throw if find first wall by room id throws', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(mockFirstWallModel.mock());

    jest.spyOn(fakeFirstWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateFirstWall.update({
        room_id: createdFirstWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if first wall does not exists', async () => {
    await expect(
      updateFirstWall.update({
        room_id: 'any_room_id',
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call update first wall with correct values', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(
      mockFirstWallModel.mock({
        room_id: 'any_room_id'
       }),
    );

    const updateSpy = jest.spyOn(fakeFirstWallRepository, 'findByRoomId');

    await updateFirstWall.update({
      room_id: createdFirstWall.room_id,
      data: { height: 3 },
    });

    expect(updateSpy).toHaveBeenCalledWith(createdFirstWall.room_id);
  });

  it('should be able to throw if update first wall throws', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(mockFirstWallModel.mock());

    jest.spyOn(fakeFirstWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateFirstWall.update({
        room_id: createdFirstWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if update return undefined', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(mockFirstWallModel.mock());

    jest.spyOn(fakeFirstWallRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(
      updateFirstWall.update({
        room_id: createdFirstWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update first wall', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(
      mockFirstWallModel.mock({
        room_id: 'any_room_id'
       }),
    );

    const updatedFirstWall = await updateFirstWall.update({
      room_id: createdFirstWall.room_id,
      data: { height: 3 },
    });

    expect(updatedFirstWall).toEqual({
      id: updatedFirstWall.id,
      height: createdFirstWall.height,
      width: createdFirstWall.width,
      door_quantity: createdFirstWall.door_quantity,
      window_quantity: createdFirstWall.window_quantity,
      room_id: createdFirstWall.room_id,
      created_at: updatedFirstWall.created_at,
      updated_at: updatedFirstWall.updated_at,
    });
  });
});

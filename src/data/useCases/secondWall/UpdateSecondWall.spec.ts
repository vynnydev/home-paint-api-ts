import AppError from '@utils/errors/AppError';

import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import FakeSecondWallRepository from '@infra/database/repositories/secondWall/fakes/FakeSecondWallRepository';

import UpdateSecondWall from '@data/useCases/secondWall/UpdateSecondWall';

let fakeSecondWallRepository: FakeSecondWallRepository;

let updateSecondWall: UpdateSecondWall;

describe('UpdateSecondWall', () => {
  beforeEach(() => {
    fakeSecondWallRepository = new FakeSecondWallRepository();

    updateSecondWall = new UpdateSecondWall(fakeSecondWallRepository);
  });

  it('should be able to call find second wall by room id with correct values', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(
      mockSecondWallModel.mock({
        room_id: 'any_room_id',
       }),
    );

    const findByRoomId = jest.spyOn(fakeSecondWallRepository, 'findByRoomId');

    await updateSecondWall.update({
      room_id: createdSecondWall.room_id,
      data: { height: 3 },
    });

    expect(findByRoomId).toHaveBeenCalledWith(createdSecondWall.room_id);
  });

  it('should be able to throw if find second wall by room id throws', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(mockSecondWallModel.mock());

    jest.spyOn(fakeSecondWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateSecondWall.update({
        room_id: createdSecondWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if second wall does not exists', async () => {
    await expect(
      updateSecondWall.update({
        room_id: 'any_room_id',
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call update second wall with correct values', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(
      mockSecondWallModel.mock({
        room_id: 'any_room_id'
       }),
    );

    const updateSpy = jest.spyOn(fakeSecondWallRepository, 'findByRoomId');

    await updateSecondWall.update({
      room_id: createdSecondWall.room_id,
      data: { height: 3 },
    });

    expect(updateSpy).toHaveBeenCalledWith(createdSecondWall.room_id);
  });

  it('should be able to throw if update second wall throws', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(mockSecondWallModel.mock());

    jest.spyOn(fakeSecondWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateSecondWall.update({
        room_id: createdSecondWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if update return undefined', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(mockSecondWallModel.mock());

    jest.spyOn(fakeSecondWallRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(
      updateSecondWall.update({
        room_id: createdSecondWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update second wall', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(
      mockSecondWallModel.mock({
        room_id: 'any_room_id'
       }),
    );

    const updatedSecondWall = await updateSecondWall.update({
      room_id: createdSecondWall.room_id,
      data: { height: 3 },
    });

    expect(updatedSecondWall).toEqual({
      id: updatedSecondWall.id,
      height: createdSecondWall.height,
      width: createdSecondWall.width,
      door_quantity: createdSecondWall.door_quantity,
      window_quantity: createdSecondWall.window_quantity,
      room_id: createdSecondWall.room_id,
      created_at: updatedSecondWall.created_at,
      updated_at: updatedSecondWall.updated_at,
    });
  });
});

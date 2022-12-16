import AppError from '@utils/errors/AppError';

import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import FakeThirdWallRepository from '@infra/database/repositories/thirdWall/fakes/FakeThirdWallRepository';

import UpdateThirdWall from '@data/useCases/thirdWall/UpdateThirdWall';

let fakeThirdWallRepository: FakeThirdWallRepository;

let updateThirdWall: UpdateThirdWall;

describe('UpdateThirdWall', () => {
  beforeEach(() => {
    fakeThirdWallRepository = new FakeThirdWallRepository();

    updateThirdWall = new UpdateThirdWall(fakeThirdWallRepository);
  });

  it('should be able to call find third wall by room id with correct values', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(
      mockThirdWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const findByRoomId = jest.spyOn(fakeThirdWallRepository, 'findByRoomId');

    await updateThirdWall.update({
      room_id: createdThirdWall.room_id,
      data: { height: 3 },
    });

    expect(findByRoomId).toHaveBeenCalledWith(createdThirdWall.room_id);
  });

  it('should be able to throw if find third wall by room id throws', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(mockThirdWallModel.mock());

    jest.spyOn(fakeThirdWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateThirdWall.update({
        room_id: createdThirdWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if third wall does not exists', async () => {
    await expect(
      updateThirdWall.update({
        room_id: 'any_room_id',
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call update third wall with correct values', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(
      mockThirdWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const updateSpy = jest.spyOn(fakeThirdWallRepository, 'findByRoomId');

    await updateThirdWall.update({
      room_id: createdThirdWall.room_id,
      data: { height: 3 },
    });

    expect(updateSpy).toHaveBeenCalledWith(createdThirdWall.room_id);
  });

  it('should be able to throw if update third wall throws', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(mockThirdWallModel.mock());

    jest.spyOn(fakeThirdWallRepository, 'findByRoomId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateThirdWall.update({
        room_id: createdThirdWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if update return undefined', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(mockThirdWallModel.mock());

    jest.spyOn(fakeThirdWallRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(
      updateThirdWall.update({
        room_id: createdThirdWall.room_id,
        data: { height: 3 },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update third wall', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(
      mockThirdWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const updatedThirdWall = await updateThirdWall.update({
      room_id: createdThirdWall.room_id,
      data: { height: 3 },
    });

    expect(updatedThirdWall).toEqual({
      id: updatedThirdWall.id,
      height: createdThirdWall.height,
      width: createdThirdWall.width,
      door_quantity: createdThirdWall.door_quantity,
      window_quantity: createdThirdWall.window_quantity,
      room_id: createdThirdWall.room_id,
      created_at: updatedThirdWall.created_at,
      updated_at: updatedThirdWall.updated_at,
    });
  });
});

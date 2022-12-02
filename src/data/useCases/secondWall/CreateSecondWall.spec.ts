import AppError from '@utils/errors/AppError';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';
import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import FakeRoomRepository from '@infra/database/repositories/room/fakes/FakeRoomRepository';

import FakeSecondWallRepository from '@infra/database/repositories/secondWall/fakes/FakeSecondWallRepository';

import CreateSecondWall from '@data/useCases/secondWall/CreateSecondWall';

let fakeRoomRepository: FakeRoomRepository;

let fakeSecondWallRepository: FakeSecondWallRepository;

let createSecondWall: CreateSecondWall;

describe('CreateSecondWall', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();
    fakeSecondWallRepository = new FakeSecondWallRepository();

    createSecondWall = new CreateSecondWall(fakeRoomRepository, fakeSecondWallRepository);
  });

  it('should be able to call find second wall by alias id with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const findByAliasIdSpy = jest.spyOn(fakeRoomRepository, 'findByAliasId');

    await createSecondWall.create({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
      room_alias_id: createdRoom.alias_id,
    });

    expect(findByAliasIdSpy).toHaveBeenCalledWith(createdRoom.alias_id);
  });

  it('should be able to throw if find by alias id throws', async () => {
    await fakeRoomRepository.create(mockRoomModel.mock());

    jest.spyOn(fakeRoomRepository, 'findByAliasId').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createSecondWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: 'any_alias_id',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if second wall does not exists', async () => {
    await expect(
      createSecondWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: 'any_alias_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call create second wall with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const createSpy = jest.spyOn(fakeSecondWallRepository, 'create');

    await createSecondWall.create({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
      room_alias_id: createdRoom.alias_id,
    });

    expect(createSpy).toHaveBeenCalledWith({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
      room_id: createdRoom.id,
    });
  });

  it('should be able to throw if create second wall throws', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    await fakeSecondWallRepository.create(mockSecondWallModel.mock());

    jest.spyOn(fakeSecondWallRepository, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createSecondWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: createdRoom.alias_id,
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to create second wall', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const createdSecondWall = await createSecondWall.create({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
      room_alias_id: createdRoom.alias_id,
    });

    expect(createdSecondWall).toEqual({
      id: createdSecondWall.id,
      height: createdSecondWall.height,
      width: createdSecondWall.width,
      door_quantity: createdSecondWall.door_quantity,
      window_quantity: createdSecondWall.window_quantity,
      room_id: createdSecondWall.room_id,
      created_at: createdSecondWall.created_at,
      updated_at: createdSecondWall.updated_at,
    });
  });
});

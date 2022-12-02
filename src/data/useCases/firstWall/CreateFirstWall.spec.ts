import AppError from '@utils/errors/AppError';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';
import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import FakeRoomRepository from '@infra/database/repositories/room/fakes/FakeRoomRepository';

import FakeFirstWallRepository from '@infra/database/repositories/firstWall/fakes/FakeFirstWallRepository';

import CreateFirstWall from '@data/useCases/firstWall/CreateFirstWall';

let fakeRoomRepository: FakeRoomRepository;

let fakeFirstWallRepository: FakeFirstWallRepository;

let createFirstWall: CreateFirstWall;

describe('CreateFirstWall', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();
    fakeFirstWallRepository = new FakeFirstWallRepository();

    createFirstWall = new CreateFirstWall(
      fakeRoomRepository,
      fakeFirstWallRepository,
    );
  });

  it('should be able to call find room by alias id with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const findByAliasIdSpy = jest.spyOn(fakeRoomRepository, 'findByAliasId');

    await createFirstWall.create({
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
      createFirstWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: 'any_alias_id',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if room does not exists', async () => {
    await expect(
      createFirstWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: 'any_alias_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call create first wall with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const createSpy = jest.spyOn(fakeFirstWallRepository, 'create');

    await createFirstWall.create({
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

  it('should be able to throw if create first wall throws', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    await fakeFirstWallRepository.create(mockFirstWallModel.mock());

    jest.spyOn(fakeFirstWallRepository, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createFirstWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: createdRoom.alias_id,
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to create first wall', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const createdFirstWall = await createFirstWall.create({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
      room_alias_id: createdRoom.alias_id,
    });

    expect(createdFirstWall).toEqual({
      id: createdFirstWall.id,
      height: createdFirstWall.height,
      width: createdFirstWall.width,
      door_quantity: createdFirstWall.door_quantity,
      window_quantity: createdFirstWall.window_quantity,
      room_id: createdFirstWall.room_id,
      created_at: createdFirstWall.created_at,
      updated_at: createdFirstWall.updated_at,
    });
  });
});

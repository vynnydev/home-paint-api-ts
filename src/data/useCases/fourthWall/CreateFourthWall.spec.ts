import AppError from '@utils/errors/AppError';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';
import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import FakeRoomRepository from '@infra/database/repositories/room/fakes/FakeRoomRepository';

import FakeFourthWallRepository from '@infra/database/repositories/fourthWall/fakes/FakeFourthWallRepository';

import CreateFourthWall from '@data/useCases/fourthWall/CreateFourthWall';

let fakeRoomRepository: FakeRoomRepository;

let fakeFourthWallRepository: FakeFourthWallRepository;

let createFourthWall: CreateFourthWall;

describe('CreateFourthWall', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();
    fakeFourthWallRepository = new FakeFourthWallRepository();

    createFourthWall = new CreateFourthWall(fakeRoomRepository, fakeFourthWallRepository);
  });

  it('should be able to call find fourth wall by alias id with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const findByAliasIdSpy = jest.spyOn(fakeRoomRepository, 'findByAliasId');

    await createFourthWall.create({
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
      createFourthWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: 'any_alias_id',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if fourth wall does not exists', async () => {
    await expect(
      createFourthWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: 'any_alias_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call create fourth wall with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const createSpy = jest.spyOn(fakeFourthWallRepository, 'create');

    await createFourthWall.create({
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

  it('should be able to throw if create fourth wall throws', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    await fakeFourthWallRepository.create(mockFourthWallModel.mock());

    jest.spyOn(fakeFourthWallRepository, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createFourthWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: createdRoom.alias_id,
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to create fourth wall', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const createdFourthWall = await createFourthWall.create({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
      room_alias_id: createdRoom.alias_id,
    });

    expect(createdFourthWall).toEqual({
      id: createdFourthWall.id,
      height: createdFourthWall.height,
      width: createdFourthWall.width,
      door_quantity: createdFourthWall.door_quantity,
      window_quantity: createdFourthWall.window_quantity,
      room_id: createdFourthWall.room_id,
      created_at: createdFourthWall.created_at,
      updated_at: createdFourthWall.updated_at,
    });
  });
});

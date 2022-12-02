import AppError from '@utils/errors/AppError';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';
import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import FakeRoomRepository from '@infra/database/repositories/room/fakes/FakeRoomRepository';

import FakeThirdWallRepository from '@infra/database/repositories/thirdWall/fakes/FakeThirdWallRepository';

import CreateThirdWall from '@data/useCases/thirdWall/CreateThirdWall';

let fakeRoomRepository: FakeRoomRepository;

let fakeThirdWallRepository: FakeThirdWallRepository;

let createThirdWall: CreateThirdWall;

describe('CreateThirdWall', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();
    fakeThirdWallRepository = new FakeThirdWallRepository();

    createThirdWall = new CreateThirdWall(fakeRoomRepository, fakeThirdWallRepository);
  });

  it('should be able to call find third wall by alias id with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const findByAliasIdSpy = jest.spyOn(fakeRoomRepository, 'findByAliasId');

    await createThirdWall.create({
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
      createThirdWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: 'any_alias_id',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if third wall does not exists', async () => {
    await expect(
      createThirdWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: 'any_alias_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call create third wall with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const createSpy = jest.spyOn(fakeThirdWallRepository, 'create');

    await createThirdWall.create({
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

  it('should be able to throw if create third wall throws', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    await fakeThirdWallRepository.create(mockThirdWallModel.mock());

    jest.spyOn(fakeThirdWallRepository, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createThirdWall.create({
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
        room_alias_id: createdRoom.alias_id,
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to create third wall', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const createdThirdWall = await createThirdWall.create({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
      room_alias_id: createdRoom.alias_id,
    });

    expect(createdThirdWall).toEqual({
      id: createdThirdWall.id,
      height: createdThirdWall.height,
      width: createdThirdWall.width,
      door_quantity: createdThirdWall.door_quantity,
      window_quantity: createdThirdWall.window_quantity,
      room_id: createdThirdWall.room_id,
      created_at: createdThirdWall.created_at,
      updated_at: createdThirdWall.updated_at,
    });
  });
});

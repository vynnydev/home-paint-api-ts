import FakeAliasGenerator from '@utils/aliasGenerator/fakes/FakeAliasGenerator';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import FakeRoomRepository from '@infra/database/repositories/room/fakes/FakeRoomRepository';

import CreateRoom from '@data/useCases/room/CreateRoom';

let fakeAliasGenerator: FakeAliasGenerator;

let fakeRoomRepository: FakeRoomRepository;

let createRoom: CreateRoom;

describe('CreateRoom', () => {
  beforeEach(() => {
    fakeAliasGenerator = new FakeAliasGenerator();

    fakeRoomRepository = new FakeRoomRepository();

    createRoom = new CreateRoom(fakeRoomRepository, fakeAliasGenerator);
  });

  it('should be able to call generate alias id with correct values', async () => {
    const generatedAliasId = jest.spyOn(fakeAliasGenerator, 'generate');

    await createRoom.create({
      room_name: 'any_room_name',
      owner_name: 'any_owner_name',
    });

    expect(generatedAliasId).toHaveBeenCalledWith('room');
  });

  it('should be able to throw if generate alias throws', async () => {
    jest.spyOn(fakeAliasGenerator, 'generate').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createRoom.create({
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call create room with correct values', async () => {
    const createSpy = jest.spyOn(fakeRoomRepository, 'create');

    await createRoom.create({
      room_name: 'any_room_name',
      owner_name: 'any_owner_name',
    });

    expect(createSpy).toHaveBeenCalledWith({
      alias_id: 'any_alias_id',
      room_name: 'any_room_name',
      owner_name: 'any_owner_name',
    });
  });

  it('should be able to throw if create room throws', async () => {
    await fakeRoomRepository.create(mockRoomModel.mock());

    jest.spyOn(fakeRoomRepository, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createRoom.create({
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to create room', async () => {
    const createdRoom = await createRoom.create({
      room_name: 'any_room_name',
      owner_name: 'any_owner_name',
    });

    expect(createdRoom).toEqual({
      id: createdRoom.id,
      alias_id: createdRoom.alias_id,
      room_name: createdRoom.room_name,
      owner_name: createdRoom.owner_name,
      created_at: createdRoom.created_at,
      updated_at: createdRoom.updated_at,
    });
  });
});

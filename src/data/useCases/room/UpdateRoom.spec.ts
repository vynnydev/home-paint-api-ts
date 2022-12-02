import AppError from '@utils/errors/AppError';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import FakeRoomRepository from '@infra/database/repositories/room/fakes/FakeRoomRepository';

import UpdateRoom from '@data/useCases/room/UpdateRoom';

let fakeRoomRepository: FakeRoomRepository;

let updateRoom: UpdateRoom;

describe('UpdateRoom', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();

    updateRoom = new UpdateRoom(fakeRoomRepository);
  });

  it('should be able to call find room by alias id with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const findByAliasId = jest.spyOn(fakeRoomRepository, 'findByAliasId');

    await updateRoom.update({
      room_alias_id: createdRoom.alias_id,
      data: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
    });

    expect(findByAliasId).toHaveBeenCalledWith(createdRoom.alias_id);
  });

  it('should be able to throw if find room by alias id throws', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    jest.spyOn(fakeRoomRepository, 'findByAliasId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateRoom.update({
        room_alias_id: createdRoom.alias_id,
        data: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if room does not exists', async () => {
    await expect(
      updateRoom.update({
        room_alias_id: 'any_alias_id',
        data: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to call update room with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const updateSpy = jest.spyOn(fakeRoomRepository, 'findByAliasId');

    await updateRoom.update({
      room_alias_id: createdRoom.alias_id,
      data: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
    });

    expect(updateSpy).toHaveBeenCalledWith(createdRoom.alias_id);
  });

  it('should be able to throw if update room throws', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    jest.spyOn(fakeRoomRepository, 'findByAliasId').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(
      updateRoom.update({
        room_alias_id: createdRoom.alias_id,
        data: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if update return undefined', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    jest.spyOn(fakeRoomRepository, 'update').mockImplementationOnce(async () => undefined);

    await expect(
      updateRoom.update({
        room_alias_id: createdRoom.alias_id,
        data: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update room', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const updatedRoom = await updateRoom.update({
      room_alias_id: createdRoom.alias_id,
      data: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
    });

    expect(updatedRoom).toEqual({
      id: updatedRoom.id,
      alias_id: updatedRoom.alias_id,
      room_name: createdRoom.room_name,
      owner_name: createdRoom.owner_name,
      created_at: createdRoom.created_at,
      updated_at: createdRoom.updated_at,
    });
  });
});

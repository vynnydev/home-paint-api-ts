import AppError from '@utils/errors/AppError';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import FakeRoomRepository from '@infra/database/repositories/room/fakes/FakeRoomRepository';

import DeleteRoom from '@data/useCases/room/DeleteRoom';

let fakeRoomRepository: FakeRoomRepository;

let deleteRoom: DeleteRoom;

describe('DeleteRoom', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();

    deleteRoom = new DeleteRoom(fakeRoomRepository);
  });

  it('should be able to call delete room with correct values', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const updateSpy = jest.spyOn(fakeRoomRepository, 'findByAliasId');

    await deleteRoom.delete(createdRoom.alias_id);

    expect(updateSpy).toHaveBeenCalledWith(createdRoom.alias_id);
  });

  it('should be able to throw if delete room throws', async () => {
    await fakeRoomRepository.create(mockRoomModel.mock());

    jest.spyOn(fakeRoomRepository, 'findByAliasId').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(deleteRoom.delete('any_alias_id')).rejects.toBeInstanceOf(Error);
  });

  it('should be able to throw if room does not exists', async () => {
    await expect(deleteRoom.delete('any_alias_id')).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete room', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const error = await deleteRoom.delete(createdRoom.alias_id);

    expect(error).toBeFalsy();
  });
});

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import FakeRoomRepository from '@infra/database/repositories/room/fakes/FakeRoomRepository';

import FindRooms from '@data/useCases/room/FindRooms';

let findRooms: FindRooms;

let fakeRoomRepository: FakeRoomRepository;

describe('FindRooms', () => {
  beforeEach(() => {
    fakeRoomRepository = new FakeRoomRepository();

    findRooms = new FindRooms(fakeRoomRepository);
  });

  it('should be able to find room', async () => {
    const createdRoom = await fakeRoomRepository.create(mockRoomModel.mock());

    const foundRooms = await findRooms.find();

    expect(foundRooms).toEqual([
      {
        id: createdRoom.id,
        alias_id: createdRoom.alias_id,
        room_name: createdRoom.room_name,
        owner_name: createdRoom.owner_name,
        created_at: createdRoom.created_at,
        updated_at: createdRoom.updated_at,
      },
    ]);
  });
});

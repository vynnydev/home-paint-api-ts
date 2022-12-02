import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import FindRoomsPresenter from '@presentation/presenters/room/FindRoomsPresenter';

let findRoomsPresenter: FindRoomsPresenter;

describe('FindRoomsPresenter', () => {
  beforeEach(() => {
    findRoomsPresenter = new FindRoomsPresenter();
  });

  it('should be able to reply data on success', async () => {
    const room = mockRoomModel.mock();

    const httpResponse = await findRoomsPresenter.reply({
      data: { rooms: [room] },
    });

    expect(httpResponse.status_code).toBe(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      rooms: [
        {
          id: room.id,
          alias_id: room.alias_id,
          room_name: room.room_name,
          owner_name: room.owner_name,
          created_at: room.created_at,
          updated_at: room.updated_at,
        },
      ],
    });
  });
});

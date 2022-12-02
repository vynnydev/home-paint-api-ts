import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import UpdateRoomPresenter from '@presentation/presenters/room/UpdateRoomPresenter';

let updateRoomPresenter: UpdateRoomPresenter;

describe('UpdateRoomPresenter', () => {
  beforeEach(() => {
    updateRoomPresenter = new UpdateRoomPresenter();
  });

  it('should be able to reply data on success', async () => {
    const room = mockRoomModel.mock();

    const httpResponse = await updateRoomPresenter.reply({
      data: { room },
    });

    expect(httpResponse.status_code).toBe(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      room: {
        id: room.id,
        alias_id: room.alias_id,
        room_name: room.room_name,
        owner_name: room.owner_name,
        created_at: room.created_at,
        updated_at: room.updated_at,
      },
    });
  });
});

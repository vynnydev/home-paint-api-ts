import DeleteRoom from '@presentation/presenters/room/DeleteRoomPresenter';

let deleteRoom: DeleteRoom;

describe('DeleteRoomPresenter', () => {
  beforeEach(() => {
    deleteRoom = new DeleteRoom();
  });

  it('should be able to reply data on success', async () => {
    const httpResponse = await deleteRoom.reply({
      data: {},
    });

    expect(httpResponse.status_code).toBe(204);
    expect(httpResponse.body).toEqual({ status: 'success' });
  });
});

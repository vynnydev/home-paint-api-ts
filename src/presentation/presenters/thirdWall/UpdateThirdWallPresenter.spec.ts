import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import UpdateThirdWallPresenter from '@presentation/presenters/thirdWall/UpdateThirdWallPresenter';

let updateThirdWallPresenter: UpdateThirdWallPresenter;

describe('UpdateThirdWallPresenter', () => {
  beforeEach(() => {
    updateThirdWallPresenter = new UpdateThirdWallPresenter();
  });

  it('should be able to reply data on success', async () => {
    const thirdWall = mockThirdWallModel.mock();

    const httpResponse = await updateThirdWallPresenter.reply({
      data: { thirdWall },
    });

    expect(httpResponse.status_code).toBe(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      thirdWall: {
        id: thirdWall.id,
        height: thirdWall.height,
        width: thirdWall.width,
        door_quantity: thirdWall.door_quantity,
        window_quantity: thirdWall.window_quantity,
        room_id: thirdWall.room_id,
        created_at: thirdWall.created_at,
        updated_at: thirdWall.updated_at,
      },
    });
  });
});

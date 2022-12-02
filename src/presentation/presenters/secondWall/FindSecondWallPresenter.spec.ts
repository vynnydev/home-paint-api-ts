import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import FindSecondWallPresenter from '@presentation/presenters/secondWall/FindSecondWallPresenter';

let findSecondWallPresenter: FindSecondWallPresenter;

describe('FindSecondWallPresenter', () => {
  beforeEach(() => {
    findSecondWallPresenter = new FindSecondWallPresenter();
  });

  it('should be able to reply data on success', async () => {
    const secondWall = mockSecondWallModel.mock();

    const httpResponse = await findSecondWallPresenter.reply({
      data: { secondWall: secondWall },
    });

    expect(httpResponse.status_code).toBe(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      secondWall: {
        id: secondWall.id,
        height: secondWall.height,
        width: secondWall.width,
        door_quantity: secondWall.door_quantity,
        window_quantity: secondWall.window_quantity,
        room_id: secondWall.room_id,
        created_at: secondWall.created_at,
        updated_at: secondWall.updated_at,
      },
    });
  });
});

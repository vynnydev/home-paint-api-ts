import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import FindFourthWallPresenter from '@presentation/presenters/fourthWall/FindFourthWallPresenter';

let findFourthWallPresenter: FindFourthWallPresenter;

describe('FindFourthWallPresenter', () => {
  beforeEach(() => {
    findFourthWallPresenter = new FindFourthWallPresenter();
  });

  it('should be able to reply data on success', async () => {
    const fourthWall = mockFourthWallModel.mock();

    const httpResponse = await findFourthWallPresenter.reply({
      data: { fourthWall },
    });

    expect(httpResponse.status_code).toBe(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      fourthWall: {
        id: fourthWall.id,
        height: fourthWall.height,
        width: fourthWall.width,
        door_quantity: fourthWall.door_quantity,
        window_quantity: fourthWall.window_quantity,
        room_id: fourthWall.room_id,
        created_at: fourthWall.created_at,
        updated_at: fourthWall.updated_at,
      },
    });
  });
});

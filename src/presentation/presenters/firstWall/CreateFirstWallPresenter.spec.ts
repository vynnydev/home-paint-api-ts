import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import CreateFirstWallPresenter from '@presentation/presenters/firstWall/CreateFirstWallPresenter';

let createFirstWallPresenter: CreateFirstWallPresenter;

describe('CreateFirstWallPresenter', () => {
  beforeEach(() => {
    createFirstWallPresenter = new CreateFirstWallPresenter();
  });

  it('should be able to reply data on success', async () => {
    const firstWall = mockFirstWallModel.mock();

    const httpResponse = await createFirstWallPresenter.reply({
      data: { firstWall },
    });

    expect(httpResponse.status_code).toBe(201);
    expect(httpResponse.body).toEqual({
      status: 'success',
      firstWall: {
        id: firstWall.id,
        height: firstWall.height,
        width: firstWall.width,
        door_quantity: firstWall.door_quantity,
        window_quantity: firstWall.window_quantity,
        room_id: firstWall.room_id,
        created_at: firstWall.created_at,
        updated_at: firstWall.updated_at,
      },
    });
  });
});

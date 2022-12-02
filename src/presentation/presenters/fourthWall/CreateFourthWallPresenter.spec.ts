import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import CreateFourthWallPresenter from '@presentation/presenters/fourthWall/CreateFourthWallPresenter';

let createFourthWallPresenter: CreateFourthWallPresenter;

describe('CreateFourthWallPresenter', () => {
  beforeEach(() => {
    createFourthWallPresenter = new CreateFourthWallPresenter();
  });

  it('should be able to reply data on success', async () => {
    const fourthWall = mockFourthWallModel.mock();

    const httpResponse = await createFourthWallPresenter.reply({
      data: { fourthWall },
    });

    expect(httpResponse.status_code).toBe(201);
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

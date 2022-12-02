import FindFirstWallController from '@presentation/controllers/firstWall/FindFirstWallController';

import FakeFindFirstWall from '@data/useCases/firstWall/fakes/FakeFindFirstWall';
import FakeFindFirstWallPresenter from '@presentation/presenters/firstWall/fakes/FakeFindFirstWallPresenter';

let findFirstWallController: FindFirstWallController;

let fakeFindFirstWall: FakeFindFirstWall;
let fakeFindFirstWallPresenter: FakeFindFirstWallPresenter;

describe('FindFirstWallController', () => {
  beforeEach(() => {
    fakeFindFirstWall = new FakeFindFirstWall();

    fakeFindFirstWallPresenter = new FakeFindFirstWallPresenter();

    findFirstWallController = new FindFirstWallController(fakeFindFirstWall, fakeFindFirstWallPresenter);
  });

  it('should be able to handle find first wall', async () => {
    const httpResponse = await findFirstWallController.handle({
      params: {
        room_id: 'any_room_id',
      }
    });

    expect(httpResponse.status_code).toEqual(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      firstWall: {
          id: expect.any(String),
          height: expect.any(Number),
          width: expect.any(Number),
          door_quantity: expect.any(Number),
          window_quantity: expect.any(Number),
          room_id: expect.any(String),
          created_at: expect.any(Date),
          updated_at: expect.any(Date),
        },
    });
  });
});

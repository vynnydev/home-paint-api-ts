import FindSecondWallController from '@presentation/controllers/secondWall/FindSecondWallController';

import FakeFindSecondWall from '@data/useCases/secondWall/fakes/FakeFindSecondWall';
import FakeFindSecondWallPresenter from '@presentation/presenters/secondWall/fakes/FakeFindSecondWallPresenter';

let findSecondWallController: FindSecondWallController;

let fakeFindSecondWall: FakeFindSecondWall;
let fakeFindSecondWallPresenter: FakeFindSecondWallPresenter;

describe('FindSecondWallController', () => {
  beforeEach(() => {
    fakeFindSecondWall = new FakeFindSecondWall();

    fakeFindSecondWallPresenter = new FakeFindSecondWallPresenter();

    findSecondWallController = new FindSecondWallController(fakeFindSecondWall, fakeFindSecondWallPresenter);
  });

  it('should be able to handle find first wall', async () => {
    const httpResponse = await findSecondWallController.handle({
      params: {
        room_id: 'any_room_id',
      }
    });

    expect(httpResponse.status_code).toEqual(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      secondWall: {
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

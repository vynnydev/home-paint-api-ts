import FindThirdWallController from '@presentation/controllers/thirdWall/FindThirdWallController';

import FakeFindThirdWall from '@data/useCases/thirdWall/fakes/FakeFindThirdWall';
import FakeFindThirdWallPresenter from '@presentation/presenters/thirdWall/fakes/FakeFindThirdWallPresenter';

let findThirdWallController: FindThirdWallController;

let fakeFindThirdWall: FakeFindThirdWall;
let fakeFindThirdWallPresenter: FakeFindThirdWallPresenter;

describe('FindThirdWallController', () => {
  beforeEach(() => {
    fakeFindThirdWall = new FakeFindThirdWall();

    fakeFindThirdWallPresenter = new FakeFindThirdWallPresenter();

    findThirdWallController = new FindThirdWallController(fakeFindThirdWall, fakeFindThirdWallPresenter);
  });

  it('should be able to handle find first wall', async () => {
    const httpResponse = await findThirdWallController.handle({
      params: {
        room_id: 'any_room_id',
      }
    });

    expect(httpResponse.status_code).toEqual(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      thirdWall: {
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

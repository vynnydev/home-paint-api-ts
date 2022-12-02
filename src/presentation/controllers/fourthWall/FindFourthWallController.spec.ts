import FindFourthWallController from '@presentation/controllers/fourthWall/FindFourthWallController';

import FakeFindFourthWall from '@data/useCases/fourthWall/fakes/FakeFindFourthWall';
import FakeFindFourthWallPresenter from '@presentation/presenters/fourthWall/fakes/FakeFindFourthWallPresenter';

let findFourthWallController: FindFourthWallController;

let fakeFindFourthWall: FakeFindFourthWall;
let fakeFindFourthWallPresenter: FakeFindFourthWallPresenter;

describe('FindFourthWallController', () => {
  beforeEach(() => {
    fakeFindFourthWall = new FakeFindFourthWall();

    fakeFindFourthWallPresenter = new FakeFindFourthWallPresenter();

    findFourthWallController = new FindFourthWallController(fakeFindFourthWall, fakeFindFourthWallPresenter);
  });

  it('should be able to handle to find fourth wall', async () => {
    const httpResponse = await findFourthWallController.handle({
      params: {
        room_id: 'any_room_id',
      }
    });

    expect(httpResponse.status_code).toEqual(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      fourthWall: {
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

import FindRoomsController from '@presentation/controllers/room/FindRoomsController';

import FakeFindRooms from '@data/useCases/room/fakes/FakeFindRooms';
import FakeFindRoomsPresenter from '@presentation/presenters/room/fakes/FakeFindRoomsPresenter';

let findRoomsController: FindRoomsController;

let fakeFindRooms: FakeFindRooms;
let fakeFindRoomsPresenter: FakeFindRoomsPresenter;

describe('FindRoomsController', () => {
  beforeEach(() => {
    fakeFindRooms = new FakeFindRooms();

    fakeFindRoomsPresenter = new FakeFindRoomsPresenter();

    findRoomsController = new FindRoomsController(fakeFindRooms, fakeFindRoomsPresenter);
  });

  it('should be able to handle find rooms', async () => {
    const httpResponse = await findRoomsController.handle();

    expect(httpResponse.status_code).toEqual(200);
    expect(httpResponse.body).toEqual({
      status: 'success',
      rooms: [
        {
          id: expect.any(String),
          alias_id: expect.any(String),
          room_name: expect.any(String),
          owner_name: expect.any(String),
          created_at: expect.any(Date),
          updated_at: expect.any(Date),
        },
      ],
    });
  });
});

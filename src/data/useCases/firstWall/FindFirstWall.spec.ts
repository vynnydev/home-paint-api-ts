import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import FakeFirstWallRepository from '@infra/database/repositories/firstWall/fakes/FakeFirstWallRepository';

import FindFirstWalls from '@data/useCases/firstWall/FindFirstWall';

let findFirstWall: FindFirstWalls;

let fakeFirstWallRepository: FakeFirstWallRepository;

describe('FindFirstWall', () => {
  beforeEach(() => {
    fakeFirstWallRepository = new FakeFirstWallRepository();

    findFirstWall = new FindFirstWalls(fakeFirstWallRepository);
  });

  it('should be able to find first wall', async () => {
    const createdFirstWall = await fakeFirstWallRepository.create(
      mockFirstWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const foundFirstWalls = await findFirstWall.find(createdFirstWall.room_id);

    expect(foundFirstWalls).toEqual({
        id: createdFirstWall.id,
        height: createdFirstWall.height,
        width: createdFirstWall.width,
        door_quantity: createdFirstWall.door_quantity,
        window_quantity: createdFirstWall.window_quantity,
        room_id: createdFirstWall.room_id,
        created_at: createdFirstWall.created_at,
        updated_at: createdFirstWall.updated_at,
      });
  });
});

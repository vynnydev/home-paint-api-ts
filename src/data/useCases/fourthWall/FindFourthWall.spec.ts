import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import FakeFourthWallRepository from '@infra/database/repositories/fourthWall/fakes/FakeFourthWallRepository';

import FindFourthWalls from '@data/useCases/fourthWall/FindFourthWall';

let findFourthWall: FindFourthWalls;

let fakeFourthWallRepository: FakeFourthWallRepository;

describe('FindFourthWall', () => {
  beforeEach(() => {
    fakeFourthWallRepository = new FakeFourthWallRepository();

    findFourthWall = new FindFourthWalls(fakeFourthWallRepository);
  });

  it('should be able to find fourth wall', async () => {
    const createdFourthWall = await fakeFourthWallRepository.create(
      mockFourthWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const foundFourthWalls = await findFourthWall.find(createdFourthWall.room_id);

    expect(foundFourthWalls).toEqual({
      id: createdFourthWall.id,
      height: createdFourthWall.height,
      width: createdFourthWall.width,
      door_quantity: createdFourthWall.door_quantity,
      window_quantity: createdFourthWall.window_quantity,
      room_id: createdFourthWall.room_id,
      created_at: createdFourthWall.created_at,
      updated_at: createdFourthWall.updated_at,
    });
  });
});

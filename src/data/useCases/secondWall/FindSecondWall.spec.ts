import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import FakeSecondWallRepository from '@infra/database/repositories/secondWall/fakes/FakeSecondWallRepository';

import FindSecondWalls from '@data/useCases/secondWall/FindSecondWall';

let findSecondWall: FindSecondWalls;

let fakeSecondWallRepository: FakeSecondWallRepository;

describe('FindSecondWall', () => {
  beforeEach(() => {
    fakeSecondWallRepository = new FakeSecondWallRepository();

    findSecondWall = new FindSecondWalls(fakeSecondWallRepository);
  });

  it('should be able to find second wall', async () => {
    const createdSecondWall = await fakeSecondWallRepository.create(
      mockSecondWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const foundSecondWalls = await findSecondWall.find(createdSecondWall.room_id);

    expect(foundSecondWalls).toEqual({
        id: createdSecondWall.id,
        height: createdSecondWall.height,
        width: createdSecondWall.width,
        door_quantity: createdSecondWall.door_quantity,
        window_quantity: createdSecondWall.window_quantity,
        room_id: createdSecondWall.room_id,
        created_at: createdSecondWall.created_at,
        updated_at: createdSecondWall.updated_at,
      },
    );
  });
});

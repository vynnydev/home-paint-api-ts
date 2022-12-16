import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import FakeThirdWallRepository from '@infra/database/repositories/thirdWall/fakes/FakeThirdWallRepository';

import FindThirdWalls from '@data/useCases/thirdWall/FindThirdWall';

let findThirdWall: FindThirdWalls;

let fakeThirdWallRepository: FakeThirdWallRepository;

describe('FindThirdWall', () => {
  beforeEach(() => {
    fakeThirdWallRepository = new FakeThirdWallRepository();

    findThirdWall = new FindThirdWalls(fakeThirdWallRepository);
  });

  it('should be able to find third wall', async () => {
    const createdThirdWall = await fakeThirdWallRepository.create(
      mockThirdWallModel.mock({
        room_id: 'any_room_id',
      }),
    );

    const foundThirdWalls = await findThirdWall.find(createdThirdWall.room_id);

    expect(foundThirdWalls).toEqual({
      id: createdThirdWall.id,
      height: createdThirdWall.height,
      width: createdThirdWall.width,
      door_quantity: createdThirdWall.door_quantity,
      window_quantity: createdThirdWall.window_quantity,
      room_id: createdThirdWall.room_id,
      created_at: createdThirdWall.created_at,
      updated_at: createdThirdWall.updated_at,
    });
  });
});

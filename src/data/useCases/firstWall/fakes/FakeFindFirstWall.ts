import FirstWall from '@domain/models/FirstWall';
import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import IFindFirstWalls from '@domain/useCases/firstWall/IFindFirstWall';

export default class FakeFindFirstWalls implements IFindFirstWalls {
  public async find(room_id: string): Promise<FirstWall> {
    return mockFirstWallModel.mock();
  }
}

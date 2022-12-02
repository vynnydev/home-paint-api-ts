import ThirdWall from '@domain/models/ThirdWall';
import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import IFindThirdWalls from '@domain/useCases/thirdWall/IFindThirdWall';

export default class FakeFindThirdWalls implements IFindThirdWalls {
  public async find(room_id: string): Promise<ThirdWall> {
    return mockThirdWallModel.mock();
  }
}

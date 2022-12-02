import FourthWall from '@domain/models/FourthWall';
import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import IFindFourthWall from '@domain/useCases/fourthWall/IFindFourthWall';

export default class FakeFindFourthWall implements IFindFourthWall {
  public async find(room_id: string): Promise<FourthWall> {
    return mockFourthWallModel.mock();
  }
}

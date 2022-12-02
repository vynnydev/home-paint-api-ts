import SecondWall from '@domain/models/SecondWall';
import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import IFindSecondWall from '@domain/useCases/secondWall/IFindSecondWall';

export default class FakeFindSecondWall implements IFindSecondWall {
  public async find(room_id: string): Promise<SecondWall> {
    return mockSecondWallModel.mock();
  }
}

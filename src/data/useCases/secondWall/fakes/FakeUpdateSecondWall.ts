import SecondWall from '@domain/models/SecondWall';

import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import IUpdateSecondWall from '@domain/useCases/secondWall/IUpdateSecondWall';
import IUpdateSecondWallDTO from '@domain/useCases/secondWall/dtos/IUpdateSecondWallDTO';

export default class FakeUpdateSecondWall implements IUpdateSecondWall {
  public async update(data: IUpdateSecondWallDTO): Promise<SecondWall> {
    const secondWall = mockSecondWallModel.mock();

    return secondWall;
  }
}

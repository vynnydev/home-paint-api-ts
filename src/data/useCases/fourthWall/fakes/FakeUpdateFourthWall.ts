import FourthWall from '@domain/models/FourthWall';

import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import IUpdateFourthWall from '@domain/useCases/fourthWall/IUpdateFourthWall';
import IUpdateFourthWallDTO from '@domain/useCases/fourthWall/dtos/IUpdateFourthWallDTO';

export default class FakeUpdateFourthWall implements IUpdateFourthWall {
  public async update(data: IUpdateFourthWallDTO): Promise<FourthWall> {
    const fourthWall = mockFourthWallModel.mock();

    return fourthWall;
  }
}

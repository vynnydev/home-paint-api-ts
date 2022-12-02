import FourthWall from '@domain/models/FourthWall';

import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import ICreateFourthWall from '@domain/useCases/fourthWall/ICreateFourthWall';
import ICreateFourthWallDTO from '@domain/useCases/fourthWall/dtos/ICreateFourthWallDTO';

export default class FakeCreateFourthWall implements ICreateFourthWall {
  public async create(data: ICreateFourthWallDTO): Promise<FourthWall> {
    const fourthWall = mockFourthWallModel.mock();

    return fourthWall;
  }
}

import SecondWall from '@domain/models/SecondWall';

import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import ICreateSecondWall from '@domain/useCases/secondWall/ICreateSecondWall';
import ICreateSecondWallDTO from '@domain/useCases/secondWall/dtos/ICreateSecondWallDTO';

export default class FakeCreateSecondWall implements ICreateSecondWall {
  public async create(data: ICreateSecondWallDTO): Promise<SecondWall> {
    const secondWall = mockSecondWallModel.mock();

    return secondWall;
  }
}

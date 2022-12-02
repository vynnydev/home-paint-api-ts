import ThirdWall from '@domain/models/ThirdWall';

import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import ICreateThirdWall from '@domain/useCases/thirdWall/ICreateThirdWall';
import ICreateThirdWallDTO from '@domain/useCases/thirdWall/dtos/ICreateThirdWallDTO';

export default class FakeCreateThirdWall implements ICreateThirdWall {
  public async create(data: ICreateThirdWallDTO): Promise<ThirdWall> {
    const thirdWall = mockThirdWallModel.mock();

    return thirdWall;
  }
}

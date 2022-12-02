import ThirdWall from '@domain/models/ThirdWall';

import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import IUpdateThirdWall from '@domain/useCases/thirdWall/IUpdateThirdWall';
import IUpdateThirdWallDTO from '@domain/useCases/thirdWall/dtos/IUpdateThirdWallDTO';

export default class FakeUpdateThirdWall implements IUpdateThirdWall {
  public async update(data: IUpdateThirdWallDTO): Promise<ThirdWall> {
    const employee = mockThirdWallModel.mock();

    return employee;
  }
}

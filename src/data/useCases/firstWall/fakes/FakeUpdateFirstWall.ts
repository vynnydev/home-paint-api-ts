import FirstWall from '@domain/models/FirstWall';

import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import IUpdateFirstWall from '@domain/useCases/firstWall/IUpdateFirstWall';
import IUpdateFirstWallDTO from '@domain/useCases/firstWall/dtos/IUpdateFirstWallDTO';

export default class FakeUpdateFirstWall implements IUpdateFirstWall {
  public async update(data: IUpdateFirstWallDTO): Promise<FirstWall> {
    const employee = mockFirstWallModel.mock();

    return employee;
  }
}

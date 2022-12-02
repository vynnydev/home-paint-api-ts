import FirstWall from '@domain/models/FirstWall';

import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import ICreateFirstWall from '@domain/useCases/firstWall/ICreateFirstWall';
import ICreateFirstWallDTO from '@domain/useCases/firstWall/dtos/ICreateFirstWallDTO';

export default class FakeCreateFirstWall implements ICreateFirstWall {
  public async create(data: ICreateFirstWallDTO): Promise<FirstWall> {
    const firstWall = mockFirstWallModel.mock();

    return firstWall;
  }
}

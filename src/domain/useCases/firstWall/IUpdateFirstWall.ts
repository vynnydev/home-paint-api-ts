import FirstWall from '@domain/models/FirstWall';

import IUpdateFirstWallDTO from '@domain/useCases/firstWall/dtos/IUpdateFirstWallDTO';

export default interface IUpdateFirstWall {
  update(data: IUpdateFirstWallDTO): Promise<FirstWall>;
}

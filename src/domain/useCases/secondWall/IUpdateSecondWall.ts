import SecondWall from '@domain/models/SecondWall';

import IUpdateSecondWallDTO from '@domain/useCases/secondWall/dtos/IUpdateSecondWallDTO';

export default interface IUpdateSecondWall {
  update(data: IUpdateSecondWallDTO): Promise<SecondWall>;
}

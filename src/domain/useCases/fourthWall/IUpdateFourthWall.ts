import FourthWall from '@domain/models/FourthWall';

import IUpdateFourthWallDTO from '@domain/useCases/fourthWall/dtos/IUpdateFourthWallDTO';

export default interface IUpdateFourthWall {
  update(data: IUpdateFourthWallDTO): Promise<FourthWall>;
}

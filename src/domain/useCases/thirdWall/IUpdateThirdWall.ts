import ThirdWall from '@domain/models/ThirdWall';

import IUpdateThirdWallDTO from '@domain/useCases/thirdWall/dtos/IUpdateThirdWallDTO';

export default interface IUpdateThirdWall {
  update(data: IUpdateThirdWallDTO): Promise<ThirdWall>;
}

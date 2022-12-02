import ThirdWall from '@domain/models/ThirdWall';

import ICreateThirdWallDTO from '@data/protocols/database/repositories/thirdWall/dtos/ICreateThirdWallDTO';
import IUpdateThirdWallDTO from '@data/protocols/database/repositories/thirdWall/dtos/IUpdateThirdWallDTO';

export default interface IThirdWallRepository {
  create(data: ICreateThirdWallDTO): Promise<ThirdWall>;
  findByRoomId(alias_id: string): Promise<ThirdWall | undefined>;
  update(data: IUpdateThirdWallDTO): Promise<ThirdWall | undefined>;
  deleteById(id: string): Promise<void>;
}

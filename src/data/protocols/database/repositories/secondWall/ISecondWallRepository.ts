import SecondWall from '@domain/models/SecondWall';

import ICreateSecondWallDTO from '@data/protocols/database/repositories/secondWall/dtos/ICreateSecondWallDTO';
import IUpdateSecondWallDTO from '@data/protocols/database/repositories/secondWall/dtos/IUpdateSecondWallDTO';

export default interface ISecondWallRepository {
  create(data: ICreateSecondWallDTO): Promise<SecondWall>;
  findByRoomId(alias_id: string): Promise<SecondWall | undefined>;
  update(data: IUpdateSecondWallDTO): Promise<SecondWall | undefined>;
  deleteById(id: string): Promise<void>;
}

import FourthWall from '@domain/models/FourthWall';

import ICreateFourthWallDTO from '@data/protocols/database/repositories/fourthWall/dtos/ICreateFourthWallDTO';
import IUpdateFourthWallDTO from '@data/protocols/database/repositories/fourthWall/dtos/IUpdateFourthWallDTO';

export default interface IFourthWallsRepository {
  create(data: ICreateFourthWallDTO): Promise<FourthWall>;
  findByRoomId(room_id: string): Promise<FourthWall | undefined>;
  update(data: IUpdateFourthWallDTO): Promise<FourthWall | undefined>;
  deleteById(id: string): Promise<void>;
}

import FirstWall from '@domain/models/FirstWall';

import ICreateFirstWallDTO from '@data/protocols/database/repositories/firstWall/dtos/ICreateFirstWallDTO';
import IUpdateFirstWallDTO from '@data/protocols/database/repositories/firstWall/dtos/IUpdateFirstWallDTO';

export default interface IFirstWallRepository {
  create(data: ICreateFirstWallDTO): Promise<FirstWall>;
  findByRoomId(room_id: string): Promise<FirstWall | undefined>;
  update(data: IUpdateFirstWallDTO): Promise<FirstWall | undefined>;
  deleteById(id: string): Promise<void>;
}

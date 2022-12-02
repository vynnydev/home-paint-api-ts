import Room from '@domain/models/Room';

import ICreateRoomDTO from '@data/protocols/database/repositories/room/dtos/ICreateRoomDTO';
import IUpdateRoomDTO from '@data/protocols/database/repositories/room/dtos/IUpdateRoomDTO';

export default interface IRoomRepository {
  create(data: ICreateRoomDTO): Promise<Room>;
  findByAliasId(alias_id: string): Promise<Room | undefined>;
  findRooms(): Promise<Room[]>;
  update(data: IUpdateRoomDTO): Promise<Room | undefined>;
  deleteById(id: string): Promise<void>;
}

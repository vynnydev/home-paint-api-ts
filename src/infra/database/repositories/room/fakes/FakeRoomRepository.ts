import Room from '@domain/models/Room';

import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import ICreateRoomDTO from '@data/protocols/database/repositories/room/dtos/ICreateRoomDTO';
import IUpdateRoomDTO from '@data/protocols/database/repositories/room/dtos/IUpdateRoomDTO';

export default class FakeTypeOrmRoomRepository implements IRoomRepository {
  private readonly rooms: Room[] = [];

  public async create({ alias_id, room_name, owner_name }: ICreateRoomDTO): Promise<Room> {
    const createRoom = {
      id: Math.random().toString(),
      alias_id,
      room_name,
      owner_name,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.rooms.push(createRoom);

    return createRoom;
  }

  public async findRooms(): Promise<Room[]> {
    return this.rooms;
  }

  public async findByAliasId(alias_id: string): Promise<Room | undefined> {
    const foundRoom = this.rooms.find(room => room.alias_id === alias_id);

    return foundRoom;
  }

  public async update({ id, data }: IUpdateRoomDTO): Promise<Room | undefined> {
    const foundIndex = this.rooms.findIndex(room => room.id === id);

    if (foundIndex < 0) return undefined;

    const foundRoom = this.rooms[foundIndex];

    Object.assign(foundRoom, data);

    this.rooms[foundIndex] = foundRoom;

    return foundRoom;
  }

  public async deleteById(id: string): Promise<void> {
    const foundIndex = this.rooms.findIndex(room => room.id === id);

    if (foundIndex >= 0) this.rooms.splice(foundIndex, 1);
  }
}

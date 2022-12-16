import { getRepository } from 'typeorm';

import Room from '@domain/models/Room';
import RoomEntity from '@infra/database/entities/typeOrm/Room';

import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import ICreateRoomDTO from '@data/protocols/database/repositories/room/dtos/ICreateRoomDTO';
import IUpdateRoomDTO from '@data/protocols/database/repositories/room/dtos/IUpdateRoomDTO';

export default class TypeOrmRoomRepository implements IRoomRepository {
  public async create({ alias_id, room_name, owner_name }: ICreateRoomDTO): Promise<Room> {
    const createdRoom = getRepository(RoomEntity).create({
      alias_id,
      room_name,
      owner_name,
    });

    await getRepository(RoomEntity).save(createdRoom);

    return createdRoom;
  }

  public async findByAliasId(alias_id: string): Promise<Room | undefined> {
    const foundRoom = await getRepository(RoomEntity)
      .createQueryBuilder()
      .where('alias_id = :alias_id', { alias_id })
      .getOne();

    return foundRoom;
  }

  public async findRooms(): Promise<Room[]> {
    const foundRooms = await getRepository(RoomEntity).createQueryBuilder().getMany();

    return foundRooms;
  }

  public async update({ id, data }: IUpdateRoomDTO): Promise<Room | undefined> {
    await getRepository(RoomEntity)
      .createQueryBuilder()
      .update()
      .set({ ...data })
      .where('id = :id', { id })
      .execute();

    const foundRoom = await getRepository(RoomEntity)
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();

    return foundRoom;
  }

  public async deleteById(id: string): Promise<void> {
    await getRepository(RoomEntity)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}

import { getRepository } from 'typeorm';

import FirstWall from '@domain/models/FirstWall';
import FirstWallEntity from '@infra/database/entities/typeOrm/FirstWall';

import IFirstWallRepository from '@data/protocols/database/repositories/firstWall/IFirstWallRepository';

import ICreateFirstWallDTO from '@data/protocols/database/repositories/firstWall/dtos/ICreateFirstWallDTO';
import IUpdateFirstWallDTO from '@data/protocols/database/repositories/firstWall/dtos/IUpdateFirstWallDTO';

export default class TypeOrmFirstWallRepository implements IFirstWallRepository {
  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_id,
  }: ICreateFirstWallDTO): Promise<FirstWall> {
    const createdFirstWall = getRepository(FirstWallEntity).create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_id,
    });

    await getRepository(FirstWallEntity).save(createdFirstWall);

    return createdFirstWall;
  }

  public async findByRoomId(room_id: string): Promise<FirstWall | undefined> {
    const foundFirstWall = await getRepository(FirstWallEntity)
      .createQueryBuilder()
      .where('room_id = :room_id', { room_id })
      .getOne();

    return foundFirstWall;
  }

  public async update({ id, data }: IUpdateFirstWallDTO): Promise<FirstWall | undefined> {
    await getRepository(FirstWallEntity)
      .createQueryBuilder()
      .update()
      .set({ ...data })
      .where('id = :id', { id })
      .execute();

    const foundFirstWall = await getRepository(FirstWallEntity)
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();

    return foundFirstWall;
  }

  public async deleteById(id: string): Promise<void> {
    await getRepository(FirstWall)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}

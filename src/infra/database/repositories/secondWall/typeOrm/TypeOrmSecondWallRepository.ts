import { getRepository } from 'typeorm';

import SecondWall from '@domain/models/SecondWall';
import SecondWallEntity from '@infra/database/entities/typeOrm/SecondWall';

import ISecondWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';

import ICreateSecondWallDTO from '@data/protocols/database/repositories/secondWall/dtos/ICreateSecondWallDTO';
import IUpdateSecondWallDTO from '@data/protocols/database/repositories/secondWall/dtos/IUpdateSecondWallDTO';

export default class TypeOrmSecondWallRepository implements ISecondWallRepository {
  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_id,
  }: ICreateSecondWallDTO): Promise<SecondWall> {
    const createdSecondWall = getRepository(SecondWallEntity).create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_id,
    });

    await getRepository(SecondWallEntity).save(createdSecondWall);

    return createdSecondWall;
  }

  public async findByRoomId(room_id: string): Promise<SecondWall | undefined> {
    const foundSecondWall = await getRepository(SecondWallEntity)
      .createQueryBuilder()
      .where('room_id = :room_id', { room_id })
      .getOne();

    return foundSecondWall;
  }

  public async update({ id, data }: IUpdateSecondWallDTO): Promise<SecondWall | undefined> {
    await getRepository(SecondWallEntity)
      .createQueryBuilder()
      .update()
      .set({ ...data })
      .where('id = :id', { id })
      .execute();

    const foundSecondWall = await getRepository(SecondWallEntity)
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();

    return foundSecondWall;
  }

  public async deleteById(id: string): Promise<void> {
    await getRepository(SecondWall)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}

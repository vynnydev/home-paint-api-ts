import { getRepository } from 'typeorm';

import ThirdWall from '@domain/models/ThirdWall';
import ThirdWallEntity from '@infra/database/entities/typeOrm/ThirdWall';

import IThirdWallRepository from '@data/protocols/database/repositories/thirdWall/IThirdWallRepository';

import ICreateThirdWallDTO from '@data/protocols/database/repositories/thirdWall/dtos/ICreateThirdWallDTO';
import IUpdateThirdWallDTO from '@data/protocols/database/repositories/thirdWall/dtos/IUpdateThirdWallDTO';

export default class TypeOrmThirdWallRepository implements IThirdWallRepository {
  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_id,
  }: ICreateThirdWallDTO): Promise<ThirdWall> {
    const createdThirdWall = getRepository(ThirdWallEntity).create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_id,
    });

    await getRepository(ThirdWallEntity).save(createdThirdWall);

    return createdThirdWall;
  }

  public async findByRoomId(room_id: string): Promise<ThirdWall | undefined> {
    const foundThirdWall = await getRepository(ThirdWallEntity)
      .createQueryBuilder()
      .where('room_id = :room_id', { room_id })
      .getOne();

    return foundThirdWall;
  }

  public async update({ id, data }: IUpdateThirdWallDTO): Promise<ThirdWall | undefined> {
    await getRepository(ThirdWallEntity)
      .createQueryBuilder()
      .update()
      .set({ ...data })
      .where('id = :id', { id })
      .execute();

    const foundThirdWall = await getRepository(ThirdWallEntity)
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();

    return foundThirdWall;
  }

  public async deleteById(id: string): Promise<void> {
    await getRepository(ThirdWall)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}

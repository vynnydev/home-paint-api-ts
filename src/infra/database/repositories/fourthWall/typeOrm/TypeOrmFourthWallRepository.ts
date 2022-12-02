import { getRepository } from 'typeorm';

import FourthWall from '@domain/models/FourthWall';
import FourthWallEntity from '@infra/database/entities/typeOrm/FourthWall';

import IFourthWallRepository from '@data/protocols/database/repositories/fourthWall/IFourthWallRepository';

import ICreateFourthWallDTO from '@data/protocols/database/repositories/fourthWall/dtos/ICreateFourthWallDTO';
import IUpdateFourthWallDTO from '@data/protocols/database/repositories/fourthWall/dtos/IUpdateFourthWallDTO';

export default class TypeOrmFourthWallRepository implements IFourthWallRepository {
  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_id,
  }: ICreateFourthWallDTO): Promise<FourthWall> {
    const createdFourthWall = getRepository(FourthWallEntity).create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_id,
    });

    await getRepository(FourthWallEntity).save(createdFourthWall);

    return createdFourthWall;
  }

  public async findByRoomId(room_id: string): Promise<FourthWall | undefined> {
    const foundFourthWall = await getRepository(FourthWallEntity)
      .createQueryBuilder()
      .where('room_id = :room_id', { room_id })
      .getOne();

    return foundFourthWall;
  }

  public async update({ id, data }: IUpdateFourthWallDTO): Promise<FourthWall | undefined> {
    await getRepository(FourthWallEntity)
      .createQueryBuilder()
      .update()
      .set({ ...data })
      .where('id = :id', { id })
      .execute();

    const foundFourthWall = await getRepository(FourthWallEntity)
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();

    return foundFourthWall;
  }

  public async deleteById(id: string): Promise<void> {
    await getRepository(FourthWall)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}

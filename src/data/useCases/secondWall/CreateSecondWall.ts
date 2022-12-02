import AppError from '@utils/errors/AppError';

import SecondWall from '@domain/models/SecondWall';

import ISecondWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';
import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import ICreateSecondWall from '@domain/useCases/secondWall/ICreateSecondWall';
import ICreateSecondWallDTO from '@domain/useCases/secondWall/dtos/ICreateSecondWallDTO';

export default class CreateSecondWall implements ICreateSecondWall {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly secondWallRepository: ISecondWallRepository,
  ) {}

  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_alias_id,
  }: ICreateSecondWallDTO): Promise<SecondWall> {
    const foundRoom = await this.roomRepository.findByAliasId(room_alias_id);

    if (!foundRoom)
      throw new AppError({
        message: 'Room does not exists. Before you create a wall, you need to have a room.',
        status_code: 404,
      });

    const createdSecondWall = await this.secondWallRepository.create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_id: foundRoom.id,
    });

    return createdSecondWall;
  }
}

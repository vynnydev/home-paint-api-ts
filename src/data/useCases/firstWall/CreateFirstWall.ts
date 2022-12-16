import AppError from '@utils/errors/AppError';

import FirstWall from '@domain/models/FirstWall';

import IFirstWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';
import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import ICreateFirstWall from '@domain/useCases/firstWall/ICreateFirstWall';
import ICreateFirstWallDTO from '@domain/useCases/firstWall/dtos/ICreateFirstWallDTO';

export default class CreateFirstWall implements ICreateFirstWall {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly firstWallRepository: IFirstWallRepository,
  ) {}

  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_alias_id,
  }: ICreateFirstWallDTO): Promise<FirstWall> {
    const foundRoom = await this.roomRepository.findByAliasId(room_alias_id);

    if (!foundRoom)
      throw new AppError({
        message: 'Room does not exists. Before you create a wall, you need to have a room.',
        status_code: 404,
      });

    const createdFirstWall = await this.firstWallRepository.create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_id: foundRoom.id,
    });

    return createdFirstWall;
  }
}

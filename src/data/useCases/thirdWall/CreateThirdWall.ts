import AppError from '@utils/errors/AppError';

import ThirdWall from '@domain/models/ThirdWall';

import IThirdWallRepository from '@data/protocols/database/repositories/thirdWall/IThirdWallRepository';
import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import ICreateThirdWall from '@domain/useCases/thirdWall/ICreateThirdWall';
import ICreateThirdWallDTO from '@domain/useCases/thirdWall/dtos/ICreateThirdWallDTO';

export default class CreateThirdWall implements ICreateThirdWall {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly thirdWallRepository: IThirdWallRepository,
  ) {}

  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_alias_id,
  }: ICreateThirdWallDTO): Promise<ThirdWall> {
    const foundRoom = await this.roomRepository.findByAliasId(room_alias_id);

    if (!foundRoom)
      throw new AppError({
        message: 'Room does not exists. Before you create a wall, you need to have a room.',
        status_code: 404,
      });

    const createdThirdWall = await this.thirdWallRepository.create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_id: foundRoom.id,
    });

    return createdThirdWall;
  }
}

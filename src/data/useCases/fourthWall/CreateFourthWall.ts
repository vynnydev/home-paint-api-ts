import AppError from '@utils/errors/AppError';

import FourthWall from '@domain/models/FourthWall';

import IFourthWallRepository from '@data/protocols/database/repositories/fourthWall/IFourthWallRepository';
import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import ICreateFourthWall from '@domain/useCases/fourthWall/ICreateFourthWall';
import ICreateFourthWallDTO from '@domain/useCases/fourthWall/dtos/ICreateFourthWallDTO';

export default class CreateFourthWall implements ICreateFourthWall {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly fourthWallRepository: IFourthWallRepository,
  ) {}

  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_alias_id,
  }: ICreateFourthWallDTO): Promise<FourthWall> {
    const foundRoom = await this.roomRepository.findByAliasId(room_alias_id);

    if (!foundRoom)
      throw new AppError({
        message: 'Room does not exists. Before you create a wall, you need to have a room.',
        status_code: 404,
      });

    const createdFourthWall = await this.fourthWallRepository.create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_id: foundRoom.id,
    });

    return createdFourthWall;
  }
}

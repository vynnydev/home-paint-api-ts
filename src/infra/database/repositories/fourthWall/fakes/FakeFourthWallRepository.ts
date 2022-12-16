import FourthWall from '@domain/models/FourthWall';

import IFourthWallRepository from '@data/protocols/database/repositories/fourthWall/IFourthWallRepository';

import ICreateFourthWallDTO from '@data/protocols/database/repositories/fourthWall/dtos/ICreateFourthWallDTO';
import IUpdateFourthWallDTO from '@data/protocols/database/repositories/fourthWall/dtos/IUpdateFourthWallDTO';

export default class FakeTypeOrmFourthWallRepository implements IFourthWallRepository {
  private readonly FourthWalls: FourthWall[] = [];

  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_id,
  }: ICreateFourthWallDTO): Promise<FourthWall> {
    const createFourthWall = {
      id: Math.random().toString(),
      height,
      width,
      door_quantity,
      window_quantity,
      room_id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.FourthWalls.push(createFourthWall);

    return createFourthWall;
  }

  public async findByRoomId(room_id: string): Promise<FourthWall | undefined> {
    const foundFourthWall = this.FourthWalls.find(fourth_wall => fourth_wall.room_id === room_id);

    return foundFourthWall;
  }

  public async update({ id, data }: IUpdateFourthWallDTO): Promise<FourthWall | undefined> {
    const foundIndex = this.FourthWalls.findIndex(fourth_wall => fourth_wall.id === id);

    if (foundIndex < 0) return undefined;

    const foundFourthWall = this.FourthWalls[foundIndex];

    Object.assign(foundFourthWall, data);

    this.FourthWalls[foundIndex] = foundFourthWall;

    return foundFourthWall;
  }

  public async deleteById(id: string): Promise<void> {
    const foundIndex = this.FourthWalls.findIndex(fourth_wall => fourth_wall.id === id);

    if (foundIndex >= 0) this.FourthWalls.splice(foundIndex, 1);
  }
}

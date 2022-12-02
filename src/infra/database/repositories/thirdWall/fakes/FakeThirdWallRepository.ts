import ThirdWall from '@domain/models/ThirdWall';

import IThirdWallRepository from '@data/protocols/database/repositories/thirdWall/IThirdWallRepository';

import ICreateThirdWallDTO from '@data/protocols/database/repositories/thirdWall/dtos/ICreateThirdWallDTO';
import IUpdateThirdWallDTO from '@data/protocols/database/repositories/thirdWall/dtos/IUpdateThirdWallDTO';

export default class FakeTypeOrmThirdWallRepository implements IThirdWallRepository {
  private readonly ThirdWalls: ThirdWall[] = [];

  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_id,
  }: ICreateThirdWallDTO): Promise<ThirdWall> {
    const createThirdWall = {
      id: Math.random().toString(),
      height,
      width,
      door_quantity,
      window_quantity,
      room_id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.ThirdWalls.push(createThirdWall);

    return createThirdWall;
  }

  public async findByRoomId(room_id: string): Promise<ThirdWall | undefined> {
    const foundThirdWall = this.ThirdWalls.find(second_wall => second_wall.room_id === room_id);

    return foundThirdWall;
  }

  public async update({ id, data }: IUpdateThirdWallDTO): Promise<ThirdWall | undefined> {
    const foundIndex = this.ThirdWalls.findIndex(second_wall => second_wall.id === id);

    if (foundIndex < 0) return undefined;

    const foundThirdWall = this.ThirdWalls[foundIndex];

    Object.assign(foundThirdWall, data);

    this.ThirdWalls[foundIndex] = foundThirdWall;

    return foundThirdWall;
  }

  public async deleteById(id: string): Promise<void> {
    const foundIndex = this.ThirdWalls.findIndex(second_wall => second_wall.id === id);

    if (foundIndex >= 0) this.ThirdWalls.splice(foundIndex, 1);
  }
}

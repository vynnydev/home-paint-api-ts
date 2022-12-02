import SecondWall from '@domain/models/SecondWall';

import ISecondWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';

import ICreateSecondWallDTO from '@data/protocols/database/repositories/secondWall/dtos/ICreateSecondWallDTO';
import IUpdateSecondWallDTO from '@data/protocols/database/repositories/secondWall/dtos/IUpdateSecondWallDTO';

export default class FakeTypeOrmSecondWallRepository implements ISecondWallRepository {
  private readonly SecondWalls: SecondWall[] = [];

  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_id,
  }: ICreateSecondWallDTO): Promise<SecondWall> {
    const createSecondWall = {
      id: Math.random().toString(),
      height,
      width,
      door_quantity,
      window_quantity,
      room_id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.SecondWalls.push(createSecondWall);

    return createSecondWall;
  }

  public async findByRoomId(room_id: string): Promise<SecondWall | undefined> {
    const foundSecondWall = this.SecondWalls.find(second_wall => second_wall.room_id === room_id);

    return foundSecondWall;
  }

  public async update({ id, data }: IUpdateSecondWallDTO): Promise<SecondWall | undefined> {
    const foundIndex = this.SecondWalls.findIndex(second_wall => second_wall.id === id);

    if (foundIndex < 0) return undefined;

    const foundSecondWall = this.SecondWalls[foundIndex];

    Object.assign(foundSecondWall, data);

    this.SecondWalls[foundIndex] = foundSecondWall;

    return foundSecondWall;
  }

  public async deleteById(id: string): Promise<void> {
    const foundIndex = this.SecondWalls.findIndex(second_wall => second_wall.id === id);

    if (foundIndex >= 0) this.SecondWalls.splice(foundIndex, 1);
  }
}

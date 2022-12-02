import FirstWall from '@domain/models/FirstWall';

import IFirstWallRepository from '@data/protocols/database/repositories/firstWall/IFirstWallRepository';

import ICreateFirstWallDTO from '@data/protocols/database/repositories/firstWall/dtos/ICreateFirstWallDTO';
import IUpdateFirstWallDTO from '@data/protocols/database/repositories/firstWall/dtos/IUpdateFirstWallDTO';

export default class FakeTypeOrmFirstWallRepository implements IFirstWallRepository {
  private readonly FirstWalls: FirstWall[] = [];

  public async create({
    height,
    width,
    door_quantity,
    window_quantity,
    room_id,
  }: ICreateFirstWallDTO): Promise<FirstWall> {
    const createFirstWall = {
      id: Math.random().toString(),
      height,
      width,
      door_quantity,
      window_quantity,
      room_id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.FirstWalls.push(createFirstWall);

    return createFirstWall;
  }

  public async findByRoomId(room_id: string): Promise<FirstWall | undefined> {
    const foundFirstWall = this.FirstWalls.find(first_wall => first_wall.room_id === room_id);

    return foundFirstWall;
  }

  public async update({ id, data }: IUpdateFirstWallDTO): Promise<FirstWall | undefined> {
    const foundIndex = this.FirstWalls.findIndex(first_wall => first_wall.id === id);

    if (foundIndex < 0) return undefined;

    const foundFirstWall = this.FirstWalls[foundIndex];

    Object.assign(foundFirstWall, data);

    this.FirstWalls[foundIndex] = foundFirstWall;

    return foundFirstWall;
  }

  public async deleteById(id: string): Promise<void> {
    const foundIndex = this.FirstWalls.findIndex(first_wall => first_wall.id === id);

    if (foundIndex >= 0) this.FirstWalls.splice(foundIndex, 1);
  }
}

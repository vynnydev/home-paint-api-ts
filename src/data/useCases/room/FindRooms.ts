import Room from '@domain/models/Room';

import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';
import IFindRooms from '@domain/useCases/room/IFindRooms';

export default class FindRooms implements IFindRooms {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public async find(): Promise<Room[]> {
    const foundRooms = await this.roomRepository.findRooms();

    return foundRooms;
  }
}

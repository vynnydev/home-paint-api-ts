import IAliasGenerator from '@data/protocols/utils/aliasGenerator/IAliasGenerator';

import Room from '@domain/models/Room';
import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import ICreateRoomDTO from '@domain/useCases/room/dtos/ICreateRoomDTO';
import ICreateRoom from '@domain/useCases/room/ICreateRoom';

export default class CreateRoom implements ICreateRoom {
  constructor(
    private readonly roomRepository: IRoomRepository,
    private readonly aliasGenerator: IAliasGenerator,
  ) {}

  public async create({ room_name, owner_name }: ICreateRoomDTO): Promise<Room> {
    const generatedAlias = this.aliasGenerator.generate('room');

    const createdRoom = await this.roomRepository.create({
      alias_id: generatedAlias,
      room_name,
      owner_name,
    });

    return createdRoom;
  }
}

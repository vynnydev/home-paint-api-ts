import AppError from '@utils/errors/AppError';

import Room from '@domain/models/Room';
import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import IUpdateRoom from '@domain/useCases/room/IUpdateRoom';
import IUpdateRoomDTO from '@domain/useCases/room/dtos/IUpdateRoomDTO';

export default class UpdateRoom implements IUpdateRoom {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public async update({ room_alias_id, data }: IUpdateRoomDTO): Promise<Room> {
    const foundRoom = await this.roomRepository.findByAliasId(room_alias_id);

    if (!foundRoom)
      throw new AppError({ message: 'Room does not exists', status_code: 400 });

    const { room_name, owner_name } = data;

    const updatedRoom = await this.roomRepository.update({
      id: foundRoom.id,
      data: { room_name, owner_name },
    });

    if (!updatedRoom)
      throw new AppError({ message: 'Could not update room', status_code: 400 });

    return updatedRoom;
  }
}

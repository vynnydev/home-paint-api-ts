import AppError from '@utils/errors/AppError';

import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';

import IDeleteRoom from '@domain/useCases/room/IDeleteRoom';

export default class DeleteRoom implements IDeleteRoom {
  constructor(private readonly roomRepository: IRoomRepository) {}

  public async delete(room_alias_id: string): Promise<void> {
    const foundRoom = await this.roomRepository.findByAliasId(room_alias_id);

    if (!foundRoom)
      throw new AppError({ message: 'Room does not exists', status_code: 400 });

    await this.roomRepository.deleteById(foundRoom.id);
  }
}

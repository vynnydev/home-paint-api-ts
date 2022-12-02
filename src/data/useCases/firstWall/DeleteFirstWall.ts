import AppError from '@utils/errors/AppError';

import IFirstWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';

import IDeleteFirstWall from '@domain/useCases/firstWall/IDeleteFirstWall';

export default class DeleteFirstWall implements IDeleteFirstWall {
  constructor(private readonly firstWallRepository: IFirstWallRepository) {}

  public async delete(room_id: string): Promise<void> {
    const foundFirstWall = await this.firstWallRepository.findByRoomId(room_id);

    if (!foundFirstWall)
      throw new AppError({ message: 'First wall does not exists', status_code: 400 });

    await this.firstWallRepository.deleteById(foundFirstWall.id)
  }
}

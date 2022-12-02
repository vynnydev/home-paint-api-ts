import AppError from '@utils/errors/AppError';

import ISecondWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';

import IDeleteSecondWall from '@domain/useCases/secondWall/IDeleteSecondWall';

export default class DeleteSecondWall implements IDeleteSecondWall {
  constructor(private readonly secondWallRepository: ISecondWallRepository) {}

  public async delete(room_id: string): Promise<void> {
    const foundSecondWall = await this.secondWallRepository.findByRoomId(room_id);

    if (!foundSecondWall)
      throw new AppError({ message: 'Second wall does not exists', status_code: 400 });

    await this.secondWallRepository.deleteById(foundSecondWall.id);
  }
}

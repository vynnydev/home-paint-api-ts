import AppError from '@utils/errors/AppError';

import IFourthWallRepository from '@data/protocols/database/repositories/fourthWall/IFourthWallRepository';

import IDeleteFourthWall from '@domain/useCases/fourthWall/IDeleteFourthWall';

export default class DeleteFourthWall implements IDeleteFourthWall {
  constructor(private readonly fourthWallRepository: IFourthWallRepository) {}

  public async delete(room_id: string): Promise<void> {
    const foundFourthWall = await this.fourthWallRepository.findByRoomId(room_id);

    if (!foundFourthWall)
      throw new AppError({ message: 'Fourth wall does not exists', status_code: 400 });

    await this.fourthWallRepository.deleteById(foundFourthWall.id);
  }
}

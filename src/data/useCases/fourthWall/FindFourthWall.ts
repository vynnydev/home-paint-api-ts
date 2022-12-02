import AppError from '@utils/errors/AppError';

import FourthWall from '@domain/models/FourthWall';

import IFourthWallRepository from '@data/protocols/database/repositories/fourthWall/IFourthWallRepository';
import IFindFourthWall from '@domain/useCases/fourthWall/IFindFourthWall';

export default class FindFourthWall implements IFindFourthWall {
  constructor(private readonly fourthWallRepository: IFourthWallRepository) {}

  public async find(room_id: string): Promise<FourthWall> {
    const foundFourthWall = await this.fourthWallRepository.findByRoomId(room_id);

    if (!foundFourthWall)
      throw new AppError({ message: 'Fourth wall does not exists', status_code: 404 });

    return foundFourthWall;
  }
}

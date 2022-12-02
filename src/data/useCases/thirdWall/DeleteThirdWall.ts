import AppError from '@utils/errors/AppError';

import IThirdWallRepository from '@data/protocols/database/repositories/thirdWall/IThirdWallRepository';

import IDeleteThirdWall from '@domain/useCases/thirdWall/IDeleteThirdWall';

export default class DeleteThirdWall implements IDeleteThirdWall {
  constructor(private readonly thirdWallRepository: IThirdWallRepository) {}

  public async delete(room_id: string): Promise<void> {
    const foundThirdWall = await this.thirdWallRepository.findByRoomId(room_id);

    if (!foundThirdWall)
      throw new AppError({ message: 'Third wall does not exists', status_code: 400 });

    await this.thirdWallRepository.deleteById(foundThirdWall.id);
  }
}

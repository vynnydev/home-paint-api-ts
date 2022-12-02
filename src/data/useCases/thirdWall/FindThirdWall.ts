import AppError from '@utils/errors/AppError';

import ThirdWall from '@domain/models/ThirdWall';

import IThirdWallRepository from '@data/protocols/database/repositories/thirdWall/IThirdWallRepository';
import IFindThirdWall from '@domain/useCases/thirdWall/IFindThirdWall';

export default class FindThirdWall implements IFindThirdWall {
  constructor(private readonly employeeRepository: IThirdWallRepository) {}

  public async find(room_id: string): Promise<ThirdWall> {
    const foundThirdWall = await this.employeeRepository.findByRoomId(room_id);

    if (!foundThirdWall)
      throw new AppError({ message: 'Third wall does not exists', status_code: 404 });

    return foundThirdWall;
  }
}

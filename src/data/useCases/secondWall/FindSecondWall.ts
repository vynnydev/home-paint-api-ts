import AppError from '@utils/errors/AppError';

import SecondWall from '@domain/models/SecondWall';

import ISecondWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';
import IFindSecondWall from '@domain/useCases/secondWall/IFindSecondWall';

export default class FindSecondWall implements IFindSecondWall {
  constructor(private readonly employeeRepository: ISecondWallRepository) {}

  public async find(room_id: string): Promise<SecondWall> {
    const foundSecondWall = await this.employeeRepository.findByRoomId(room_id);

    if (!foundSecondWall)
      throw new AppError({ message: 'Second wall does not exists', status_code: 404 });

    return foundSecondWall;
  }
}

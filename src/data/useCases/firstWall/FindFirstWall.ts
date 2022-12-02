import AppError from '@utils/errors/AppError';

import FirstWall from '@domain/models/FirstWall';

import IFirstWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';
import IFindFirstWall from '@domain/useCases/firstWall/IFindFirstWall';

export default class FindFirstWall implements IFindFirstWall {
  constructor(private readonly employeeRepository: IFirstWallRepository) {}

  public async find(room_id: string): Promise<FirstWall> {
    const foundFirstWall = await this.employeeRepository.findByRoomId(room_id);

    if (!foundFirstWall)
      throw new AppError({ message: 'First wall does not exists', status_code: 404 });

    return foundFirstWall
  }
}

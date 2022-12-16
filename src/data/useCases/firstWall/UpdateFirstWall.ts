import AppError from '@utils/errors/AppError';

import FirstWall from '@domain/models/FirstWall';
import IFirstWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';

import IUpdateFirstWall from '@domain/useCases/firstWall/IUpdateFirstWall';
import IUpdateFirstWallDTO from '@domain/useCases/firstWall/dtos/IUpdateFirstWallDTO';

export default class UpdateFirstWall implements IUpdateFirstWall {
  constructor(private readonly employeeRepository: IFirstWallRepository) {}

  public async update({ room_id, data }: IUpdateFirstWallDTO): Promise<FirstWall> {
    const foundFirstWall = await this.employeeRepository.findByRoomId(room_id);

    if (!foundFirstWall)
      throw new AppError({
        message: 'First wall does not exists or is inactive',
        status_code: 400,
      });

    const { height, width, door_quantity, window_quantity } = data;

    const updatedFirstWall = await this.employeeRepository.update({
      id: foundFirstWall.id,
      data: { height, width, door_quantity, window_quantity },
    });

    if (!updatedFirstWall)
      throw new AppError({ message: 'Could not update employee', status_code: 400 });

    return updatedFirstWall;
  }
}

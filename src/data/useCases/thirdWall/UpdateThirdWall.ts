import AppError from '@utils/errors/AppError';

import ThirdWall from '@domain/models/ThirdWall';
import IThirdWallRepository from '@data/protocols/database/repositories/thirdWall/IThirdWallRepository';

import IUpdateThirdWall from '@domain/useCases/thirdWall/IUpdateThirdWall';
import IUpdateThirdWallDTO from '@domain/useCases/thirdWall/dtos/IUpdateThirdWallDTO';

export default class UpdateThirdWall implements IUpdateThirdWall {
  constructor(private readonly employeeRepository: IThirdWallRepository) {}

  public async update({ room_id, data }: IUpdateThirdWallDTO): Promise<ThirdWall> {
    const foundThirdWall = await this.employeeRepository.findByRoomId(room_id);

    if (!foundThirdWall)
      throw new AppError({ message: 'Third wall does not exists', status_code: 400 });

    const { height, width, door_quantity, window_quantity } = data;

    const updatedThirdWall = await this.employeeRepository.update({
      id: foundThirdWall.id,
      data: { height, width, door_quantity, window_quantity },
    });

    if (!updatedThirdWall)
      throw new AppError({ message: 'Could not update third wall', status_code: 400 });

    return updatedThirdWall;
  }
}

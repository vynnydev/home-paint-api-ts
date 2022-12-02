import AppError from '@utils/errors/AppError';

import FourthWall from '@domain/models/FourthWall';
import IFourthWallRepository from '@data/protocols/database/repositories/fourthWall/IFourthWallRepository';

import IUpdateFourthWall from '@domain/useCases/fourthWall/IUpdateFourthWall';
import IUpdateFourthWallDTO from '@domain/useCases/fourthWall/dtos/IUpdateFourthWallDTO';

export default class UpdateFourthWall implements IUpdateFourthWall {
  constructor(private readonly fourthWallRepository: IFourthWallRepository) {}

  public async update({ room_id, data }: IUpdateFourthWallDTO): Promise<FourthWall> {
    const foundFourthWall = await this.fourthWallRepository.findByRoomId(room_id);

    if (!foundFourthWall)
      throw new AppError({ message: 'Fourth wall does not exists', status_code: 400 });

    const { height, width, door_quantity, window_quantity } = data;

    const updatedFourthWall = await this.fourthWallRepository.update({
      id: foundFourthWall.id,
      data: { height, width, door_quantity, window_quantity },
    });

    if (!updatedFourthWall)
      throw new AppError({ message: 'Could not update fourth wall', status_code: 400 });

    return updatedFourthWall;
  }
}

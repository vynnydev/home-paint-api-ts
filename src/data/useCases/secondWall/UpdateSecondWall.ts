import AppError from '@utils/errors/AppError';

import SecondWall from '@domain/models/SecondWall';
import ISecondWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';

import IUpdateSecondWall from '@domain/useCases/secondWall/IUpdateSecondWall';
import IUpdateSecondWallDTO from '@domain/useCases/secondWall/dtos/IUpdateSecondWallDTO';

export default class UpdateSecondWall implements IUpdateSecondWall {
  constructor(private readonly secondRepository: ISecondWallRepository) {}

  public async update({ room_id, data }: IUpdateSecondWallDTO): Promise<SecondWall> {
    const foundSecondWall = await this.secondRepository.findByRoomId(room_id);

    if (!foundSecondWall)
      throw new AppError({ message: 'Second wall does not exists', status_code: 400 });

    const { height, width, door_quantity, window_quantity } = data;

    const updatedSecondWall = await this.secondRepository.update({
      id: foundSecondWall.id,
      data: { height, width, door_quantity, window_quantity },
    });

    if (!updatedSecondWall)
      throw new AppError({ message: 'Could not update second wall', status_code: 400 });

    return updatedSecondWall;
  }
}

import SecondWall from '@domain/models/SecondWall';
import ICreateSecondWallDTO from '@domain/useCases/secondWall/dtos/ICreateSecondWallDTO';

export default interface ICreateSecondWall {
  create(data: ICreateSecondWallDTO): Promise<SecondWall>;
}

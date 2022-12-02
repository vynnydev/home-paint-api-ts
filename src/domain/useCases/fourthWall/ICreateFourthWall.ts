import FourthWall from '@domain/models/FourthWall';
import ICreateFourthWallDTO from '@domain/useCases/fourthWall/dtos/ICreateFourthWallDTO';

export default interface ICreateFourthWall {
  create(data: ICreateFourthWallDTO): Promise<FourthWall>;
}

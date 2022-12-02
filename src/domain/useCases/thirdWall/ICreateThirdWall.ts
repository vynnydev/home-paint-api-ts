import ThirdWall from '@domain/models/ThirdWall';
import ICreateThirdWallDTO from '@domain/useCases/thirdWall/dtos/ICreateThirdWallDTO';

export default interface ICreateThirdWall {
  create(data: ICreateThirdWallDTO): Promise<ThirdWall>;
}

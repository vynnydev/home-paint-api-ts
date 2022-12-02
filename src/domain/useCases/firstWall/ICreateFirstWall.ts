import FirstWall from '@domain/models/FirstWall';
import ICreateFirstWallDTO from '@domain/useCases/firstWall/dtos/ICreateFirstWallDTO';

export default interface ICreateFirstWall {
  create(data: ICreateFirstWallDTO): Promise<FirstWall>;
}

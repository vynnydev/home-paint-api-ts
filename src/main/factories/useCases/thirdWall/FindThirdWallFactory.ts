import typeOrmThirdWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmThirdWallRepositoryFactory';

import IFindThirdWall from '@domain/useCases/thirdWall/IFindThirdWall';
import FindThirdWall from '@data/useCases/thirdWall/FindThirdWall';

const makeFindThirdWall = (): IFindThirdWall => {
  const typeOrmThirdWallRepository =
    typeOrmThirdWallRepositoryFactory.makeTypeOrmThirdWallRepository();

  const createThirdWall = new FindThirdWall(typeOrmThirdWallRepository);

  return createThirdWall;
};

export default { makeFindThirdWall };

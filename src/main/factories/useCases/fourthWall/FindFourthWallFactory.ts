import typeOrmFourthWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmFourthWallRepositoryFactory';

import IFindFourthWall from '@domain/useCases/fourthWall/IFindFourthWall';
import FindFourthWall from '@data/useCases/fourthWall/FindFourthWall';

const makeFindFourthWall = (): IFindFourthWall => {
  const typeOrmFourthWallRepository =
    typeOrmFourthWallRepositoryFactory.makeTypeOrmFourthWallRepository();

  const createFourthWall = new FindFourthWall(typeOrmFourthWallRepository);

  return createFourthWall;
};

export default { makeFindFourthWall };

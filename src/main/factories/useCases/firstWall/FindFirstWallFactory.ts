import typeOrmFirstWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmFirstWallRepositoryFactory';

import IFindFirstWall from '@domain/useCases/firstWall/IFindFirstWall';
import FindFirstWall from '@data/useCases/firstWall/FindFirstWall';

const makeFindFirstWall = (): IFindFirstWall => {
  const typeOrmFirstWallRepository =
    typeOrmFirstWallRepositoryFactory.makeTypeOrmFirstWallRepository();

  const createFirstWall = new FindFirstWall(typeOrmFirstWallRepository);

  return createFirstWall;
};

export default { makeFindFirstWall };

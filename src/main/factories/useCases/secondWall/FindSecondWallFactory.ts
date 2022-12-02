import typeOrmSecondWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmSecondWallRepositoryFactory';

import IFindSecondWall from '@domain/useCases/secondWall/IFindSecondWall';
import FindSecondWall from '@data/useCases/secondWall/FindSecondWall';

const makeFindSecondWall = (): IFindSecondWall => {
  const typeOrmSecondWallRepository =
    typeOrmSecondWallRepositoryFactory.makeTypeOrmSecondWallRepository();

  const createSecondWall = new FindSecondWall(typeOrmSecondWallRepository);

  return createSecondWall;
};

export default { makeFindSecondWall };

import typeOrmSecondWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmSecondWallRepositoryFactory';

import IUpdateSecondWall from '@domain/useCases/secondWall/IUpdateSecondWall';
import UpdateSecondWall from '@data/useCases/secondWall/UpdateSecondWall';

const makeUpdateSecondWall = (): IUpdateSecondWall => {
  const typeOrmSecondWallRepository =
    typeOrmSecondWallRepositoryFactory.makeTypeOrmSecondWallRepository();

  const createSecondWall = new UpdateSecondWall(typeOrmSecondWallRepository);

  return createSecondWall;
};

export default { makeUpdateSecondWall };

import typeOrmSecondWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmSecondWallRepositoryFactory';

import IDeleteSecondWall from '@domain/useCases/secondWall/IDeleteSecondWall';
import DeleteSecondWall from '@data/useCases/secondWall/DeleteSecondWall';

const makeDeleteSecondWall = (): IDeleteSecondWall => {
  const typeOrmSecondWallRepository =
    typeOrmSecondWallRepositoryFactory.makeTypeOrmSecondWallRepository();

  const createSecondWall = new DeleteSecondWall(typeOrmSecondWallRepository);

  return createSecondWall;
};

export default { makeDeleteSecondWall };

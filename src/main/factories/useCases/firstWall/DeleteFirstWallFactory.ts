import typeOrmFirstWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmFirstWallRepositoryFactory';

import IDeleteFirstWall from '@domain/useCases/firstWall/IDeleteFirstWall';
import DeleteFirstWall from '@data/useCases/firstWall/DeleteFirstWall';

const makeDeleteFirstWall = (): IDeleteFirstWall => {
  const typeOrmFirstWallRepository =
    typeOrmFirstWallRepositoryFactory.makeTypeOrmFirstWallRepository();

  const createFirstWall = new DeleteFirstWall(typeOrmFirstWallRepository);

  return createFirstWall;
};

export default { makeDeleteFirstWall };

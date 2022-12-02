import typeOrmFirstWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmFirstWallRepositoryFactory';

import IUpdateFirstWall from '@domain/useCases/firstWall/IUpdateFirstWall';
import UpdateFirstWall from '@data/useCases/firstWall/UpdateFirstWall';

const makeUpdateFirstWall = (): IUpdateFirstWall => {
  const typeOrmFirstWallRepository =
    typeOrmFirstWallRepositoryFactory.makeTypeOrmFirstWallRepository();

  const createFirstWall = new UpdateFirstWall(typeOrmFirstWallRepository);

  return createFirstWall;
};

export default { makeUpdateFirstWall };

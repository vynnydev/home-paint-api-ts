import typeOrmFourthWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmFourthWallRepositoryFactory';

import IUpdateFourthWall from '@domain/useCases/fourthWall/IUpdateFourthWall';
import UpdateFourthWall from '@data/useCases/fourthWall/UpdateFourthWall';

const makeUpdateFourthWall = (): IUpdateFourthWall => {
  const typeOrmFourthWallRepository =
    typeOrmFourthWallRepositoryFactory.makeTypeOrmFourthWallRepository();

  const createFourthWall = new UpdateFourthWall(typeOrmFourthWallRepository);

  return createFourthWall;
};

export default { makeUpdateFourthWall };

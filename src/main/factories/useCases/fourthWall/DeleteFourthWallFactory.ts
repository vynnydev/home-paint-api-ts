import typeOrmFourthWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmFourthWallRepositoryFactory';

import IDeleteFourthWall from '@domain/useCases/fourthWall/IDeleteFourthWall';
import DeleteFourthWall from '@data/useCases/fourthWall/DeleteFourthWall';

const makeDeleteFourthWall = (): IDeleteFourthWall => {
  const typeOrmFourthWallRepository =
    typeOrmFourthWallRepositoryFactory.makeTypeOrmFourthWallRepository();

  const createFourthWall = new DeleteFourthWall(typeOrmFourthWallRepository);

  return createFourthWall;
};

export default { makeDeleteFourthWall };

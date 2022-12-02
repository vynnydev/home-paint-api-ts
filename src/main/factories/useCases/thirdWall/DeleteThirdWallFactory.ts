import typeOrmThirdWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmThirdWallRepositoryFactory';

import IDeleteThirdWall from '@domain/useCases/thirdWall/IDeleteThirdWall';
import DeleteThirdWall from '@data/useCases/thirdWall/DeleteThirdWall';

const makeDeleteThirdWall = (): IDeleteThirdWall => {
  const typeOrmThirdWallRepository =
    typeOrmThirdWallRepositoryFactory.makeTypeOrmThirdWallRepository();

  const createThirdWall = new DeleteThirdWall(typeOrmThirdWallRepository);

  return createThirdWall;
};

export default { makeDeleteThirdWall };

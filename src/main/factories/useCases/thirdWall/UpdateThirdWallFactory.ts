import typeOrmThirdWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmThirdWallRepositoryFactory';

import IUpdateThirdWall from '@domain/useCases/thirdWall/IUpdateThirdWall';
import UpdateThirdWall from '@data/useCases/thirdWall/UpdateThirdWall';

const makeUpdateThirdWall = (): IUpdateThirdWall => {
  const typeOrmThirdWallRepository =
    typeOrmThirdWallRepositoryFactory.makeTypeOrmThirdWallRepository();

  const createThirdWall = new UpdateThirdWall(typeOrmThirdWallRepository);

  return createThirdWall;
};

export default { makeUpdateThirdWall };

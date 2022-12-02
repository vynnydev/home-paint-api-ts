import typeOrmRoomRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmRoomRepositoryFactory';
import typeOrmThirdWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmThirdWallRepositoryFactory';

import ICreateThirdWall from '@domain/useCases/thirdWall/ICreateThirdWall';
import CreateThirdWall from '@data/useCases/thirdWall/CreateThirdWall';

const makeCreateThirdWall = (): ICreateThirdWall => {
  const typeOrmRoomRepository = typeOrmRoomRepositoryFactory.makeTypeOrmRoomRepository();
  const typeOrmThirdWallRepository =
    typeOrmThirdWallRepositoryFactory.makeTypeOrmThirdWallRepository();

  const createThirdWall = new CreateThirdWall(
    typeOrmRoomRepository,
    typeOrmThirdWallRepository,
  );

  return createThirdWall;
};

export default { makeCreateThirdWall };

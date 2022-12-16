import typeOrmRoomRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmRoomRepositoryFactory';
import typeOrmFourthWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmFourthWallRepositoryFactory';

import ICreateFourthWall from '@domain/useCases/fourthWall/ICreateFourthWall';
import CreateFourthWall from '@data/useCases/fourthWall/CreateFourthWall';

const makeCreateFourthWall = (): ICreateFourthWall => {
  const typeOrmRoomRepository = typeOrmRoomRepositoryFactory.makeTypeOrmRoomRepository();
  const typeOrmFourthWallRepository =
    typeOrmFourthWallRepositoryFactory.makeTypeOrmFourthWallRepository();

  const createFourthWall = new CreateFourthWall(typeOrmRoomRepository, typeOrmFourthWallRepository);

  return createFourthWall;
};

export default { makeCreateFourthWall };

import typeOrmRoomRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmRoomRepositoryFactory';
import typeOrmSecondWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmSecondWallRepositoryFactory';

import ICreateSecondWall from '@domain/useCases/secondWall/ICreateSecondWall';
import CreateSecondWall from '@data/useCases/secondWall/CreateSecondWall';

const makeCreateSecondWall = (): ICreateSecondWall => {
  const typeOrmRoomRepository = typeOrmRoomRepositoryFactory.makeTypeOrmRoomRepository();
  const typeOrmSecondWallRepository =
    typeOrmSecondWallRepositoryFactory.makeTypeOrmSecondWallRepository();

  const createSecondWall = new CreateSecondWall(
    typeOrmRoomRepository,
    typeOrmSecondWallRepository,
  );

  return createSecondWall;
};

export default { makeCreateSecondWall };

import typeOrmRoomRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmRoomRepositoryFactory';
import typeOrmFirstWallRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmFirstWallRepositoryFactory';

import ICreateFirstWall from '@domain/useCases/firstWall/ICreateFirstWall';
import CreateFirstWall from '@data/useCases/firstWall/CreateFirstWall';

const makeCreateFirstWall = (): ICreateFirstWall => {
  const typeOrmRoomRepository = typeOrmRoomRepositoryFactory.makeTypeOrmRoomRepository();
  const typeOrmFirstWallRepository =
    typeOrmFirstWallRepositoryFactory.makeTypeOrmFirstWallRepository();

  const createFirstWall = new CreateFirstWall(
    typeOrmRoomRepository,
    typeOrmFirstWallRepository,
  );

  return createFirstWall;
};

export default { makeCreateFirstWall };

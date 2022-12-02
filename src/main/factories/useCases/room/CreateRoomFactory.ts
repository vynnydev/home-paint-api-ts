import aliasGeneratorFactory from '@main/factories/aliasGenerator/AliasGeneratorFactory';

import typeOrmRoomRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmRoomRepositoryFactory';

import ICreateRoom from '@domain/useCases/room/ICreateRoom';
import CreateRoom from '@data/useCases/room/CreateRoom';

const makeCreateRoom = (): ICreateRoom => {
  const aliasGenerator = aliasGeneratorFactory.makeAliasGenerator();
  const typeOrmRoomRepository =
    typeOrmRoomRepositoryFactory.makeTypeOrmRoomRepository();

  const createRoom = new CreateRoom(typeOrmRoomRepository, aliasGenerator);

  return createRoom;
};

export default { makeCreateRoom };

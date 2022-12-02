import typeOrmRoomRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmRoomRepositoryFactory';

import IFindRooms from '@domain/useCases/room/IFindRooms';
import FindRooms from '@data/useCases/room/FindRooms';

const makeFindRooms = (): IFindRooms => {
  const typeOrmRoomRepository =
    typeOrmRoomRepositoryFactory.makeTypeOrmRoomRepository();

  const findRooms = new FindRooms(typeOrmRoomRepository);

  return findRooms;
};

export default { makeFindRooms };

import typeOrmRoomRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmRoomRepositoryFactory';

import IDeleteRoom from '@domain/useCases/room/IDeleteRoom';
import DeleteRoom from '@data/useCases/room/DeleteRoom';

const makeDeleteRoom = (): IDeleteRoom => {
  const typeOrmRoomRepository = typeOrmRoomRepositoryFactory.makeTypeOrmRoomRepository();

  const deleteRoom = new DeleteRoom(typeOrmRoomRepository);

  return deleteRoom;
};

export default { makeDeleteRoom };

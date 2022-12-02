import typeOrmRoomRepositoryFactory from '@main/factories/repositories/typeOrm/TypeOrmRoomRepositoryFactory';

import IUpdateRoom from '@domain/useCases/room/IUpdateRoom';
import UpdateRoom from '@data/useCases/room/UpdateRoom';

const makeUpdateRoom = (): IUpdateRoom => {
  const typeOrmRoomRepository =
    typeOrmRoomRepositoryFactory.makeTypeOrmRoomRepository();

  const updateRoom = new UpdateRoom(typeOrmRoomRepository);

  return updateRoom;
};

export default { makeUpdateRoom };

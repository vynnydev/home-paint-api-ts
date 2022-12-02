import IRoomRepository from '@data/protocols/database/repositories/room/IRoomRepository';
import TypeOrmRoomRepository from '@infra/database/repositories/room/typeOrm/TypeOrmRoomRepository';

const makeTypeOrmRoomRepository = (): IRoomRepository => {
  const typeOrmRoomRepository = new TypeOrmRoomRepository();

  return typeOrmRoomRepository;
};

export default { makeTypeOrmRoomRepository };

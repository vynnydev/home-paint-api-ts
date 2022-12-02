import IFirstWallRepository from '@data/protocols/database/repositories/firstWall/IFirstWallRepository';
import TypeOrmFirstWallRepository from '@infra/database/repositories/firstWall/typeOrm/TypeOrmFirstWallRepository';

const makeTypeOrmFirstWallRepository = (): IFirstWallRepository => {
  const typeOrmFirstWallRepository = new TypeOrmFirstWallRepository();

  return typeOrmFirstWallRepository;
};

export default { makeTypeOrmFirstWallRepository };

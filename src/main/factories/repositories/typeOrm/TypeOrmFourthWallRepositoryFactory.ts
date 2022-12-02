import IFourthWallRepository from '@data/protocols/database/repositories/fourthWall/IFourthWallRepository';
import TypeOrmFourthWallRepository from '@infra/database/repositories/fourthWall/typeOrm/TypeOrmFourthWallRepository';

const makeTypeOrmFourthWallRepository = (): IFourthWallRepository => {
  const typeOrmFourthWallRepository = new TypeOrmFourthWallRepository();

  return typeOrmFourthWallRepository;
};

export default { makeTypeOrmFourthWallRepository };

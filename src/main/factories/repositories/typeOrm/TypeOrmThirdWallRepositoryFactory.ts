import IThirdWallRepository from '@data/protocols/database/repositories/thirdWall/IThirdWallRepository';
import TypeOrmThirdWallRepository from '@infra/database/repositories/thirdWall/typeOrm/TypeOrmThirdWallRepository';

const makeTypeOrmThirdWallRepository = (): IThirdWallRepository => {
  const typeOrmThirdWallRepository = new TypeOrmThirdWallRepository();

  return typeOrmThirdWallRepository;
};

export default { makeTypeOrmThirdWallRepository };

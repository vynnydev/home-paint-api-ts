import ISecondWallRepository from '@data/protocols/database/repositories/secondWall/ISecondWallRepository';
import TypeOrmSecondWallRepository from '@infra/database/repositories/secondWall/typeOrm/TypeOrmSecondWallRepository';

const makeTypeOrmSecondWallRepository = (): ISecondWallRepository => {
  const typeOrmSecondWallRepository = new TypeOrmSecondWallRepository();

  return typeOrmSecondWallRepository;
};

export default { makeTypeOrmSecondWallRepository };

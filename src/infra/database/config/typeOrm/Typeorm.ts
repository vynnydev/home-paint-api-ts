import 'dotenv/config';

import RoomEntity from '@infra/database/entities/typeOrm/Room';
import FirstWallEntity from '@infra/database/entities/typeOrm/FirstWall';
import SecondWallEntity from '@infra/database/entities/typeOrm/SecondWall';
import ThirdWallEntity from '@infra/database/entities/typeOrm/ThirdWall';
import FourthWallEntity from '@infra/database/entities/typeOrm/FourthWall';

const entities = [RoomEntity, FirstWallEntity, SecondWallEntity, ThirdWallEntity, FourthWallEntity];
const config = {
  default: {
    type: 'postgres',
    host: 'pgdb',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'dbpaint',
    migrationsTableName: 'migrations',
    dropSchema: false,
    migrationsRun: false,
    synchronize: false,
    NODE_ENV: 'default',
    entities,
  },
  test: {
    type: 'postgres',
    host: 'pgdb',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'dbtest',
    dropSchema: true,
    migrationsRun: true,
    NODE_ENV: 'test',
    entities,
  },
};

const environment = process.env.NODE_ENV?.trim() === 'test' ? 'test' : 'default';

const typeOrmConfig = config[environment];

export default { ...typeOrmConfig };

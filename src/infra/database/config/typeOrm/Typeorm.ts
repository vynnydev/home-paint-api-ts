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
    host: process.env.PG_HOST as string,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_USER as string,
    password: process.env.PG_PASSWORD as string,
    database: 'dbpaint',
    migrationsTableName: 'migrations',
    dropSchema: false,
    migrationsRun: false,
    synchronize: true,
    NODE_ENV: 'default',
    entities,
  },
  test: {
    type: 'postgres',
    host: process.env.PG_TEST_HOST as string,
    port: Number(process.env.PG_TEST_PORT),
    username: process.env.PG_TEST_USER as string,
    password: process.env.PG_TEST_PASSWORD as string,
    database: 'dbpaint',
    dropSchema: true,
    migrationsRun: true,
    NODE_ENV: 'test',
    entities,
  },
};

const environment = process.env.NODE_ENV?.trim() === 'test' ? 'test' : 'default';

const typeOrmConfig = config[environment];

export default { ...typeOrmConfig };

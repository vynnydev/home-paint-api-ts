import { ConnectionOptions } from 'typeorm';

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'pgdb',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'dbpaint',
  entities: [`${__dirname}/src/infra/database/migrations/entities/**/*{.ts,.js}`],

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [`${__dirname}/typeOrm/**/*{.ts,.js}`],
  cli: {
    migrationsDir: 'src/infra/database/migrations/typeOrm',
  },
};

export default config;

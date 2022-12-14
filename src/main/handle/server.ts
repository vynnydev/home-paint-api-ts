import '@infra/datadog/tracer/tracer';
import 'dotenv/config';
import 'reflect-metadata';

import swaggerUi from 'swagger-ui-express';
import { app } from '@main/config/app';

import databaseConnectionManagerFactory from '@main/factories/helpers/typeOrm/DatabaseConnectionManagerFactory';
import testDatabaseConnectionManagerFactory from '@main/factories/helpers/typeOrm/TestDatabaseConnectionManagerFactory';
import swaggerDocument from '../../../swagger.json';

const startApp = async () => {
  const databaseConnectionManager =
    databaseConnectionManagerFactory.makeDatabaseConnectionManager();

  const testDatabaseConnectionManager =
    testDatabaseConnectionManagerFactory.makeTestDatabaseConnectionManager();

  await databaseConnectionManager.getConnection();
  await testDatabaseConnectionManager.getConnection();

  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      swaggerOptions: {
        url: '/swagger.json',
      },
    }),
  );

  app.listen(3000);
};

startApp();

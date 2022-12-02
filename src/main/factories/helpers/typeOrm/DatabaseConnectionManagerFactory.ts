import DatabaseConnectionManager from '@infra/database/helpers/typeOrm/DatabaseConnectionManager';

const makeDatabaseConnectionManager = (): DatabaseConnectionManager => {
  const databaseConnectionManager = new DatabaseConnectionManager();

  return databaseConnectionManager;
};

export default { makeDatabaseConnectionManager };

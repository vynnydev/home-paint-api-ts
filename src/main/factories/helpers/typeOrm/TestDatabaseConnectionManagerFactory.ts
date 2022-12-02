import TestDatabaseConnectionManager from '@infra/database/helpers/typeOrm/TestDatabaseConnectionManager';

const makeTestDatabaseConnectionManager = (): TestDatabaseConnectionManager => {
  const testDatabaseConnectionManager = new TestDatabaseConnectionManager();

  return testDatabaseConnectionManager;
};

export default { makeTestDatabaseConnectionManager };

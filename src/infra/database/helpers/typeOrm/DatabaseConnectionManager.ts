import {
  Connection,
  ConnectionManager,
  ConnectionOptions,
  createConnection,
  getConnectionManager,
} from 'typeorm';

import typeOrmConfig from '@infra/database/config/typeOrm/Typeorm';

export default class DatabaseConnectionManager {
  private readonly CONNECTION_NAME = 'default';

  private readonly ENVIRONMENT = process.env.NODE_ENV?.trim() === 'test' ? 'test' : 'default';

  private readonly connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public async getConnection(): Promise<Connection> {
    let connection: Connection;

    if (this.connectionManager.has(this.CONNECTION_NAME)) {
      connection = this.connectionManager.get(this.CONNECTION_NAME);

      if (!connection.isConnected) connection = await connection.connect();
    } else {
      const connectionOptions: ConnectionOptions = {
        type: 'postgres',
        host: typeOrmConfig.host,
        port: typeOrmConfig.port,
        username: typeOrmConfig.username,
        database: typeOrmConfig.database,
        password: typeOrmConfig.password,
        dropSchema: typeOrmConfig.dropSchema,
        entities: typeOrmConfig.entities,
        synchronize: true,
      };

      if (typeOrmConfig.password)
        Object.assign(connectionOptions, { password: typeOrmConfig.password });

      connection = await createConnection(connectionOptions);
    }

    return connection;
  }

  public async close(): Promise<void> {
    if (this.ENVIRONMENT === 'default') throw new Error('Operation Denied');

    const connection = this.connectionManager.get(this.CONNECTION_NAME);

    await connection.close();
  }

  public async clear(): Promise<void> {
    if (this.ENVIRONMENT === 'default') throw new Error('Operation Denied');

    const connection = this.connectionManager.get(this.CONNECTION_NAME);

    await connection.synchronize(true);
  }
}

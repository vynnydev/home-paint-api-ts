module.exports = {
    name: 'default',
    type: 'postgres',
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    migrations: ['./src/infra/database/migrations/typeOrm/*.ts'],
    cli: { migrationsDir: './src/infra/database/migrations/typeOrm/' },
};
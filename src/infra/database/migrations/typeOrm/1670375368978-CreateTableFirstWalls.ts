import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableFirstWalls1670375368978 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'first_walls',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`,
          },
          {
            name: 'height',
            type: 'float8',
          },
          {
            name: 'width',
            type: 'float8',
          },
          {
            name: 'door_quantity',
            type: 'integer',
          },
          {
            name: 'window_quantity',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('first_walls');
  }
}

import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class AddRoomIdInFirstWalls1670375331093 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'first_walls',
      new TableColumn({
        name: 'room_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'first_walls',
      new TableForeignKey({
        name: 'FK_ROOM_FIRST_WALL',
        columnNames: ['room_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'first_walls',
      new TableIndex({
        name: 'IDX_FIRST_WALL_ROOM_ID',
        columnNames: ['room_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('first_walls', 'FK_ROOM_FIRST_WALL');
    await queryRunner.dropIndex('first_walls', 'IDX_FIRST_WALL_ROOM_ID');
    await queryRunner.dropColumn('first_walls', 'room_id');
  }
}

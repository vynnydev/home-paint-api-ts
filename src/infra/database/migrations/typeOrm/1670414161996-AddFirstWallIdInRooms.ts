import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class AddFirstWallIdInRooms1670414161996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'rooms',
      new TableColumn({
        name: 'first_wall_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'rooms',
      new TableForeignKey({
        name: 'FK_FIRST_WALL_ROOM',
        columnNames: ['first_wall_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'first_walls',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'rooms',
      new TableIndex({
        name: 'IDX_ROOM_FIRST_WALL_ID',
        columnNames: ['first_wall_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('rooms', 'FK_FIRST_WALL_ROOM');
    await queryRunner.dropIndex('rooms', 'IDX_ROOM_FIRST_WALL_ID');
    await queryRunner.dropColumn('rooms', 'first_wall_id');
  }
}

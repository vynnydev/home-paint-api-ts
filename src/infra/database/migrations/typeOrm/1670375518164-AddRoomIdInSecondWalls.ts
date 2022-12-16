import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class AddRoomIdInSecondWalls1670375518164 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'second_walls',
      new TableColumn({
        name: 'room_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'second_walls',
      new TableForeignKey({
        name: 'FK_ROOM_SECOND_WALL',
        columnNames: ['room_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'second_walls',
      new TableIndex({
        name: 'IDX_SECOND_WALL_ROOM_ID',
        columnNames: ['room_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('second_walls', 'FK_ROOM_SECOND_WALL');
    await queryRunner.dropIndex('second_walls', 'IDX_SECOND_WALL_ROOM_ID');
    await queryRunner.dropColumn('second_walls', 'room_id');
  }
}

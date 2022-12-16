import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class AddRoomIdInThirdWalls1670375712351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'third_walls',
      new TableColumn({
        name: 'room_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'third_walls',
      new TableForeignKey({
        name: 'FK_ROOM_THIRD_WALL',
        columnNames: ['room_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'third_walls',
      new TableIndex({
        name: 'IDX_THIRD_WALL_ROOM_ID',
        columnNames: ['room_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('third_walls', 'FK_ROOM_THIRD_WALL');
    await queryRunner.dropIndex('third_walls', 'IDX_THIRD_WALL_ROOM_ID');
    await queryRunner.dropColumn('third_walls', 'room_id');
  }
}

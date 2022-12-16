import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class AddThirdWallIdInRooms1670414305633 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'rooms',
      new TableColumn({
        name: 'third_wall_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'rooms',
      new TableForeignKey({
        name: 'FK_THIRD_WALL_ROOM',
        columnNames: ['third_wall_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'third_walls',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'rooms',
      new TableIndex({
        name: 'IDX_ROOM_THIRD_WALL_ID',
        columnNames: ['third_wall_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('rooms', 'FK_THIRD_WALL_ROOM');
    await queryRunner.dropIndex('rooms', 'IDX_ROOM_THIRD_WALL_ID');
    await queryRunner.dropColumn('rooms', 'third_wall_id');
  }
}

import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class AddFourthWallIdInRooms1670414328141 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'rooms',
      new TableColumn({
        name: 'fourth_wall_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'rooms',
      new TableForeignKey({
        name: 'FK_FOURTH_WALL_ROOM',
        columnNames: ['fourth_wall_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'fourth_walls',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'rooms',
      new TableIndex({
        name: 'IDX_ROOM_FOURTH_WALL_ID',
        columnNames: ['fourth_wall_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('rooms', 'FK_FOURTH_WALL_ROOM');
    await queryRunner.dropIndex('rooms', 'IDX_ROOM_FOURTH_WALL_ID');
    await queryRunner.dropColumn('rooms', 'fourth_wall_id');
  }
}

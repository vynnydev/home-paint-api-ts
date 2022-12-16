import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class AddRoomIdInFourthWalls1670376122166 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'fourth_walls',
      new TableColumn({
        name: 'room_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'fourth_walls',
      new TableForeignKey({
        name: 'FK_ROOM_FOURTH_WALL',
        columnNames: ['room_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'fourth_walls',
      new TableIndex({
        name: 'IDX_FOURTH_WALL_ROOM_ID',
        columnNames: ['room_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('fourth_walls', 'FK_ROOM_FOURTH_WALL');
    await queryRunner.dropIndex('fourth_walls', 'IDX_FOURTH_WALL_ROOM_ID');
    await queryRunner.dropColumn('fourth_walls', 'room_id');
  }
}

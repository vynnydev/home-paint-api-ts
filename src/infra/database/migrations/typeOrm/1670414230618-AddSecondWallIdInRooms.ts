import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class AddSecondWallIdInRooms1670414230618 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'rooms',
      new TableColumn({
        name: 'second_wall_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'rooms',
      new TableForeignKey({
        name: 'FK_SECOND_WALL_ROOM',
        columnNames: ['second_wall_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'second_walls',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'rooms',
      new TableIndex({
        name: 'IDX_ROOM_SECOND_WALL_ID',
        columnNames: ['second_wall_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('rooms', 'FK_SECOND_WALL_ROOM');
    await queryRunner.dropIndex('rooms', 'IDX_ROOM_SECOND_WALL_ID');
    await queryRunner.dropColumn('rooms', 'second_wall_id');
  }
}

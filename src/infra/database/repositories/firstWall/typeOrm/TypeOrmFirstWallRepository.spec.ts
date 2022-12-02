import Room from '@domain/models/Room';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import TestDatabaseConnectionManager from '@infra/database/helpers/typeOrm/TestDatabaseConnectionManager';

import TypeOrmRoomRepository from '@infra/database/repositories/room/typeOrm/TypeOrmRoomRepository';
import TypeOrmFirstWallRepository from '@infra/database/repositories/firstWall/typeOrm/TypeOrmFirstWallRepository';

let testDatabaseConnectionManager: TestDatabaseConnectionManager;

let room: Room;

let typeOrmRoomRepository: TypeOrmRoomRepository;
let typeOrmFirstWallRepository: TypeOrmFirstWallRepository;

describe('TypeOrmFirstWallRepository', () => {
  beforeAll(async () => {
    testDatabaseConnectionManager = new TestDatabaseConnectionManager();

    typeOrmRoomRepository = new TypeOrmRoomRepository();
    typeOrmFirstWallRepository = new TypeOrmFirstWallRepository();

    typeOrmFirstWallRepository = new TypeOrmFirstWallRepository();

    await testDatabaseConnectionManager.getConnection();
  });

  afterAll(async () => {
    await testDatabaseConnectionManager.clear();
    await testDatabaseConnectionManager.close();
  });

  beforeEach(async () => {
    await testDatabaseConnectionManager.clear();

    room = await typeOrmRoomRepository.create(mockRoomModel.mock());
  });

  describe('create()', () => {
    it('should be able to create first wall', async () => {
      const createdFirstWall = await typeOrmFirstWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      expect(createdFirstWall).toEqual({
        id: createdFirstWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdFirstWall.created_at,
        updated_at: createdFirstWall.updated_at,
      });
    });
  });

  describe('findByRoomId()', () => {
    it('should be able to find first wall', async () => {
      const createdFirstWall = await typeOrmFirstWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const foundFirstWall = await typeOrmFirstWallRepository.findByRoomId(
        createdFirstWall.room_id,
      );

      expect(foundFirstWall).toEqual({
        id: createdFirstWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdFirstWall.created_at,
        updated_at: createdFirstWall.updated_at,
      });
    });

    it('should be able to return undefined if first wall does not exists', async () => {
      await typeOrmFirstWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const foundFirstWall = await typeOrmFirstWallRepository.findByRoomId(
        'non_existing_room_id',
      );

      expect(foundFirstWall).toBeUndefined();
    });
  });

  describe('update()', () => {
    it('should be able to update first wall', async () => {
      const createdFirstWall = await typeOrmFirstWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const updatedFirstWall = await typeOrmFirstWallRepository.update({
        id: createdFirstWall.id,
        data: { height: 2.5 },
      });

      expect(updatedFirstWall).toEqual({
        id: createdFirstWall.id,
        height: 2.5,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        created_at: createdFirstWall.created_at,
        updated_at: expect.any(Date),
      });
    });

    it('should be able to return undefined if first wall does not exists', async () => {
      const createdFirstWall = await typeOrmFirstWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const updatedFirstWall = await typeOrmFirstWallRepository.update({
        id: 'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
        data: { height: 2.5 },
      });

      const foundFirstWall = await typeOrmFirstWallRepository.findByRoomId(
        createdFirstWall.room_id,
      );

      expect(updatedFirstWall).toBeUndefined();
      expect(foundFirstWall).toEqual({
        id: createdFirstWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdFirstWall.created_at,
        updated_at: createdFirstWall.updated_at,
      });
    });
  });

  describe('deleteById()', () => {
    it('should be able to delete first wall', async () => {
      const createdFirstWall = await typeOrmFirstWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const error = await typeOrmFirstWallRepository.deleteById(createdFirstWall.id);
      const foundFirstWall = await typeOrmFirstWallRepository.findByRoomId(
        createdFirstWall.room_id,
      );

      expect(error).toBeFalsy();
      expect(foundFirstWall).toBeUndefined();
    });

    it('should be able to do nothing if first wall does not exists', async () => {
      const createdFirstWall = await typeOrmFirstWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const error = await typeOrmFirstWallRepository.deleteById(
        'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
      );
      const foundFirstWall = await typeOrmFirstWallRepository.findByRoomId(
        createdFirstWall.room_id,
      );

      expect(error).toBeFalsy();
      expect(foundFirstWall).toEqual({
        id: createdFirstWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdFirstWall.created_at,
        updated_at: createdFirstWall.updated_at,
      });
    });
  });
});

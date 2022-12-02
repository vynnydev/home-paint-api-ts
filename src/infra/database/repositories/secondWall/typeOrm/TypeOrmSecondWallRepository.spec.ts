import Room from '@domain/models/Room';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import TestDatabaseConnectionManager from '@infra/database/helpers/typeOrm/TestDatabaseConnectionManager';

import TypeOrmRoomRepository from '@infra/database/repositories/room/typeOrm/TypeOrmRoomRepository';
import TypeOrmSecondWallRepository from '@infra/database/repositories/secondWall/typeOrm/TypeOrmSecondWallRepository';

let testDatabaseConnectionManager: TestDatabaseConnectionManager;

let room: Room;

let typeOrmRoomRepository: TypeOrmRoomRepository;
let typeOrmSecondWallRepository: TypeOrmSecondWallRepository;

describe('TypeOrmSecondWallRepository', () => {
  beforeAll(async () => {
    testDatabaseConnectionManager = new TestDatabaseConnectionManager();

    typeOrmRoomRepository = new TypeOrmRoomRepository();
    typeOrmSecondWallRepository = new TypeOrmSecondWallRepository();

    typeOrmSecondWallRepository = new TypeOrmSecondWallRepository();

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
    it('should be able to create second wall', async () => {
      const createdSecondWall = await typeOrmSecondWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      expect(createdSecondWall).toEqual({
        id: createdSecondWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdSecondWall.created_at,
        updated_at: createdSecondWall.updated_at,
      });
    });
  });

  describe('findByRoomId()', () => {
    it('should be able to find second wall', async () => {
      const createdSecondWall = await typeOrmSecondWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const foundSecondWall = await typeOrmSecondWallRepository.findByRoomId(
        createdSecondWall.room_id,
      );

      expect(foundSecondWall).toEqual({
        id: createdSecondWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdSecondWall.created_at,
        updated_at: createdSecondWall.updated_at,
      });
    });

    it('should be able to return undefined if second wall does not exists', async () => {
      await typeOrmSecondWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const foundSecondWall = await typeOrmSecondWallRepository.findByRoomId('non_existing_room_id');

      expect(foundSecondWall).toBeUndefined();
    });
  });

  describe('update()', () => {
    it('should be able to update second wall', async () => {
      const createdSecondWall = await typeOrmSecondWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const updatedSecondWall = await typeOrmSecondWallRepository.update({
        id: createdSecondWall.id,
        data: { height: 2.5 },
      });

      expect(updatedSecondWall).toEqual({
        id: createdSecondWall.id,
        height: 2.5,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        created_at: createdSecondWall.created_at,
        updated_at: expect.any(Date),
      });
    });

    it('should be able to return undefined if second wall does not exists', async () => {
      const createdSecondWall = await typeOrmSecondWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const updatedSecondWall = await typeOrmSecondWallRepository.update({
        id: 'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
        data: { height: 2.5 },
      });

      const foundSecondWall = await typeOrmSecondWallRepository.findByRoomId(
        createdSecondWall.room_id,
      );

      expect(updatedSecondWall).toBeUndefined();
      expect(foundSecondWall).toEqual({
        id: createdSecondWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdSecondWall.created_at,
        updated_at: createdSecondWall.updated_at,
      });
    });
  });

  describe('deleteById()', () => {
    it('should be able to delete second wall', async () => {
      const createdSecondWall = await typeOrmSecondWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const error = await typeOrmSecondWallRepository.deleteById(createdSecondWall.id);
      const foundSecondWall = await typeOrmSecondWallRepository.findByRoomId(
        createdSecondWall.room_id,
      );

      expect(error).toBeFalsy();
      expect(foundSecondWall).toBeUndefined();
    });

    it('should be able to do nothing if second wall does not exists', async () => {
      const createdSecondWall = await typeOrmSecondWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const error = await typeOrmSecondWallRepository.deleteById(
        'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
      );
      const foundSecondWall = await typeOrmSecondWallRepository.findByRoomId(
        createdSecondWall.room_id,
      );

      expect(error).toBeFalsy();
      expect(foundSecondWall).toEqual({
        id: createdSecondWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdSecondWall.created_at,
        updated_at: createdSecondWall.updated_at,
      });
    });
  });
});

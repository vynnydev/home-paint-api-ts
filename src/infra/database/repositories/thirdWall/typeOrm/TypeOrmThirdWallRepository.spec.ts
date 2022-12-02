import Room from '@domain/models/Room';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import TestDatabaseConnectionManager from '@infra/database/helpers/typeOrm/TestDatabaseConnectionManager';

import TypeOrmRoomRepository from '@infra/database/repositories/room/typeOrm/TypeOrmRoomRepository';
import TypeOrmThirdWallRepository from '@infra/database/repositories/thirdWall/typeOrm/TypeOrmThirdWallRepository';

let testDatabaseConnectionManager: TestDatabaseConnectionManager;

let room: Room;

let typeOrmRoomRepository: TypeOrmRoomRepository;
let typeOrmThirdWallRepository: TypeOrmThirdWallRepository;

describe('TypeOrmThirdWallRepository', () => {
  beforeAll(async () => {
    testDatabaseConnectionManager = new TestDatabaseConnectionManager();

    typeOrmRoomRepository = new TypeOrmRoomRepository();
    typeOrmThirdWallRepository = new TypeOrmThirdWallRepository();

    typeOrmThirdWallRepository = new TypeOrmThirdWallRepository();

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
    it('should be able to create third wall', async () => {
      const createdThirdWall = await typeOrmThirdWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      expect(createdThirdWall).toEqual({
        id: createdThirdWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdThirdWall.created_at,
        updated_at: createdThirdWall.updated_at,
      });
    });
  });

  describe('findByRoomId()', () => {
    it('should be able to find third wall', async () => {
      const createdThirdWall = await typeOrmThirdWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const foundThirdWall = await typeOrmThirdWallRepository.findByRoomId(
        createdThirdWall.room_id,
      );

      expect(foundThirdWall).toEqual({
        id: createdThirdWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdThirdWall.created_at,
        updated_at: createdThirdWall.updated_at,
      });
    });

    it('should be able to return undefined if third wall does not exists', async () => {
      await typeOrmThirdWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const foundThirdWall = await typeOrmThirdWallRepository.findByRoomId('non_existing_room_id');

      expect(foundThirdWall).toBeUndefined();
    });
  });

  describe('update()', () => {
    it('should be able to update third wall', async () => {
      const createdThirdWall = await typeOrmThirdWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const updatedThirdWall = await typeOrmThirdWallRepository.update({
        id: createdThirdWall.id,
        data: { height: 2.5 },
      });

      expect(updatedThirdWall).toEqual({
        id: createdThirdWall.id,
        height: 2.5,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        created_at: createdThirdWall.created_at,
        updated_at: expect.any(Date),
      });
    });

    it('should be able to return undefined if third wall does not exists', async () => {
      const createdThirdWall = await typeOrmThirdWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const updatedThirdWall = await typeOrmThirdWallRepository.update({
        id: 'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
        data: { height: 2.5 },
      });

      const foundThirdWall = await typeOrmThirdWallRepository.findByRoomId(
        createdThirdWall.room_id,
      );

      expect(updatedThirdWall).toBeUndefined();
      expect(foundThirdWall).toEqual({
        id: createdThirdWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdThirdWall.created_at,
        updated_at: createdThirdWall.updated_at,
      });
    });
  });

  describe('deleteById()', () => {
    it('should be able to delete third wall', async () => {
      const createdThirdWall = await typeOrmThirdWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const error = await typeOrmThirdWallRepository.deleteById(createdThirdWall.id);
      const foundThirdWall = await typeOrmThirdWallRepository.findByRoomId(
        createdThirdWall.room_id,
      );

      expect(error).toBeFalsy();
      expect(foundThirdWall).toBeUndefined();
    });

    it('should be able to do nothing if third wall does not exists', async () => {
      const createdThirdWall = await typeOrmThirdWallRepository.create({
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const error = await typeOrmThirdWallRepository.deleteById(
        'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
      );
      const foundThirdWall = await typeOrmThirdWallRepository.findByRoomId(
        createdThirdWall.room_id,
      );

      expect(error).toBeFalsy();
      expect(foundThirdWall).toEqual({
        id: createdThirdWall.id,
        height: 2.3,
        width: 2.3,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdThirdWall.created_at,
        updated_at: createdThirdWall.updated_at,
      });
    });
  });
});

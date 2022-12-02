import Room from '@domain/models/Room';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import TestDatabaseConnectionManager from '@infra/database/helpers/typeOrm/TestDatabaseConnectionManager';

import TypeOrmRoomRepository from '@infra/database/repositories/room/typeOrm/TypeOrmRoomRepository';
import TypeOrmFourthWallRepository from '@infra/database/repositories/fourthWall/typeOrm/TypeOrmFourthWallRepository';

let testDatabaseConnectionManager: TestDatabaseConnectionManager;

let room: Room;

let typeOrmRoomRepository: TypeOrmRoomRepository;
let typeOrmFourthWallRepository: TypeOrmFourthWallRepository;

describe('TypeOrmFourthWallRepository', () => {
  beforeAll(async () => {
    testDatabaseConnectionManager = new TestDatabaseConnectionManager();

    typeOrmRoomRepository = new TypeOrmRoomRepository();
    typeOrmFourthWallRepository = new TypeOrmFourthWallRepository();

    typeOrmFourthWallRepository = new TypeOrmFourthWallRepository();

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
    it('should be able to create fourth wall', async () => {
      const createdFourthWall = await typeOrmFourthWallRepository.create({
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      expect(createdFourthWall).toEqual({
        id: createdFourthWall.id,
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdFourthWall.created_at,
        updated_at: createdFourthWall.updated_at,
      });
    });
  });

  describe('findByRoomId()', () => {
    it('should be able to find fourth wall', async () => {
      const createdFourthWall = await typeOrmFourthWallRepository.create({
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const foundFourthWall = await typeOrmFourthWallRepository.findByRoomId(createdFourthWall.room_id);

      expect(foundFourthWall).toEqual({
        id: createdFourthWall.id,
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdFourthWall.created_at,
        updated_at: createdFourthWall.updated_at,
      });
    });

    it('should be able to return undefined if fourth wall does not exists', async () => {
      await typeOrmFourthWallRepository.create({
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const foundFourthWall = await typeOrmFourthWallRepository.findByRoomId(
        'non_existing_room_id',
      );

      expect(foundFourthWall).toBeUndefined();
    });
  });

  describe('update()', () => {
    it('should be able to update fourth wall', async () => {
      const createdFourthWall = await typeOrmFourthWallRepository.create({
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const updatedFourthWall = await typeOrmFourthWallRepository.update({
        id: createdFourthWall.id,
        data: { height: 2.50, },
      });

      expect(updatedFourthWall).toEqual({
        id: createdFourthWall.id,
        height: 2.50,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        created_at: createdFourthWall.created_at,
        updated_at: expect.any(Date),
      });
    });

    it('should be able to return undefined if fourth wall does not exists', async () => {
      const createdFourthWall = await typeOrmFourthWallRepository.create({
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const updatedFourthWall = await typeOrmFourthWallRepository.update({
        id: 'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
        data: { height: 2.50, },
      });

      const foundFourthWall = await typeOrmFourthWallRepository.findByRoomId(
        createdFourthWall.room_id,
      );

      expect(updatedFourthWall).toBeUndefined();
      expect(foundFourthWall).toEqual({
        id: createdFourthWall.id,
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdFourthWall.created_at,
        updated_at: createdFourthWall.updated_at,
      });
    });
  });

  describe('deleteById()', () => {
    it('should be able to delete fourth wall', async () => {
      const createdFourthWall = await typeOrmFourthWallRepository.create({
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const error = await typeOrmFourthWallRepository.deleteById(createdFourthWall.id);
      const foundFourthWall = await typeOrmFourthWallRepository.findByRoomId(createdFourthWall.room_id);

      expect(error).toBeFalsy();
      expect(foundFourthWall).toBeUndefined();
    });

    it('should be able to do nothing if fourth wall does not exists', async () => {
      const createdFourthWall = await typeOrmFourthWallRepository.create({
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
      });

      const error = await typeOrmFourthWallRepository.deleteById(
        'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
      );
      const foundFourthWall = await typeOrmFourthWallRepository.findByRoomId(createdFourthWall.room_id);

      expect(error).toBeFalsy();
      expect(foundFourthWall).toEqual({
        id: createdFourthWall.id,
        height: 2.30,
        width: 2.30,
        door_quantity: 1,
        window_quantity: 1,
        room_id: room.id,
        created_at: createdFourthWall.created_at,
        updated_at: createdFourthWall.updated_at,
      });
    });
  });
});

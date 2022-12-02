import TestDatabaseConnectionManager from '@infra/database/helpers/typeOrm/TestDatabaseConnectionManager';

import TypeOrmRoomRepository from '@infra/database/repositories/room/typeOrm/TypeOrmRoomRepository';

let testDatabaseConnectionManager: TestDatabaseConnectionManager;

let typeOrmRoomRepository: TypeOrmRoomRepository;

describe('TypeOrmRoomRepository', () => {
  beforeAll(async () => {
    testDatabaseConnectionManager = new TestDatabaseConnectionManager();

    typeOrmRoomRepository = new TypeOrmRoomRepository();

    await testDatabaseConnectionManager.getConnection();
  });

  afterAll(async () => {
    await testDatabaseConnectionManager.clear();
    await testDatabaseConnectionManager.close();
  });

  beforeEach(async () => {
    await testDatabaseConnectionManager.clear();
  });

  describe('create()', () => {
    it('should be able to create room', async () => {
      const createdRoom = await typeOrmRoomRepository.create({
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      });

      expect(createdRoom).toEqual({
        id: createdRoom.id,
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
        created_at: createdRoom.created_at,
        updated_at: createdRoom.updated_at,
      });
    });
  });

  describe('findRooms()', () => {
    it('should be able to find rooms', async () => {
      const createdRoom = await typeOrmRoomRepository.create({
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      });

      const foundRooms = await typeOrmRoomRepository.findRooms();

      expect(foundRooms).toEqual([
        {
          id: createdRoom.id,
          alias_id: 'any_alias_id',
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
          created_at: createdRoom.created_at,
          updated_at: createdRoom.updated_at,
        },
      ]);
    });

    it('should be able to return empty array if rooms does not exists', async () => {
      const foundRooms = await typeOrmRoomRepository.findRooms();

      expect(foundRooms).toEqual([]);
    });
  });

  describe('findByAliasId()', () => {
    it('should be able to find room', async () => {
      const createdRoom = await typeOrmRoomRepository.create({
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      });

      const foundRoom = await typeOrmRoomRepository.findByAliasId('any_alias_id');

      expect(foundRoom).toEqual({
        id: createdRoom.id,
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
        created_at: createdRoom.created_at,
        updated_at: createdRoom.updated_at,
      });
    });

    it('should be able to return undefined if room does not exists', async () => {
      await typeOrmRoomRepository.create({
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      });

      const foundRoom = await typeOrmRoomRepository.findByAliasId('non_existing_alias_id');

      expect(foundRoom).toBeUndefined();
    });
  });

  describe('update()', () => {
    it('should be able to update room', async () => {
      const createdRoom = await typeOrmRoomRepository.create({
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      });

      const updatedRoom = await typeOrmRoomRepository.update({
        id: createdRoom.id,
        data: { room_name: 'updated_room_name' },
      });

      expect(updatedRoom).toEqual({
        id: createdRoom.id,
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
        created_at: createdRoom.created_at,
        updated_at: expect.any(Date),
      });
    });

    it('should be able to return undefined if room does not exists', async () => {
      const createdRoom = await typeOrmRoomRepository.create({
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      });

      const updatedRoom = await typeOrmRoomRepository.update({
        id: 'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
        data: { room_name: 'updated_room_name' },
      });

      const foundRoom = await typeOrmRoomRepository.findByAliasId(createdRoom.alias_id);

      expect(updatedRoom).toBeUndefined();
      expect(foundRoom).toEqual({
        id: createdRoom.id,
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
        created_at: createdRoom.created_at,
        updated_at: createdRoom.updated_at,
      });
    });
  });

  describe('deleteById()', () => {
    it('should be able to delete room', async () => {
      const createdRoom = await typeOrmRoomRepository.create({
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      });

      const error = await typeOrmRoomRepository.deleteById(createdRoom.id);
      const foundRoom = await typeOrmRoomRepository.findByAliasId(createdRoom.alias_id);

      expect(error).toBeFalsy();
      expect(foundRoom).toBeUndefined();
    });

    it('should be able to do nothing if room does not exists', async () => {
      const createdRoom = await typeOrmRoomRepository.create({
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      });

      const error = await typeOrmRoomRepository.deleteById(
        'f0abb9a7-0fb7-43f2-b228-6463cdac2aad',
      );
      const foundRoom = await typeOrmRoomRepository.findByAliasId(createdRoom.alias_id);

      expect(error).toBeFalsy();
      expect(foundRoom).toEqual({
        id: createdRoom.id,
        alias_id: 'any_alias_id',
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
        created_at: createdRoom.created_at,
        updated_at: createdRoom.updated_at,
      });
    });
  });
});

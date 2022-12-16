import CreateRoomController from '@presentation/controllers/room/CreateRoomController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeNameValidation from '@utils/validation/validators/common/fakes/FakeNameValidation';

import FakeCreateRoom from '@data/useCases/room/fakes/FakeCreateRoom';
import FakeCreateRoomPresenter from '@presentation/presenters/room/fakes/FakeCreateRoomPresenter';

let createRoomController: CreateRoomController;

let validationComposite: ValidationComposite;

let fakeNameValidation: FakeNameValidation;

let fakeCreateRoom: FakeCreateRoom;
let fakeCreateRoomPresenter: FakeCreateRoomPresenter;

describe('CreateRoomController', () => {
  beforeEach(() => {
    fakeNameValidation = new FakeNameValidation();

    fakeCreateRoom = new FakeCreateRoom();
    fakeCreateRoomPresenter = new FakeCreateRoomPresenter();

    validationComposite = new ValidationComposite([fakeNameValidation]);

    createRoomController = new CreateRoomController(
      fakeCreateRoom,
      validationComposite,
      fakeCreateRoomPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await createRoomController.handle({
      body: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
    });

    expect(validateSpy).toHaveBeenCalledWith({
      room_name: 'any_room_name',
      owner_name: 'any_owner_name',
    });
  });

  it('should be able to throw if validate throws', async () => {
    jest.spyOn(validationComposite, 'validate').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createRoomController.handle({
        body: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call create room with correct values', async () => {
    const createSpy = jest.spyOn(fakeCreateRoom, 'create');

    await createRoomController.handle({
      body: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
    });

    expect(createSpy).toHaveBeenCalledWith({
      room_name: 'any_room_name',
      owner_name: 'any_owner_name',
    });
  });

  it('should be able to throw if create room throws', async () => {
    jest.spyOn(fakeCreateRoom, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createRoomController.handle({
        body: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeCreateRoomPresenter, 'reply');

    await createRoomController.handle({
      body: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
    });

    expect(replySpy).toHaveBeenCalledWith({
      data: {
        room: {
          id: expect.any(String),
          alias_id: expect.any(String),
          room_name: expect.any(String),
          owner_name: expect.any(String),
          created_at: expect.any(Date),
          updated_at: expect.any(Date),
        },
      },
    });
  });

  it('should be able to throw if reply throws', async () => {
    jest.spyOn(fakeCreateRoomPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createRoomController.handle({
        body: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});

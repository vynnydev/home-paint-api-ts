import UpdateRoomController from '@presentation/controllers/room/UpdateRoomController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeNameValidation from '@utils/validation/validators/common/fakes/FakeNameValidation';

import FakeUpdateRoom from '@data/useCases/room/fakes/FakeUpdateRoom';
import FakeUpdateRoomPresenter from '@presentation/presenters/room/fakes/FakeUpdateRoomPresenter';

let updateRoomController: UpdateRoomController;

let validationComposite: ValidationComposite;

let fakeNameValidation: FakeNameValidation;

let fakeUpdateRoom: FakeUpdateRoom;
let fakeUpdateRoomPresenter: FakeUpdateRoomPresenter;

describe('UpdateRoomController', () => {
  beforeEach(() => {
    fakeNameValidation = new FakeNameValidation();

    fakeUpdateRoom = new FakeUpdateRoom();
    fakeUpdateRoomPresenter = new FakeUpdateRoomPresenter();
    validationComposite = new ValidationComposite([fakeNameValidation]);

    updateRoomController = new UpdateRoomController(
      fakeUpdateRoom,
      validationComposite,
      fakeUpdateRoomPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await updateRoomController.handle({
      body: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
      params: { room_alias_id: 'any_alias_id' },
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
      updateRoomController.handle({
        body: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
        params: { room_alias_id: 'any_alias_id' },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call update with correct values', async () => {
    const updateSpy = jest.spyOn(fakeUpdateRoom, 'update');

    await updateRoomController.handle({
      body: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
      params: { room_alias_id: 'any_alias_id' },
    });

    expect(updateSpy).toHaveBeenCalledWith({
      room_alias_id: 'any_alias_id',
      data: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
    });
  });

  it('should be able to throw if update throws', async () => {
    jest.spyOn(fakeUpdateRoom, 'update').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateRoomController.handle({
        body: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
        params: {
          room_alias_id: 'any_alias_id',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeUpdateRoomPresenter, 'reply');

    await updateRoomController.handle({
      body: {
        room_name: 'any_room_name',
        owner_name: 'any_owner_name',
      },
      params: {
        room_alias_id: 'any_alias_id',
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
    jest.spyOn(fakeUpdateRoomPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateRoomController.handle({
        body: {
          room_name: 'any_room_name',
          owner_name: 'any_owner_name',
        },
        params: {
          room_alias_id: 'any_alias_id',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});

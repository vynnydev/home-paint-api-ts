import UpdateFirstWallController from '@presentation/controllers/firstWall/UpdateFirstWallController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeHeightValidation from '@utils/validation/validators/common/fakes/FakeHeightValidation';
import FakeWidthValidation from '@utils/validation/validators/common/fakes/FakeWidthValidation';
import FakeDoorQuantityValidation from '@utils/validation/validators/common/fakes/FakeDoorQuantityValidation';
import FakeWindowQuantityValidation from '@utils/validation/validators/common/fakes/FakeWindowQuantityValidation';

import FakeUpdateFirstWall from '@data/useCases/firstWall/fakes/FakeUpdateFirstWall';
import FakeUpdateFirstWallPresenter from '@presentation/presenters/firstWall/fakes/FakeUpdateFirstWallPresenter';

let updateFirstWallController: UpdateFirstWallController;

let validationComposite: ValidationComposite;

let fakeHeightValidation: FakeHeightValidation;
let fakeWidthValidation: FakeWidthValidation;
let fakeDoorQuantityValidation: FakeDoorQuantityValidation;
let fakeWindowQuantityValidation: FakeWindowQuantityValidation;

let fakeUpdateFirstWall: FakeUpdateFirstWall;
let fakeUpdateFirstWallPresenter: FakeUpdateFirstWallPresenter;

describe('UpdateFirstWallController', () => {
  beforeEach(() => {
    fakeHeightValidation = new FakeHeightValidation();
    fakeWidthValidation = new FakeWidthValidation();
    fakeDoorQuantityValidation = new FakeDoorQuantityValidation();
    fakeWindowQuantityValidation = new FakeWindowQuantityValidation();

    fakeUpdateFirstWall = new FakeUpdateFirstWall();
    fakeUpdateFirstWallPresenter = new FakeUpdateFirstWallPresenter();

    validationComposite = new ValidationComposite([
      fakeHeightValidation,
      fakeWidthValidation,
      fakeDoorQuantityValidation,
      fakeWindowQuantityValidation,
    ]);

    updateFirstWallController = new UpdateFirstWallController(
      fakeUpdateFirstWall,
      validationComposite,
      fakeUpdateFirstWallPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await updateFirstWallController.handle({
      body: {
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
      },
      params: { room_id: 'any_room_id' },
    });

    expect(validateSpy).toHaveBeenCalledWith({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
    });
  });

  it('should be able to throw if validate throws', async () => {
    jest.spyOn(validationComposite, 'validate').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateFirstWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
        },
        params: { room_id: 'any_room_id' },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call update with correct values', async () => {
    const updateSpy = jest.spyOn(fakeUpdateFirstWall, 'update');

    await updateFirstWallController.handle({
      body: {
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
      },
      params: { room_id: 'any_room_id' },
    });

    expect(updateSpy).toHaveBeenCalledWith({
      room_id: 'any_room_id',
      data: {
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
      },
    });
  });

  it('should be able to throw if update throws', async () => {
    jest.spyOn(fakeUpdateFirstWall, 'update').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateFirstWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
        },
        params: { room_id: 'any_room_id' },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeUpdateFirstWallPresenter, 'reply');

    await updateFirstWallController.handle({
      body: {
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
      },
      params: { room_id: 'any_room_id' },
    });

    expect(replySpy).toHaveBeenCalledWith({
      data: {
        firstWall: {
          id: expect.any(String),
          height: expect.any(Number),
          width: expect.any(Number),
          door_quantity: expect.any(Number),
          window_quantity: expect.any(Number),
          room_id: expect.any(String),
          created_at: expect.any(Date),
          updated_at: expect.any(Date),
        },
      },
    });
  });

  it('should be able to throw if reply throws', async () => {
    jest.spyOn(fakeUpdateFirstWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateFirstWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
        },
        params: { room_id: 'any_room_id' },
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});

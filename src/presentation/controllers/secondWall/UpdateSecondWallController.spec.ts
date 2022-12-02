import UpdateSecondWallController from '@presentation/controllers/secondWall/UpdateSecondWallController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeHeightValidation from '@utils/validation/validators/common/fakes/FakeHeightValidation';
import FakeWidthValidation from '@utils/validation/validators/common/fakes/FakeWidthValidation';
import FakeDoorQuantityValidation from '@utils/validation/validators/common/fakes/FakeDoorQuantityValidation';
import FakeWindowQuantityValidation from '@utils/validation/validators/common/fakes/FakeWindowQuantityValidation';

import FakeUpdateSecondWall from '@data/useCases/secondWall/fakes/FakeUpdateSecondWall';
import FakeUpdateSecondWallPresenter from '@presentation/presenters/secondWall/fakes/FakeUpdateSecondWallPresenter';

let updateSecondWallController: UpdateSecondWallController;

let validationComposite: ValidationComposite;

let fakeHeightValidation: FakeHeightValidation;
let fakeWidthValidation: FakeWidthValidation;
let fakeDoorQuantityValidation: FakeDoorQuantityValidation;
let fakeWindowQuantityValidation: FakeWindowQuantityValidation;

let fakeUpdateSecondWall: FakeUpdateSecondWall;
let fakeUpdateSecondWallPresenter: FakeUpdateSecondWallPresenter;

describe('UpdateSecondWallController', () => {
  beforeEach(() => {
    fakeHeightValidation = new FakeHeightValidation();
    fakeWidthValidation = new FakeWidthValidation();
    fakeDoorQuantityValidation = new FakeDoorQuantityValidation();
    fakeWindowQuantityValidation = new FakeWindowQuantityValidation();

    fakeUpdateSecondWall = new FakeUpdateSecondWall();
    fakeUpdateSecondWallPresenter = new FakeUpdateSecondWallPresenter();

    validationComposite = new ValidationComposite([
      fakeHeightValidation,
      fakeWidthValidation,
      fakeDoorQuantityValidation,
      fakeWindowQuantityValidation,
    ]);

    updateSecondWallController = new UpdateSecondWallController(
      fakeUpdateSecondWall,
      validationComposite,
      fakeUpdateSecondWallPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await updateSecondWallController.handle({
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
      updateSecondWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
          room_id: 'any_room_id',
        },
        params: { room_id: 'any_room_id' },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call update with correct values', async () => {
    const updateSpy = jest.spyOn(fakeUpdateSecondWall, 'update');

    await updateSecondWallController.handle({
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
    jest.spyOn(fakeUpdateSecondWall, 'update').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateSecondWallController.handle({
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
    const replySpy = jest.spyOn(fakeUpdateSecondWallPresenter, 'reply');

    await updateSecondWallController.handle({
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
        secondWall: {
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
    jest.spyOn(fakeUpdateSecondWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateSecondWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
          room_id: 'any_room_id',
        },
        params: { room_id: 'any_room_id' },
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});

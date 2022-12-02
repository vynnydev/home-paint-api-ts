import UpdateFourthWallController from '@presentation/controllers/fourthWall/UpdateFourthWallController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeHeightValidation from '@utils/validation/validators/common/fakes/FakeHeightValidation';
import FakeWidthValidation from '@utils/validation/validators/common/fakes/FakeWidthValidation';
import FakeDoorQuantityValidation from '@utils/validation/validators/common/fakes/FakeDoorQuantityValidation';
import FakeWindowQuantityValidation from '@utils/validation/validators/common/fakes/FakeWindowQuantityValidation';

import FakeUpdateFourthWall from '@data/useCases/fourthWall/fakes/FakeUpdateFourthWall';
import FakeUpdateFourthWallPresenter from '@presentation/presenters/fourthWall/fakes/FakeUpdateFourthWallPresenter';

let updateFourthWallController: UpdateFourthWallController;

let validationComposite: ValidationComposite;

let fakeHeightValidation: FakeHeightValidation;
let fakeWidthValidation: FakeWidthValidation;
let fakeDoorQuantityValidation: FakeDoorQuantityValidation;
let fakeWindowQuantityValidation: FakeWindowQuantityValidation;

let fakeUpdateFourthWall: FakeUpdateFourthWall;
let fakeUpdateFourthWallPresenter: FakeUpdateFourthWallPresenter;

describe('UpdateFourthWallController', () => {
  beforeEach(() => {
    fakeHeightValidation = new FakeHeightValidation();
    fakeWidthValidation = new FakeWidthValidation();
    fakeDoorQuantityValidation = new FakeDoorQuantityValidation();
    fakeWindowQuantityValidation = new FakeWindowQuantityValidation();

    fakeUpdateFourthWall = new FakeUpdateFourthWall();
    fakeUpdateFourthWallPresenter = new FakeUpdateFourthWallPresenter();
    validationComposite = new ValidationComposite([
      fakeHeightValidation,
      fakeWidthValidation,
      fakeDoorQuantityValidation,
      fakeWindowQuantityValidation,
    ]);

    updateFourthWallController = new UpdateFourthWallController(
      fakeUpdateFourthWall,
      validationComposite,
      fakeUpdateFourthWallPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await updateFourthWallController.handle({
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
      updateFourthWallController.handle({
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
    const updateSpy = jest.spyOn(fakeUpdateFourthWall, 'update');

    await updateFourthWallController.handle({
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
    jest.spyOn(fakeUpdateFourthWall, 'update').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateFourthWallController.handle({
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
    const replySpy = jest.spyOn(fakeUpdateFourthWallPresenter, 'reply');

    await updateFourthWallController.handle({
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
        fourthWall: {
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
    jest.spyOn(fakeUpdateFourthWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      updateFourthWallController.handle({
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

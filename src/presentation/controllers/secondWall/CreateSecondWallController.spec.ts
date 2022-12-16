import CreateSecondWallController from '@presentation/controllers/secondWall/CreateSecondWallController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeHeightValidation from '@utils/validation/validators/common/fakes/FakeHeightValidation';
import FakeWidthValidation from '@utils/validation/validators/common/fakes/FakeWidthValidation';
import FakeDoorQuantityValidation from '@utils/validation/validators/common/fakes/FakeDoorQuantityValidation';
import FakeWindowQuantityValidation from '@utils/validation/validators/common/fakes/FakeWindowQuantityValidation';

import FakeCreateSecondWall from '@data/useCases/secondWall/fakes/FakeCreateSecondWall';
import FakeCreateSecondWallPresenter from '@presentation/presenters/secondWall/fakes/FakeCreateSecondWallPresenter';

let createSecondWallController: CreateSecondWallController;

let validationComposite: ValidationComposite;

let fakeHeightValidation: FakeHeightValidation;
let fakeWidthValidation: FakeWidthValidation;
let fakeDoorQuantityValidation: FakeDoorQuantityValidation;
let fakeWindowQuantityValidation: FakeWindowQuantityValidation;

let fakeCreateSecondWall: FakeCreateSecondWall;
let fakeCreateSecondWallPresenter: FakeCreateSecondWallPresenter;

describe('CreateSecondWallController', () => {
  beforeEach(() => {
    fakeHeightValidation = new FakeHeightValidation();
    fakeWidthValidation = new FakeWidthValidation();
    fakeDoorQuantityValidation = new FakeDoorQuantityValidation();
    fakeWindowQuantityValidation = new FakeWindowQuantityValidation();

    fakeCreateSecondWall = new FakeCreateSecondWall();
    fakeCreateSecondWallPresenter = new FakeCreateSecondWallPresenter();

    validationComposite = new ValidationComposite([
      fakeHeightValidation,
      fakeWidthValidation,
      fakeDoorQuantityValidation,
      fakeWindowQuantityValidation,
    ]);

    createSecondWallController = new CreateSecondWallController(
      fakeCreateSecondWall,
      validationComposite,
      fakeCreateSecondWallPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await createSecondWallController.handle({
      body: {
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
      },
      params: {
        room_alias_id: 'any_alias_id',
      },
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
      createSecondWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call create second wall with correct values', async () => {
    const createSpy = jest.spyOn(fakeCreateSecondWall, 'create');

    await createSecondWallController.handle({
      body: {
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
      },
      params: {
        room_alias_id: 'any_alias_id',
      },
    });

    expect(createSpy).toHaveBeenCalledWith({
      height: 3,
      width: 10,
      door_quantity: 1,
      window_quantity: 1,
      room_alias_id: 'any_alias_id',
    });
  });

  it('should be able to throw if create second wall throws', async () => {
    jest.spyOn(fakeCreateSecondWall, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createSecondWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
        },
        params: {
          room_alias_id: 'any_alias_id',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeCreateSecondWallPresenter, 'reply');

    await createSecondWallController.handle({
      body: {
        height: 3,
        width: 10,
        door_quantity: 1,
        window_quantity: 1,
      },
      params: {
        room_alias_id: 'any_alias_id',
      },
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
    jest.spyOn(fakeCreateSecondWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createSecondWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
        },
        params: {
          room_alias_id: 'any_alias_id',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});

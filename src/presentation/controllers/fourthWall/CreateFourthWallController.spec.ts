import CreateFourthWallController from '@presentation/controllers/fourthWall/CreateFourthWallController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeHeightValidation from '@utils/validation/validators/common/fakes/FakeHeightValidation';
import FakeWidthValidation from '@utils/validation/validators/common/fakes/FakeWidthValidation';
import FakeDoorQuantityValidation from '@utils/validation/validators/common/fakes/FakeDoorQuantityValidation';
import FakeWindowQuantityValidation from '@utils/validation/validators/common/fakes/FakeWindowQuantityValidation';

import FakeCreateFourthWall from '@data/useCases/fourthWall/fakes/FakeCreateFourthWall';
import FakeCreateFourthWallPresenter from '@presentation/presenters/fourthWall/fakes/FakeCreateFourthWallPresenter';

let createFourthWallController: CreateFourthWallController;

let validationComposite: ValidationComposite;

let fakeHeightValidation: FakeHeightValidation;
let fakeWidthValidation: FakeWidthValidation;
let fakeDoorQuantityValidation: FakeDoorQuantityValidation;
let fakeWindowQuantityValidation: FakeWindowQuantityValidation;

let fakeCreateFourthWall: FakeCreateFourthWall;
let fakeCreateFourthWallPresenter: FakeCreateFourthWallPresenter;

describe('CreateFourthWallController', () => {
  beforeEach(() => {
    fakeHeightValidation = new FakeHeightValidation();
    fakeWidthValidation = new FakeWidthValidation();
    fakeDoorQuantityValidation = new FakeDoorQuantityValidation();
    fakeWindowQuantityValidation = new FakeWindowQuantityValidation();

    fakeCreateFourthWall = new FakeCreateFourthWall();
    fakeCreateFourthWallPresenter = new FakeCreateFourthWallPresenter();

    validationComposite = new ValidationComposite([
      fakeHeightValidation,
      fakeWidthValidation,
      fakeDoorQuantityValidation,
      fakeWindowQuantityValidation,
    ]);

    createFourthWallController = new CreateFourthWallController(
      fakeCreateFourthWall,
      validationComposite,
      fakeCreateFourthWallPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await createFourthWallController.handle({
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
      createFourthWallController.handle({
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

  it('should be able to call create fourth wall with correct values', async () => {
    const createSpy = jest.spyOn(fakeCreateFourthWall, 'create');

    await createFourthWallController.handle({
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

  it('should be able to throw if create fourth wall throws', async () => {
    jest.spyOn(fakeCreateFourthWall, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createFourthWallController.handle({
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
    const replySpy = jest.spyOn(fakeCreateFourthWallPresenter, 'reply');

    await createFourthWallController.handle({
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
    jest.spyOn(fakeCreateFourthWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createFourthWallController.handle({
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

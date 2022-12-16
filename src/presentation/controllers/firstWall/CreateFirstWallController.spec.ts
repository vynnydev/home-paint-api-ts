import CreateFirstWallController from '@presentation/controllers/firstWall/CreateFirstWallController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeHeightValidation from '@utils/validation/validators/common/fakes/FakeHeightValidation';
import FakeWidthValidation from '@utils/validation/validators/common/fakes/FakeWidthValidation';
import FakeDoorQuantityValidation from '@utils/validation/validators/common/fakes/FakeDoorQuantityValidation';
import FakeWindowQuantityValidation from '@utils/validation/validators/common/fakes/FakeWindowQuantityValidation';

import FakeCreateFirstWall from '@data/useCases/firstWall/fakes/FakeCreateFirstWall';
import FakeCreateFirstWallPresenter from '@presentation/presenters/firstWall/fakes/FakeCreateFirstWallPresenter';
import { string } from 'joi';

let createFirstWallController: CreateFirstWallController;

let validationComposite: ValidationComposite;

let fakeHeightValidation: FakeHeightValidation;
let fakeWidthValidation: FakeWidthValidation;
let fakeDoorQuantityValidation: FakeDoorQuantityValidation;
let fakeWindowQuantityValidation: FakeWindowQuantityValidation;

let fakeCreateFirstWall: FakeCreateFirstWall;
let fakeCreateFirstWallPresenter: FakeCreateFirstWallPresenter;

describe('CreateFirstWallController', () => {
  beforeEach(() => {
    fakeHeightValidation = new FakeHeightValidation();
    fakeWidthValidation = new FakeWidthValidation();
    fakeDoorQuantityValidation = new FakeDoorQuantityValidation();
    fakeWindowQuantityValidation = new FakeWindowQuantityValidation();

    fakeCreateFirstWall = new FakeCreateFirstWall();
    fakeCreateFirstWallPresenter = new FakeCreateFirstWallPresenter();

    validationComposite = new ValidationComposite([
      fakeHeightValidation,
      fakeWidthValidation,
      fakeDoorQuantityValidation,
      fakeWindowQuantityValidation,
    ]);

    createFirstWallController = new CreateFirstWallController(
      fakeCreateFirstWall,
      validationComposite,
      fakeCreateFirstWallPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await createFirstWallController.handle({
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
      createFirstWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call create first wall with correct values', async () => {
    const createSpy = jest.spyOn(fakeCreateFirstWall, 'create');

    await createFirstWallController.handle({
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

  it('should be able to throw if create first wall throws', async () => {
    jest.spyOn(fakeCreateFirstWall, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createFirstWallController.handle({
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
    const replySpy = jest.spyOn(fakeCreateFirstWallPresenter, 'reply');

    await createFirstWallController.handle({
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
    jest.spyOn(fakeCreateFirstWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createFirstWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});

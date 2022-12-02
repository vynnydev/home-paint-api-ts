import CreateThirdWallController from '@presentation/controllers/thirdWall/CreateThirdWallController';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import FakeHeightValidation from '@utils/validation/validators/common/fakes/FakeHeightValidation';
import FakeWidthValidation from '@utils/validation/validators/common/fakes/FakeWidthValidation';
import FakeDoorQuantityValidation from '@utils/validation/validators/common/fakes/FakeDoorQuantityValidation';
import FakeWindowQuantityValidation from '@utils/validation/validators/common/fakes/FakeWindowQuantityValidation';

import FakeCreateThirdWall from '@data/useCases/thirdWall/fakes/FakeCreateThirdWall';
import FakeCreateThirdWallPresenter from '@presentation/presenters/thirdWall/fakes/FakeCreateThirdWallPresenter';

let createThirdWallController: CreateThirdWallController;

let validationComposite: ValidationComposite;

let fakeHeightValidation: FakeHeightValidation;
let fakeWidthValidation: FakeWidthValidation;
let fakeDoorQuantityValidation: FakeDoorQuantityValidation;
let fakeWindowQuantityValidation: FakeWindowQuantityValidation;

let fakeCreateThirdWall: FakeCreateThirdWall;
let fakeCreateThirdWallPresenter: FakeCreateThirdWallPresenter;

describe('CreateThirdWallController', () => {
  beforeEach(() => {
    fakeHeightValidation = new FakeHeightValidation();
    fakeWidthValidation = new FakeWidthValidation();
    fakeDoorQuantityValidation = new FakeDoorQuantityValidation();
    fakeWindowQuantityValidation = new FakeWindowQuantityValidation();

    fakeCreateThirdWall = new FakeCreateThirdWall();
    fakeCreateThirdWallPresenter = new FakeCreateThirdWallPresenter();

    validationComposite = new ValidationComposite([
      fakeHeightValidation,
      fakeWidthValidation,
      fakeDoorQuantityValidation,
      fakeWindowQuantityValidation,
    ]);

    createThirdWallController = new CreateThirdWallController(
      fakeCreateThirdWall,
      validationComposite,
      fakeCreateThirdWallPresenter,
    );
  });

  it('should be able to call validate with correct values', async () => {
    const validateSpy = jest.spyOn(validationComposite, 'validate');

    await createThirdWallController.handle({
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
      createThirdWallController.handle({
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

  it('should be able to call create third wall with correct values', async () => {
    const createSpy = jest.spyOn(fakeCreateThirdWall, 'create');

    await createThirdWallController.handle({
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

  it('should be able to throw if create third wall throws', async () => {
    jest.spyOn(fakeCreateThirdWall, 'create').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createThirdWallController.handle({
        body: {
          height: 3,
          width: 10,
          door_quantity: 1,
          window_quantity: 1,
          room_alias_id: 'any_alias_id',
        },
        params: {
          room_alias_id: 'any_alias_id',
        },
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to call reply with correct values', async () => {
    const replySpy = jest.spyOn(fakeCreateThirdWallPresenter, 'reply');

    await createThirdWallController.handle({
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
        thirdWall: {
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
    jest.spyOn(fakeCreateThirdWallPresenter, 'reply').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      createThirdWallController.handle({
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

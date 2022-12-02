import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import heightValidationFactory from '@main/factories/validators/common/HeightValidationFactory';
import widthValidationFactory from '@main/factories/validators/common/WidthValidationFactory';
import doorQuantityValidationFactory from '@main/factories/validators/common/DoorQuantityValidationFactory';
import windowQuantityValidationFactory from '@main/factories/validators/common/WindowQuantityValidationFactory';

const makeUpdateFourthWallValidation = (): ValidationComposite => {
  const heightValidation = heightValidationFactory.makeHeightValidation();
  const widthValidation = widthValidationFactory.makeWidthValidation();
  const doorQuantityValidation = doorQuantityValidationFactory.makeDoorQuantityValidation();
  const windowQuantityValidation = windowQuantityValidationFactory.makeWindowQuantityValidation();

  const validations = [
    heightValidation,
    widthValidation,
    doorQuantityValidation,
    windowQuantityValidation,
  ];

  const validationComposite = new ValidationComposite(validations);

  return validationComposite;
};

export default { makeUpdateFourthWallValidation };

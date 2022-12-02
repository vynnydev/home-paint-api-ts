import ValidationComposite from '@utils/validation/validators/ValidationComposite';

import nameValidationFactory from '@main/factories/validators/common/NameValidationFactory';

const makeUpdateRoomValidation = (): ValidationComposite => {
  const nameValidation = nameValidationFactory.makeNameValidation();

  const validations = [nameValidation];

  const validationComposite = new ValidationComposite(validations);

  return validationComposite;
};

export default { makeUpdateRoomValidation };

import Joi from 'joi';

import IHeightValidator from '@utils/validation/protocols/common/IHeightValidator';

export default class HeightValidatorAdapter implements IHeightValidator {
  public isValid(height: any): boolean {
    const schema = Joi.object().keys({
      height: Joi.number().min(2.2).max(3.0).positive().required(),
    });

    const { error } = schema.validate({ height });

    if (error) return false;

    return true;
  }
}

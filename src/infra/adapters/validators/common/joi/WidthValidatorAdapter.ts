import Joi from 'joi';

import IWidthValidator from '@utils/validation/protocols/common/IWidthValidator';

export default class WidthValidatorAdapter implements IWidthValidator {
  public isValid(width: any): boolean {
    const schema = Joi.object().keys({
      width: Joi.number().min(5.0).max(15.0).positive().required(),
    });

    const { error } = schema.validate({ width });

    if (error) return false;

    return true;
  }
}

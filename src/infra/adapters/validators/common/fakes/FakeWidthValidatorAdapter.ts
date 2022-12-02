import IWidthValidator from '@utils/validation/protocols/common/IWidthValidator';

export default class FakeWidthValidatorAdapter implements IWidthValidator {
  public isValid(name: any): boolean {
    return true;
  }
}

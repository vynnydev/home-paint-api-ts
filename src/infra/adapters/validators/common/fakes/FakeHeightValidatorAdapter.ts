import IHeightValidator from '@utils/validation/protocols/common/IHeightValidator';

export default class FakeHeightValidatorAdapter implements IHeightValidator {
  public isValid(name: any): boolean {
    return true;
  }
}

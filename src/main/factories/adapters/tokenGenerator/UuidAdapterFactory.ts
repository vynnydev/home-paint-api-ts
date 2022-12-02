import ITokenGenerator from '@data/protocols/utils/tokenGenerator/ITokenGenerator';

import UuidAdapter from '@infra/adapters/tokenGenerator/UuidAdapter';

const makeUuidAdapter = (): ITokenGenerator => {
  const uuidAdapter = new UuidAdapter();

  return uuidAdapter;
};

export default { makeUuidAdapter };

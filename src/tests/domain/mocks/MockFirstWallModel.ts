import { faker } from '@faker-js/faker';

import FirstWall from '@domain/models/FirstWall';

import IMockFirstWallModelDTO from '@tests/domain/mocks/dtos/MockFirstWallModelDTO';

const mock = (data?: IMockFirstWallModelDTO): FirstWall => {
  const firstWallMock = {
    id: faker.datatype.uuid(),
    height: faker.datatype.number(),
    width: faker.datatype.number(),
    door_quantity: faker.datatype.number(),
    window_quantity: faker.datatype.number(),
    room_id: faker.datatype.uuid(),
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
    ...data,
  };

  return firstWallMock;
};

export default { mock };

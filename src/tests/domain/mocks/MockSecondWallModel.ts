import { faker } from '@faker-js/faker';

import SecondWall from '@domain/models/SecondWall';

import IMockSecondWallModelDTO from '@tests/domain/mocks/dtos/MockSecondWallModelDTO';

const mock = (data?: IMockSecondWallModelDTO): SecondWall => {
  const secondWallMock = {
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

  return secondWallMock;
};

export default { mock };

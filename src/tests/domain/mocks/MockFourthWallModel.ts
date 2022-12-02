import { faker } from '@faker-js/faker';

import FourthWall from '@domain/models/FourthWall';

import IMockFourthWallModelDTO from '@tests/domain/mocks/dtos/MockFourthWallModelDTO';

const mock = (data?: IMockFourthWallModelDTO): FourthWall => {
  const fourthWallMock = {
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

  return fourthWallMock;
};

export default { mock };

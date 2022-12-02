import { faker } from '@faker-js/faker';

import ThirdWall from '@domain/models/ThirdWall';

import IMockThirdWallModelDTO from '@tests/domain/mocks/dtos/MockThirdWallModelDTO';

const mock = (data?: IMockThirdWallModelDTO): ThirdWall => {
  const thirdWallMock = {
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

  return thirdWallMock;
};

export default { mock };

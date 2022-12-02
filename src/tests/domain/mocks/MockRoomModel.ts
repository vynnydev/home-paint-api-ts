import { faker } from '@faker-js/faker';

import Room from '@domain/models/Room';

import IMockRoomModelDTO from '@tests/domain/mocks/dtos/MockRoomModelDTO';

const mock = (data?: IMockRoomModelDTO): Room => {
  const roomMock = {
    id: faker.datatype.uuid(),
    alias_id: faker.datatype.uuid(),
    room_name: faker.company.companyName(),
    owner_name: faker.name.firstName(),
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
    ...data,
  };

  return roomMock;
};

export default { mock };

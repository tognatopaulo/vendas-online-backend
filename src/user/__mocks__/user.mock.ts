import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123543543',
  createdAt: new Date(),
  email: 'emailmoc@email.com',
  id: 43242,
  name: 'nameMock',
  password: 'largePassword',
  phone: '19998188555',
  typeUser: UserType.User,
  updated: new Date(),
};

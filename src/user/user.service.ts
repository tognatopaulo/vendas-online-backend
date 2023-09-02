import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDTO.password, saltOrRounds);

    const user = {
      ...createUserDTO,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(user);

    console.log(this.users);

    return {
      ...createUserDTO,
      id: 1,
    };
  }
}

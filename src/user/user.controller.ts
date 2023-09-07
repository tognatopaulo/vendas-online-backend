import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { ReturnUserDTO } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<ReturnUserDTO[]> {
    return (await this.userService.getAllUsers()).map(
      (UserEntity) => new ReturnUserDTO(UserEntity),
    );
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDTO) {
    return this.userService.createUser(createUser);
  }
}

import { UserEntity } from './../../entities/user.entity';
import { UserService } from './user.service';
import {
  Controller,
  Get,
  ClassSerializerInterceptor,
  UseInterceptors,
  Param,
} from '@nestjs/common';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  findOne(@Param() params: any): UserEntity {
    return this.userService.queryUserByUserId(params.userId);
  }
}

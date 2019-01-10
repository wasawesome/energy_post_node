import { UserEntity } from './../../entities/user.entity';
import {
  Injectable,
} from '@nestjs/common';

@Injectable()
export class UserService {
  queryUserByUserId(userId: string): UserEntity {
    return new UserEntity({ userId });
  }
}

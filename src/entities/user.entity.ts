import { Exclude } from 'class-transformer';

export class UserEntity {
  userId: string;
  username: string;

  telephone: string;
  nickName: string;
  address: Array<Object>;

  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  password: string;

  constructor(partital: Partial<UserEntity>) {
    Object.assign(this, partital);
  }
}

import { User } from '../domains/user';

export class UserDto {
  id: string;
  provider: string;
  createdAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.provider = user.provider;
    this.createdAt = user.createdAt;
  }
}

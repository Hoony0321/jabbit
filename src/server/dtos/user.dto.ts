import { User } from '../domains/user';

export class UserDto {
  id: string;
  provider: string;
  email: string;
  createdAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.provider = user.provider;
    this.email = user.email;
    this.createdAt = user.createdAt;
  }
}

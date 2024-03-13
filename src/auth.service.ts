import { Injectable } from '@nestjs/common';
import { userService } from './user.service';
@Injectable()
export class AuthService {
  constructor(private usersService: userService) {}
  /*
    Implementation that makes use of this.usersService
  */
}

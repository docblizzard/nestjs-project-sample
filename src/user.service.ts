import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  getUser(username: string): { username: string } {
    return { username };
  }
}

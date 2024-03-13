import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users: { username: string; password: string }[] = [];

  register(username: string, password: string): void {
    this.users.push({ username, password });
  }

  authenticate(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    return !!user;
  }
  
  getUsers(): {username: string}[] {
    return this.users.map(user => ({ username: user.username }));
  }
}

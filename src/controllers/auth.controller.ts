import { AuthService } from "src/services/auth.service";
import { Response } from "express";
import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
import { Http2ServerResponse } from "http2";
import { TokenService } from "src/services/token.service";

@Controller('/auth')
export class authController {
    constructor(private readonly authService: AuthService,
        private readonly tokenService: TokenService) {}

    @Post('register')
    register(@Body('username') username: string, @Body('password') password: string): string {
      this.authService.register(username, password);
      return 'User registered successfully! ' + username;
    }

    @Post('authenticate')
    authenticate(@Body('username') username: string, @Body('password') password: string): string {
      const isAuthenticated = this.authService.authenticate(username, password);
      if (isAuthenticated) {
        const token = this.tokenService.generateToken({ username });
        return token;
      } else {
        throw new HttpException('Invalid username or password', HttpStatus.UNAUTHORIZED)
      }
    }

    @Get('users')
    GetUsers(): {username: string}[] {
        return this.authService.getUsers()
    }
}
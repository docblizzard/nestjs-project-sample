import { Module } from '@nestjs/common';
import { authController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { TokenService } from 'src/token/token.service';

@Module({
  controllers: [authController],
  providers: [AuthService, TokenService],
})
export class AuthModule {}
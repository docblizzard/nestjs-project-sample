import { Module } from '@nestjs/common';
import { authController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { TokenService } from 'src/services/token.service';

@Module({
  controllers: [authController],
  providers: [AuthService, TokenService],
})
export class AuthModule {}
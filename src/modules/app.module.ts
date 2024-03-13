/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AppService } from '../services/app.service';
import { AppController } from 'src/controllers/app.controller';
import { AuthModule } from './auth.module';
import { LoggerMiddleware, logger } from 'src/middlewares/logger.middleware';
import { authController } from 'src/controllers/auth.controller';
import { RegisterMiddleware } from 'src/middlewares/register.middleware';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  async configure(consumer: MiddlewareConsumer) {
      consumer 
         .apply(LoggerMiddleware)
         .exclude(
          { path: 'auth/register', method: RequestMethod.POST }
         )
         .forRoutes(authController);
        
      consumer
          .apply(RegisterMiddleware)
          .forRoutes('auth/register');
  }
}

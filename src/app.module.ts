/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from 'src/app.controller';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware, logger } from 'src/middlewares/logger.middleware';
import { authController } from 'src/auth/auth.controller';
import { RegisterMiddleware } from 'src/middlewares/register.middleware';
import { TokenMiddleware } from 'src/middlewares/token.middleware';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule.register({folder: './config'})],
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

      consumer
          .apply(TokenMiddleware)
          .forRoutes('auth/users');
  }
}

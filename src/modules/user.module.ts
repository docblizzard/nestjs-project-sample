/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { userController } from '../controllers/user.controller';
import { userService } from '../services/user.service';

@Module({
    imports: [],
    controllers: [userController],
    providers: [userService],
    exports: [userService]
})
export class UserModule {}
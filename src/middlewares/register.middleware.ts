import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RegisterMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body;
        if (!username || username.trim() === '') {
            throw new HttpException('Username is required', HttpStatus.BAD_REQUEST);
        }
        if (!password || password.length < 8 ) {
            throw new HttpException('Password must be 8 characters minimum', HttpStatus.BAD_REQUEST);
        }
        next();
    }
}
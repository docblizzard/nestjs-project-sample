import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
		const new_token = token.split(' ')[1];
    try {
      const decoded = jwt.verify(new_token, 'doofus');
      req['user'] = decoded;
      next();
    } catch (error) {
      throw new HttpException('Invalid authorization token', HttpStatus.UNAUTHORIZED);
    }
  }
}
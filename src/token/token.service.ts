import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenService {
    private readonly secretKey = 'doofus'

    generateToken(payload: any): string {
        const token = jwt.sign(payload, this.secretKey, {expiresIn: '2h'})
        return token
    }
}
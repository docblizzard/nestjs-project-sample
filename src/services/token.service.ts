import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenService {
    private readonly secretKey = 'doofus'

    generateToken(payload: any): string {
        return jwt.sign(payload, this.secretKey, {expiresIn: '2h'})
    }

    verifyToken(token: string): any {
        try {
            return jwt.verify(token, this.secretKey);
        } 
        catch {
            return null;
        }
    }
}
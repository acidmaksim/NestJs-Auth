import { UserJwtData } from '@src/interfaces/user-jwt-data';
import { UserService } from '@src/models/user/user.service';
import { ExpressRequest } from '@src/interfaces/express-request';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Response } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '@src/constants';

@Injectable()
export class AuthhMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    const token = req.cookies['auth-cookie'];

    if (!token) {
      req.user = null;
      return next();
    }

    try {
      const decode = verify(token, JWT_SECRET) as UserJwtData;

      if (decode.accessType === 'user') {
        const user = await this.userService.findOne(decode.id);

        if (!user.access) throw false;

        req.user = { ...decode, roles: ['all'], data: user };
      }

      next();
    } catch (error) {
      req.user = null;
      next();
    }
  }
}

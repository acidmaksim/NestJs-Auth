import { PartnerService } from './../partner.service';
import { UserJwtData } from '@src/interfaces/user-jwt-data';
import { ExpressRequest } from '@src/interfaces/express-request';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { Response } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '@src/constants';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly partnerService: PartnerService) {}

  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers['Authorization'] as string;

    const token = authHeader.split(' ')[1];

    if (!token) {
      req.user = null;
      return next();
    }

    try {
      const decode = verify(token, JWT_SECRET) as UserJwtData;

      if (decode.type === 'super') {
        req.user = { id: 'super', type: 'super' };
      } else {
        const partner = await this.partnerService.findOne(decode.id);

        if (!partner) throw false;

        req.user = { ...decode };
      }

      next();
    } catch (error) {
      req.user = null;
      next();
    }
  }
}

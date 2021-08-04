import { ExpressRequest } from '@src/interfaces/express-request';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const requset = ctx.switchToHttp().getRequest<ExpressRequest>();

    if (requset.user) {
      return true;
    }

    throw new HttpException('Not authhorized', HttpStatus.UNAUTHORIZED);
  }
}

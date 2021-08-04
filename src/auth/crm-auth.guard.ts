import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { AccessType, CurrentUserProps } from './types';

@Injectable()
export class CrmAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const request = context.switchToHttp().getRequest();

    const access = this.reflector.get<AccessType>(
      'access',
      context.getHandler(),
    );

    if (access === 'public') {
      return true;
    }

    const { id, type }: CurrentUserProps = request.user;

    if (!id) return false;

    if (access === 'admin' && type !== 'admin') {
      return false;
    }

    if (access !== 'admin' && type === 'admin') {
      return false;
    }

    return true;
  }
}

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';
import { Request } from 'express';
import { UsersService } from 'src/models/users/users.service';
import { CrmAuthTokenProps, CurrentUserProps } from './types';

@Injectable()
export class CrmStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req?.cookies['auth-cookie'],
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate({ sub, profileId, type }: CrmAuthTokenProps) {
    if (!sub) return {};

    const user =
      type === 'user'
        ? await this.usersService.findOne(sub)
        : await this.usersService.findOne(sub); // найти суперюзера

    if (!user || !user.access) {
      throw new UnauthorizedException();
    }

    const { id, photo, firstName, lastName, email, access } = user;

    const currentUser: CurrentUserProps = {
      id,
      type,
      photo,
      firstName,
      lastName,
      email,
      access,
      profileId: type === 'user' ? user.profileId : profileId,
      roleId: type === 'user' ? user.roleId : '',
    };

    return currentUser;
  }
}

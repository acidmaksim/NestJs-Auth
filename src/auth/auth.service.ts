import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async getAuthToken(user: User) {
    const token = this.jwtService.sign({
      sub: user.id,
    });

    return token;
  }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CrmAuthTokenProps } from './types';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async getCrmAuthToken(props: CrmAuthTokenProps) {
    const token = await this.jwtService.sign(props);

    return token;
  }
}

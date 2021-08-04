import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CrmStrategy } from './crm.strategy';
import { UsersModule } from 'src/models/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { User } from 'src/models/users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),

    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),

    forwardRef(() => UsersModule),

    PassportModule,
  ],

  providers: [AuthService, CrmStrategy],
  exports: [AuthService],
})
export class AuthModule {}

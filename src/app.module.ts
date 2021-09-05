import { ConfigModule } from '@nestjs/config';

import { Module } from '@nestjs/common';
import { DatabaseModule } from '@src/database.module';

import { PartnerModule } from './models/partner/partner.module';
import { UsersModule } from './models/users/users.module';
import { AuthenticationModule } from './models/authentication/authentication.module';

import * as Joi from '@hapi/joi';
import { CurrentUsersModule } from './models/current-users/current-users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        //...
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    PartnerModule,
    UsersModule,
    AuthenticationModule,
    CurrentUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

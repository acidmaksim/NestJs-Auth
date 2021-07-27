import { ConfigModule } from '@nestjs/config';
import { CashboxesModule } from './cashboxes/cashboxes.module';
import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    UsersModule,
    CashboxesModule,
    ConfigModule.forRoot(),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

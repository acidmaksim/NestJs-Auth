import { ConfigModule } from '@nestjs/config';
import { CashboxesModule } from 'src/models/cashboxes/cashboxes.module';

import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserModule } from '@src/models/user/user.module';

@Module({
  imports: [
    CashboxesModule,
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

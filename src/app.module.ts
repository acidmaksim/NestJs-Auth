import { ConfigModule } from '@nestjs/config';
import { CashboxesModule } from 'src/models/cashboxes/cashboxes.module';
import { UsersModule } from 'src/models/users/users.module';
import { Module } from '@nestjs/common';
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

import { ConfigModule } from '@nestjs/config';
import { CashboxesModule } from 'src/models/cashboxes/cashboxes.module';
import { UsersModule } from 'src/models/users/users.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { QuestroomModule } from '@src/models/questroom/questroom.module';
import { CertificateModule } from '@src/models/certificate/certificate.module';
import { FinanceitemModule } from '@src/models/financeitem/financeitem.module';
import { LocationModule } from '@src/models/location/location.module';
import { OptionModule } from '@src/models/option/option.module';
import { RoleModule } from '@src/models/role/role.module';

@Module({
  imports: [
    UsersModule,
    CashboxesModule,
    ConfigModule.forRoot(),
    DatabaseModule,
    QuestroomModule,
    CertificateModule,
    FinanceitemModule,
    LocationModule,
    OptionModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

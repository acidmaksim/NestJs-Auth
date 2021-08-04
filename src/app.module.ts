import { AuthhMiddleware } from '@src/models/user/middlewares/auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { CashboxesModule } from 'src/models/cashboxes/cashboxes.module';

import { UserModule } from '@src/models/user/user.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from '@src/database.module';
import { QuestroomModule } from '@src/models/questroom/questroom.module';
import { CertificateModule } from '@src/models/certificate/certificate.module';
import { FinanceitemModule } from '@src/models/financeitem/financeitem.module';
import { LocationModule } from '@src/models/location/location.module';
import { OptionModule } from '@src/models/option/option.module';
import { RoleModule } from '@src/models/role/role.module';
import { TariffModule } from '@src/models/tariff/tariff.module';
import { WidgetModule } from '@src/models/widget/widget.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    CashboxesModule,
    DatabaseModule,
    QuestroomModule,
    CertificateModule,
    FinanceitemModule,
    LocationModule,
    OptionModule,
    RoleModule,
    TariffModule,
    WidgetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthhMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}

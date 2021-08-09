import { AuthMiddleware } from '@src/models/user/middlewares/auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { CashboxesModule } from 'src/models/cashbox/cashbox.module';

import { UserModule } from '@src/models/user/user.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from '@src/database.module';
import { QuestroomModule } from '@src/models/questroom/questroom.module';
import { CertificateModule } from '@src/models/certificate/certificate.module';
import { FinanceitemModule } from '@src/models/financeitem/financeitem.module';
import { LocationModule } from '@src/models/location/location.module';
import { RoleModule } from '@src/models/role/role.module';
import { TariffModule } from '@src/models/tariff/tariff.module';
import { WidgetModule } from '@src/models/widget/widget.module';
import { PartnerModule } from '@src/models/partner/partner.module';
import { ClientModule } from '@src/models/client/client.module';
import { CertificatesaleModule } from '@src/models/certificatesale/certificatesale.module';
import { TransactionModule } from '@src/models/transaction/transaction.module';
import { ProfileModule } from '@src/models/profile/profile.module';
import { UpsellingModule } from '@src/models/upselling/upselling.module';
import { OrderModule } from '@src/models/order/order.module';
import { OrderUpsellingModule } from '@src/models/order-upselling/order-upselling.module';
import { OrderDiscountModule } from '@src/models/order-discount/order-discount.module';
import { OrderPenaltyModule } from '@src/models/order-penalty/order-penalty.module';

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
    RoleModule,
    TariffModule,
    WidgetModule,
    PartnerModule,
    ClientModule,
    CertificatesaleModule,
    TransactionModule,
    ProfileModule,
    OrderModule,
    UpsellingModule,
    OrderUpsellingModule,
    OrderDiscountModule,
    OrderPenaltyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}

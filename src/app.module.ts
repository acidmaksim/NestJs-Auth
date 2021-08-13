import { AuthMiddleware } from '@src/models/user/middlewares/auth.middleware';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from '@src/models/user/user.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from '@src/database.module';

import { PlaceTypeModule } from './models/place-type/place-type.module';
import { PlaceCategoryModule } from './models/place-category/place-category.module';
import { ReviewModule } from './models/review/review.module';
import { PlaceModule } from './models/place/place.module';
import { PartnerModule } from './models/partner/partner.module';
import { AnswerModule } from './models/answer/answer.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    DatabaseModule,
    PlaceTypeModule,
    PlaceCategoryModule,
    ReviewModule,
    PlaceModule,
    PartnerModule,
    AnswerModule,
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

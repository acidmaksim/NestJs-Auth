import { UpsellingModule } from '@src/models/upselling/upselling.module';
import { OrderModule } from '@src/models/order/order.module';

import { OrderUpsellingEntity } from '@src/models/order-upselling/entities/order-upselling.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderUpsellingService } from './order-upselling.service';
import { OrderUpsellingController } from './order-upselling.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderUpsellingEntity]),
    OrderModule,
    UpsellingModule,
  ],
  controllers: [OrderUpsellingController],
  providers: [OrderUpsellingService],
})
export class OrderUpsellingModule {}

import { OrderModule } from '@src/models/order/order.module';
import { OrderDiscountEntity } from './entities/order-discount.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderDiscountService } from './order-discount.service';
import { OrderDiscountController } from './order-discount.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDiscountEntity]), OrderModule],
  controllers: [OrderDiscountController],
  providers: [OrderDiscountService],
})
export class OrderDiscountModule {}

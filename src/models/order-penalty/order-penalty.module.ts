import { OrderModule } from '@src/models/order/order.module';
import { OrderPenaltyEntity } from './entities/order-penalty.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderPenaltyService } from './order-penalty.service';
import { OrderPenaltyController } from './order-penalty.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderPenaltyEntity]), OrderModule],
  controllers: [OrderPenaltyController],
  providers: [OrderPenaltyService],
})
export class OrderPenaltyModule {}

import { Controller, Post, Param, Delete } from '@nestjs/common';
import { OrderPenaltyService } from './order-penalty.service';
import { CreateOrderPenaltyDto } from './dto/create-order-penalty.dto';

import { OrderService } from '../order/order.service';
import { BodyWithProfile } from '@src/decorators/body-decorator';

@Controller('orders/penalties')
export class OrderPenaltyController {
  constructor(
    private readonly orderPenaltyService: OrderPenaltyService,
    private orderService: OrderService,
  ) {}

  @Post()
  async create(
    @BodyWithProfile() createOrderPenaltyDto: CreateOrderPenaltyDto,
  ) {
    await this.orderPenaltyService.create(createOrderPenaltyDto);

    return this.orderService.updatePrice(createOrderPenaltyDto.orderId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const orderPenalty = await this.orderPenaltyService.remove(id);

    return this.orderService.updatePrice(orderPenalty.order.id);
  }
}

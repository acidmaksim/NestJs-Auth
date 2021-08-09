import { BodyWithProfile } from './../../decorators/body-decorator';
import { AuthGuard } from './../user/guards/auth.guard';
import { OrderEntity } from '@src/models/order/entities/order.entity';
import { OrderService } from './../order/order.service';
import { Controller, Post, Param, Delete, UseGuards } from '@nestjs/common';
import { OrderUpsellingService } from './order-upselling.service';
import { CreateOrderUpsellingDto } from './dto/create-order-upselling.dto';

@UseGuards(AuthGuard)
@Controller('orders/upsellings')
export class OrderUpsellingController {
  constructor(
    private orderUpsellingService: OrderUpsellingService,
    private orderService: OrderService,
  ) {}

  @Post()
  async create(
    @BodyWithProfile() createOrderUpsellingDto: CreateOrderUpsellingDto,
  ): Promise<OrderEntity> {
    await this.orderUpsellingService.createMany(createOrderUpsellingDto);

    return this.orderService.updatePrice(createOrderUpsellingDto.orderId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const orderUpselling = await this.orderUpsellingService.remove(id);

    return this.orderService.updatePrice(orderUpselling.order.id);
  }
}

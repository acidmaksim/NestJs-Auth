import { OrderService } from '@src/models/order/order.service';
import { BodyWithProfile } from './../../decorators/body-decorator';
import { Controller, Post, Param, Delete } from '@nestjs/common';
import { OrderDiscountService } from './order-discount.service';
import { CreateOrderDiscountDto } from './dto/create-order-discount.dto';

@Controller('orders/discounts')
export class OrderDiscountController {
  constructor(
    private readonly orderDiscountService: OrderDiscountService,
    private orderService: OrderService,
  ) {}

  @Post()
  async create(
    @BodyWithProfile() createOrderDiscountDto: CreateOrderDiscountDto,
  ) {
    await this.orderDiscountService.create(createOrderDiscountDto);

    return this.orderService.updatePrice(createOrderDiscountDto.orderId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const orderDiscount = await this.orderDiscountService.remove(id);

    return this.orderService.updatePrice(orderDiscount.order.id);
  }
}

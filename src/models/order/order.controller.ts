import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly ordersService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  async getAll(@Query() query) {
    const orders = await this.ordersService.findAll(query);
    return orders;
  }

  @Get(':id')
  getOne(@Param('id') orderId: string) {
    return this.ordersService.findOne(orderId);
  }

  @Patch(':id')
  update(@Param('id') orderId: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.updateOrder(orderId, updateOrderDto);
  }

  @Delete(':id')
  delete(@Param('id') orderId: string) {
    return this.ordersService.delete(orderId);
  }

  @Patch(':id')
  recover(@Param('id') orderId: string) {
    return this.ordersService.recover(orderId);
  }
}

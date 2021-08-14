import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepositroy: Repository<OrderEntity>,
  ) {}

  create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    const order = new OrderEntity();
    return this.orderRepositroy.save({ ...order, ...createOrderDto });
  }

  findAll(query): Promise<OrderEntity[]> {
    return this.orderRepositroy.find(query);
  }

  async findOne(orderId: string): Promise<OrderEntity> {
    const order = await this.orderRepositroy.findOne(orderId, {
      withDeleted: true,
      relations: ['client'],
    });

    if (!order) {
      throw new NotFoundException();
    }

    return order;
  }

  async updateOrder(
    orderId: string,
    updateOrderDto: UpdateOrderDto,
  ): Promise<OrderEntity> {
    const order = await this.findOne(orderId);
    return this.orderRepositroy.save({ ...order, ...updateOrderDto });
  }

  async delete(orderId: string): Promise<OrderEntity> {
    const order = await this.findOne(orderId);
    return this.orderRepositroy.softRemove(order);
  }

  async recover(orderId: string): Promise<OrderEntity> {
    const order = await this.findOne(orderId);
    return this.orderRepositroy.recover(order);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    const order = new OrderEntity();
    return this.orderRepository.save({ ...order, ...createOrderDto });
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: string) {
    return this.orderRepository.findOne(id, {
      relations: ['upsellings', 'discounts', 'penalties'],
    });
  }

  async updatePrice(orderId: string) {
    const order = await this.findOne(orderId);

    let price = 0;
    let payed = 0;

    if (order.upsellings) {
      price += order.upsellings.reduce((acc, val) => (acc += val.sum), 0);
    }

    if (order.penalties) {
      price += order.penalties.reduce((acc, val) => (acc += val.sum), 0);
    }

    if (order.discounts) {
      payed += order.discounts.reduce((acc, val) => (acc += val.sum), 0);
    }

    return this.orderRepository.save({
      ...order,
      price,
      payed,
      toPay: price - payed,
    });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = this.findOne(id);
    return this.orderRepository.save({ ...order, ...updateOrderDto });
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

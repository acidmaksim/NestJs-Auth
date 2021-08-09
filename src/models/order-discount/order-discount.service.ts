import { OrderDiscountEntity } from './entities/order-discount.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDiscountDto } from './dto/create-order-discount.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderDiscountService {
  constructor(
    @InjectRepository(OrderDiscountEntity)
    private orderDiscountRepository: Repository<OrderDiscountEntity>,
  ) {}

  create({ orderId, sum, profileId, title }: CreateOrderDiscountDto) {
    const orderDiscount = new OrderDiscountEntity();

    return this.orderDiscountRepository.save({
      ...orderDiscount,
      sum,
      profileId,
      title,
      order: { id: orderId },
    });
  }

  async findOne(id: string) {
    const orderDiscount = await this.orderDiscountRepository.findOne(id, {
      relations: ['order'],
    });

    if (!orderDiscount) {
      throw new NotFoundException();
    }

    return orderDiscount;
  }

  async remove(id: string) {
    const orderDiscount = await this.findOne(id);

    return this.orderDiscountRepository.remove(orderDiscount);
  }
}

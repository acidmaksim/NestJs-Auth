import { OrderPenaltyEntity } from './entities/order-penalty.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderPenaltyDto } from './dto/create-order-penalty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderPenaltyService {
  constructor(
    @InjectRepository(OrderPenaltyEntity)
    private orderPenaltyRepository: Repository<OrderPenaltyEntity>,
  ) {}

  create({ orderId, sum, profileId, title }: CreateOrderPenaltyDto) {
    const orderPenalty = new OrderPenaltyEntity();

    return this.orderPenaltyRepository.save({
      ...orderPenalty,
      sum,
      profileId,
      title,
      order: { id: orderId },
    });
  }

  async findOne(id: string) {
    const orderPenalty = await this.orderPenaltyRepository.findOne(id, {
      relations: ['order'],
    });

    if (!orderPenalty) {
      throw new NotFoundException();
    }

    return orderPenalty;
  }

  async remove(id: string) {
    const orderPenalty = await this.findOne(id);

    return this.orderPenaltyRepository.remove(orderPenalty);
  }
}

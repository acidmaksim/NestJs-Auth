import { OrderUpsellingEntity } from '@src/models/order-upselling/entities/order-upselling.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateOrderUpsellingDto,
  UpsellingData,
} from './dto/create-order-upselling.dto';
import { Repository } from 'typeorm';
import { UpsellingService } from '@src/models/upselling/upselling.service';

@Injectable()
export class OrderUpsellingService {
  constructor(
    @InjectRepository(OrderUpsellingEntity)
    private orderUpsellingRepository: Repository<OrderUpsellingEntity>,
    private upsellingSerice: UpsellingService,
  ) {}

  async create(
    upsellingData: UpsellingData,
    profileId: string,
    orderId: string,
  ) {
    const { title, price } = await this.upsellingSerice.findOne(
      upsellingData.id,
    );

    const orderUpselling = new OrderUpsellingEntity();

    return this.orderUpsellingRepository.save({
      ...orderUpselling,
      order: { id: orderId },
      sum: price || upsellingData.sum || 0,
      title,
      upsellingId: upsellingData.id,
      profileId,
    });
  }

  async createMany(createOrderUpsellingDto: CreateOrderUpsellingDto) {
    return await Promise.all(
      createOrderUpsellingDto.upsellings.map((upselling) =>
        this.create(
          upselling,
          createOrderUpsellingDto.profileId,
          createOrderUpsellingDto.orderId,
        ),
      ),
    );
  }

  async findOne(id: string) {
    const orderUpselling = await this.orderUpsellingRepository.findOne(id, {
      relations: ['order'],
    });

    if (!orderUpselling) {
      throw new NotFoundException();
    }

    return orderUpselling;
  }

  async remove(id: string) {
    const orderUpselling = await this.findOne(id);

    return this.orderUpsellingRepository.remove(orderUpselling);
  }
}

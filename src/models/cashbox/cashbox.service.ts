import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreateCashboxDto } from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';
import { CashboxEntity } from './cashbox.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CashboxService {
  constructor(
    @InjectRepository(CashboxEntity)
    private service: Repository<CashboxEntity>,
  ) {}

  create(cashboxBody: CreateCashboxDto): Promise<CashboxEntity> {
    const cashbox = new CashboxEntity();

    return this.service.save({ ...cashbox, ...cashboxBody });
  }

  findAll(query): Promise<CashboxEntity[]> {
    return this.service.find(query);
  }

  async findOne(cashboxId: string): Promise<CashboxEntity> {
    const cashbox = await this.service.findOne(cashboxId, {
      withDeleted: true,
    });

    if (!cashbox) {
      throw new NotFoundException();
    }

    return cashbox;
  }

  async updateCashbox(
    cashboxId: string,
    cashboxBody: UpdateCashboxDto,
  ): Promise<CashboxEntity> {
    const cashbox = await this.findOne(cashboxId);

    return this.service.save({
      ...cashbox,
      ...cashboxBody,
    });
  }

  async delete(cashboxId: string): Promise<CashboxEntity> {
    const cashbox = await this.findOne(cashboxId);
    return this.service.softRemove(cashbox);
  }

  async recover(cashboxId: string): Promise<CashboxEntity> {
    const cashbox = await this.findOne(cashboxId);
    return this.service.recover(cashbox);
  }
}

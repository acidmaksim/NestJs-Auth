import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreateCashboxDto } from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';
import { CashboxEntity } from './entities/cashbox.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CashboxService {
  constructor(
    @InjectRepository(CashboxEntity)
    private cashboxRepository: Repository<CashboxEntity>,
  ) {}

  create(cashboxCreateDto: CreateCashboxDto): Promise<CashboxEntity> {
    const cashbox = new CashboxEntity();

    return this.cashboxRepository.save({ ...cashbox, ...cashboxCreateDto });
  }

  findAll(query): Promise<CashboxEntity[]> {
    return this.cashboxRepository.find(query);
  }

  async findOne(cashboxId: string): Promise<CashboxEntity> {
    const cashbox = await this.cashboxRepository.findOne(cashboxId, {
      withDeleted: true,
    });

    if (!cashbox) {
      throw new NotFoundException();
    }

    return cashbox;
  }

  async updateCashbox(
    cashboxId: string,
    cashboxUpdateDto: UpdateCashboxDto,
  ): Promise<CashboxEntity> {
    const cashbox = await this.findOne(cashboxId);

    return this.cashboxRepository.save({
      ...cashbox,
      ...cashboxUpdateDto,
    });
  }

  async delete(cashboxId: string): Promise<CashboxEntity> {
    const cashbox = await this.findOne(cashboxId);
    return this.cashboxRepository.softRemove(cashbox);
  }

  async recover(cashboxId: string): Promise<CashboxEntity> {
    const cashbox = await this.findOne(cashboxId);
    return this.cashboxRepository.recover(cashbox);
  }
}

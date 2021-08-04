import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreateCashboxDto } from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';
import { Cashbox } from './cashboxes.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CashboxesService {
  constructor(
    @InjectRepository(Cashbox)
    private service: Repository<Cashbox>,
  ) {}

  /**
   * Create cashbox
   */
  async create(cashboxBody: CreateCashboxDto): Promise<Cashbox> {
    const cashbox = this.service.create(cashboxBody);

    return this.service.save(cashbox);
  }

  /**
   * Find all users
   */
  async findAll(query) {
    return await this.service.find(query);
  }

  /**
   * Find one cashbox
   */
  async findOne(cashboxId: string) {
    const cashbox = await this.service.findOne(cashboxId, {
      withDeleted: true,
    });

    if (!cashbox) {
      throw new NotFoundException();
    }

    return cashbox;
  }

  /**
   * Update cashbox
   */
  async updateCashbox(cashboxId: string, cashboxBody: UpdateCashboxDto) {
    const cashbox = await this.findOne(cashboxId);

    return this.service.save({
      ...cashbox,
      ...cashboxBody,
    });
  }

  /**
   * Delete cashbox
   */

  async delete(cashboxId: string) {
    const cashbox = await this.findOne(cashboxId);
    return this.service.softRemove(cashbox);
  }

  /**
   * Restore cashbox
   */
  async recover(cashboxId: string) {
    const cashbox = await this.findOne(cashboxId);
    return this.service.recover(cashbox);
  }
}

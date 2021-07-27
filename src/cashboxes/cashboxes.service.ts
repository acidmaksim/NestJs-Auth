/**
 * как прокидывать профиль везде
 *
 */

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
  async findAll(profileId: number) {
    return await this.service.find({
      where: { profileId },
    });
  }

  /**
   * Find one cashbox
   */
  async findOne(cashboxId: string, profileId: number) {
    const cashbox = await this.service.findOne(cashboxId, {
      withDeleted: true,
      where: { profileId },
    });

    if (!cashbox) {
      throw new NotFoundException();
    }

    return cashbox;
  }

  /**
   * Update cashbox
   */
  async updateCashbox(
    cashboxId: string,
    cashboxBody: UpdateCashboxDto,
    profileId: number,
  ) {
    const cashbox = await this.findOne(cashboxId, profileId);

    return this.service.save({
      ...cashbox,
      ...cashboxBody,
    });
  }

  /**
   * Delete cashbox
   */

  async delete(cashboxId: string, profileId: number) {
    const cashbox = await this.findOne(cashboxId, profileId);
    return this.service.softRemove(cashbox);
  }

  /**
   * Restore cashbox
   */
  async recover(cashboxId: string, profileId: number) {
    const cashbox = await this.findOne(cashboxId, profileId);
    return this.service.recover(cashbox);
  }
}

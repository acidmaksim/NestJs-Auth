import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFinanceitemDto } from './dto/create-financeitem.dto';
import { UpdateFinanceitemDto } from './dto/update-financeitem.dto';
import { FinanceitemEntity } from './entities/financeitem.entity';

@Injectable()
export class FinanceitemService {
  constructor(
    @InjectRepository(FinanceitemEntity)
    private financeitmeRepositroy: Repository<FinanceitemEntity>,
  ) {}

  create(
    financeitemCreateDto: CreateFinanceitemDto,
  ): Promise<FinanceitemEntity> {
    const financeitem = new FinanceitemEntity();

    return this.financeitmeRepositroy.save({
      ...financeitem,
      ...financeitemCreateDto,
    });
  }

  findAll(query): Promise<FinanceitemEntity[]> {
    return this.financeitmeRepositroy.find(query);
  }

  async findOne(financeitemId: string): Promise<FinanceitemEntity> {
    const financeitem = this.financeitmeRepositroy.findOne(financeitemId, {
      withDeleted: true,
    });
    if (!financeitem) {
      throw new NotFoundException();
    }

    return financeitem;
  }

  async updateFinanceitem(
    financeitemId: string,
    financeitemUpdateDto: UpdateFinanceitemDto,
  ): Promise<FinanceitemEntity> {
    const financeitem = await this.findOne(financeitemId);

    return this.financeitmeRepositroy.save({
      ...financeitem,
      ...financeitemUpdateDto,
    });
  }

  async delete(financeitemId: string): Promise<FinanceitemEntity> {
    const financeitem = await this.findOne(financeitemId);
    return this.financeitmeRepositroy.softRemove(financeitem);
  }

  async recover(financeitemId: string): Promise<FinanceitemEntity> {
    const financeitem = await this.findOne(financeitemId);
    return this.financeitmeRepositroy.recover(financeitem);
  }
}

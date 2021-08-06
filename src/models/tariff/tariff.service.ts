import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';
import { TariffEntity } from './entities/tariff.entity';

@Injectable()
export class TariffService {
  constructor(
    @InjectRepository(TariffEntity)
    private tariffRepository: Repository<TariffEntity>,
  ) {}

  create(tariffCreateDto: CreateTariffDto): Promise<TariffEntity> {
    const tariff = new TariffEntity();
    return this.tariffRepository.save({ ...tariff, ...tariffCreateDto });
  }

  findAll(query): Promise<TariffEntity[]> {
    return this.tariffRepository.find(query);
  }

  async findOne(tariffId: string): Promise<TariffEntity> {
    const tariff = await this.tariffRepository.findOne(tariffId, {
      withDeleted: true,
    });

    if (!tariff) {
      throw new NotFoundException();
    }

    return tariff;
  }

  async updateTariff(
    tariffId: string,
    tariffUpdateDto: UpdateTariffDto,
  ): Promise<TariffEntity> {
    const tariff = await this.findOne(tariffId);

    return this.tariffRepository.save({ ...tariff, ...tariffUpdateDto });
  }

  async delete(tariffId: string): Promise<TariffEntity> {
    const tariff = await this.findOne(tariffId);
    return this.tariffRepository.softRemove(tariff);
  }

  async recover(tariffId: string): Promise<TariffEntity> {
    const tariff = await this.findOne(tariffId);
    return this.tariffRepository.recover(tariff);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PartnerEntity } from './entities/partner.entity';

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(PartnerEntity)
    private partnerRepository: Repository<PartnerEntity>,
  ) {}

  create(createPartnerDto: CreatePartnerDto): Promise<PartnerEntity> {
    const partner = new PartnerEntity();
    return this.partnerRepository.save({ ...partner, ...createPartnerDto });
  }

  findAll(query): Promise<PartnerEntity[]> {
    return this.partnerRepository.find(query);
  }

  async findOne(partnerId: string): Promise<PartnerEntity> {
    const partner = await this.partnerRepository.findOne(partnerId, {
      withDeleted: true,
    });

    if (!partner) {
      throw new NotFoundException();
    }

    return partner;
  }

  async updatepartner(
    partnerId: string,
    updatePartnerDto: UpdatePartnerDto,
  ): Promise<PartnerEntity> {
    const partner = await this.findOne(partnerId);
    return this.partnerRepository.save({ ...partner, ...updatePartnerDto });
  }

  async delete(partnerId: string): Promise<PartnerEntity> {
    const partner = await this.findOne(partnerId);
    return this.partnerRepository.softRemove(partner);
  }

  async recover(partnerId: string): Promise<PartnerEntity> {
    const partner = await this.findOne(partnerId);
    return this.partnerRepository.recover(partner);
  }
}

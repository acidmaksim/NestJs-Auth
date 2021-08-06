import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUpsellingDto } from './dto/create-upselling.dto';
import { UpdateUpsellingDto } from './dto/update-upselling.dto';
import { UpsellingEntity } from './entities/upselling.entity';

@Injectable()
export class UpsellingService {
  constructor(
    @InjectRepository(UpsellingEntity)
    private upsellingsRepositrory: Repository<UpsellingEntity>,
  ) {}

  create(upsellingCreateDto: CreateUpsellingDto): Promise<UpsellingEntity> {
    const upselling = new UpsellingEntity();

    return this.upsellingsRepositrory.save({
      ...upselling,
      ...upsellingCreateDto,
    });
  }

  findAll(query): Promise<UpsellingEntity[]> {
    return this.upsellingsRepositrory.find(query);
  }

  async findOne(upsellingId: string): Promise<UpsellingEntity> {
    const upselling = await this.upsellingsRepositrory.findOne(upsellingId, {
      withDeleted: true,
    });

    if (!upselling) {
      throw new NotFoundException();
    }

    return upselling;
  }

  async updateUpselling(
    upsellingId: string,
    upsellingUpdateDto: UpdateUpsellingDto,
  ): Promise<UpsellingEntity> {
    const upselling = await this.findOne(upsellingId);

    return this.upsellingsRepositrory.save({
      ...upselling,
      ...upsellingUpdateDto,
    });
  }

  async delete(upsellingId: string): Promise<UpsellingEntity> {
    const upselling = await this.findOne(upsellingId);
    return this.upsellingsRepositrory.softRemove(upselling);
  }

  async recover(upsellingId: string): Promise<UpsellingEntity> {
    const upselling = await this.findOne(upsellingId);
    return this.upsellingsRepositrory.recover(upselling);
  }
}

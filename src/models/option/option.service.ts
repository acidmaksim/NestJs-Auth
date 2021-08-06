import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { OptionEntity } from './entities/option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionEntity)
    private optionsRepositrory: Repository<OptionEntity>,
  ) {}

  create(optionCreateDto: CreateOptionDto): Promise<OptionEntity> {
    const option = new OptionEntity();

    return this.optionsRepositrory.save({ ...option, ...optionCreateDto });
  }

  findAll(query): Promise<OptionEntity[]> {
    return this.optionsRepositrory.find(query);
  }

  async findOne(optionId: string): Promise<OptionEntity> {
    const option = await this.optionsRepositrory.findOne(optionId, {
      withDeleted: true,
    });

    if (!option) {
      throw new NotFoundException();
    }

    return option;
  }

  async updateOption(
    optionId: string,
    optionUpdateDto: UpdateOptionDto,
  ): Promise<OptionEntity> {
    const option = await this.findOne(optionId);

    return this.optionsRepositrory.save({
      ...option,
      ...optionUpdateDto,
    });
  }

  async delete(optionId: string): Promise<OptionEntity> {
    const option = await this.findOne(optionId);
    return this.optionsRepositrory.softRemove(option);
  }

  async recover(optionId: string): Promise<OptionEntity> {
    const option = await this.findOne(optionId);
    return this.optionsRepositrory.recover(option);
  }
}

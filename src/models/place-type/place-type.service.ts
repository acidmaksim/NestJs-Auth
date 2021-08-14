import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceTypeDto } from './dto/create-place-type.dto';
import { UpdatePlaceTypeDto } from './dto/update-place-type.dto';
import { PlaceTypeEntity } from './entities/place-type.entity';

@Injectable()
export class PlaceTypeService {
  constructor(
    @InjectRepository(PlaceTypeEntity)
    private placeTypeRepository: Repository<PlaceTypeEntity>,
  ) {}

  create(createPlaceTypeDto: CreatePlaceTypeDto): Promise<PlaceTypeEntity> {
    const placeType = new PlaceTypeEntity();
    return this.placeTypeRepository.save({
      ...placeType,
      ...createPlaceTypeDto,
    });
  }

  findAll(query): Promise<PlaceTypeEntity[]> {
    return this.placeTypeRepository.find(query);
  }

  async findOne(placeTypeId: string): Promise<PlaceTypeEntity> {
    const placeType = await this.placeTypeRepository.findOne(placeTypeId, {
      withDeleted: true,
    });

    if (!placeType) {
      throw new NotFoundException();
    }
    return placeType;
  }

  async updatePlaceType(
    placeTypeId: string,
    updatePlaceTypeDto: UpdatePlaceTypeDto,
  ): Promise<PlaceTypeEntity> {
    const placeType = await this.findOne(placeTypeId);

    return this.placeTypeRepository.save({
      ...placeType,
      ...updatePlaceTypeDto,
    });
  }

  async delete(placeTypeId: string): Promise<PlaceTypeEntity> {
    const placeType = await this.findOne(placeTypeId);
    return this.placeTypeRepository.softRemove(placeType);
  }

  async recover(placeTypeId: string): Promise<PlaceTypeEntity> {
    const placeType = await this.findOne(placeTypeId);
    return this.placeTypeRepository.recover(placeType);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PlaceEntity } from './entities/place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(PlaceEntity)
    private placeRepository: Repository<PlaceEntity>,
  ) {}

  create(createPlaceDto: CreatePlaceDto): Promise<PlaceEntity> {
    const place = new PlaceEntity();
    return this.placeRepository.save({ ...place, ...createPlaceDto });
  }

  findAll(query): Promise<PlaceEntity[]> {
    return this.placeRepository.find(query);
  }

  async findOne(placeId: string): Promise<PlaceEntity> {
    const place = this.placeRepository.findOne(placeId, {
      withDeleted: true,
      relations: ['partner', 'category', 'reviews'],
    });

    if (!place) {
      throw new NotFoundException();
    }

    return place;
  }

  async updatePlace(
    placeId: string,
    updatePlaceDto: UpdatePlaceDto,
  ): Promise<PlaceEntity> {
    const place = await this.findOne(placeId);

    return this.placeRepository.save({ ...place, ...updatePlaceDto });
  }

  async delete(placeId: string): Promise<PlaceEntity> {
    const place = await this.findOne(placeId);
    return this.placeRepository.softRemove(place);
  }

  async recover(placeId: string): Promise<PlaceEntity> {
    const place = await this.findOne(placeId);
    return this.placeRepository.recover(place);
  }
}

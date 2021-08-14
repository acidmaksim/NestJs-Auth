import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceCategoryDto } from './dto/create-place-category.dto';
import { UpdatePlaceCategoryDto } from './dto/update-place-category.dto';
import { PlaceCategoryEntity } from './entities/place-category.entity';

@Injectable()
export class PlaceCategoryService {
  constructor(
    @InjectRepository(PlaceCategoryEntity)
    private placeCategoryRepository: Repository<PlaceCategoryEntity>,
  ) {}

  create(
    createPlaceCategoryDto: CreatePlaceCategoryDto,
  ): Promise<PlaceCategoryEntity> {
    const placeCategory = new PlaceCategoryEntity();
    return this.placeCategoryRepository.save({
      ...placeCategory,
      ...createPlaceCategoryDto,
    });
  }

  findAll(query): Promise<PlaceCategoryEntity[]> {
    return this.placeCategoryRepository.find(query);
  }

  async findOne(placeCategoryId: string): Promise<PlaceCategoryEntity> {
    const placeCategory = await this.placeCategoryRepository.findOne(
      placeCategoryId,
      { withDeleted: true, relations: ['places'] },
    );

    if (!placeCategory) {
      throw new NotFoundException();
    }

    return placeCategory;
  }

  async updatePlaceCategory(
    placeCategoryId: string,
    updatePlaceCategoryDto: UpdatePlaceCategoryDto,
  ): Promise<PlaceCategoryEntity> {
    const placeCategory = await this.findOne(placeCategoryId);
    return this.placeCategoryRepository.save({
      ...placeCategory,
      ...updatePlaceCategoryDto,
    });
  }

  async delete(placeCategoryId: string): Promise<PlaceCategoryEntity> {
    const placeCategory = await this.findOne(placeCategoryId);
    return this.placeCategoryRepository.softRemove(placeCategory);
  }

  async recover(placeCategoryId: string): Promise<PlaceCategoryEntity> {
    const placeCategory = await this.findOne(placeCategoryId);
    return this.placeCategoryRepository.recover(placeCategory);
  }
}

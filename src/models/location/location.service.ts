import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationEntity } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: Repository<LocationEntity>,
  ) {}

  create(locationCreateDto: CreateLocationDto): Promise<LocationEntity> {
    const location = new LocationEntity();

    return this.locationRepository.save({ ...location, ...locationCreateDto });
  }

  findAll(query): Promise<LocationEntity[]> {
    return this.locationRepository.find(query);
  }

  async findOne(locationId: string): Promise<LocationEntity> {
    const location = await this.locationRepository.findOne(locationId, {
      withDeleted: true,
    });

    if (!location) {
      throw new NotFoundException();
    }

    return location;
  }

  async updateLocation(
    locationId: string,
    locationUpdateDto: UpdateLocationDto,
  ): Promise<LocationEntity> {
    const location = await this.findOne(locationId);

    return this.locationRepository.save({
      ...location,
      ...locationUpdateDto,
    });
  }

  async delete(locationId: string): Promise<LocationEntity> {
    const location = await this.findOne(locationId);
    return this.locationRepository.softRemove(location);
  }

  async recover(locationId: string): Promise<LocationEntity> {
    const location = await this.findOne(locationId);
    return this.locationRepository.recover(location);
  }
}

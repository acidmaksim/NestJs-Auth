import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestroomDto } from './dto/create-questroom.dto';
import { UpdateQuestroomDto } from './dto/update-questroom.dto';
import { QuestroomEntity } from './entities/questroom.entity';

@Injectable()
export class QuestroomService {
  constructor(
    @InjectRepository(QuestroomEntity)
    private questroomRepository: Repository<QuestroomEntity>,
  ) {}

  create(questroomCreateDto: CreateQuestroomDto): Promise<QuestroomEntity> {
    const questroom = new QuestroomEntity();

    return this.questroomRepository.save({
      ...questroom,
      ...questroomCreateDto,
    });
  }

  findAll(query): Promise<QuestroomEntity[]> {
    return this.questroomRepository.find(query);
  }

  async findOne(questroomId: string): Promise<QuestroomEntity> {
    const questroom = await this.questroomRepository.findOne(questroomId, {
      withDeleted: true,
    });

    if (!questroom) {
      throw new NotFoundException();
    }
    return questroom;
  }

  updateQuestroom(
    questroomId: string,
    questroomUpdateDto: UpdateQuestroomDto,
  ): Promise<QuestroomEntity> {
    const questroom = this.findOne(questroomId);

    return this.questroomRepository.save({
      ...questroom,
      ...questroomUpdateDto,
    });
  }

  async delete(questroomId: string): Promise<QuestroomEntity> {
    const questroom = await this.findOne(questroomId);
    return this.questroomRepository.softRemove(questroom);
  }

  async recover(questroomId: string): Promise<QuestroomEntity> {
    const questroom = await this.findOne(questroomId);
    return this.questroomRepository.recover(questroom);
  }
}

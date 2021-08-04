import { Injectable } from '@nestjs/common';
import { CreateQuestroomDto } from './dto/create-questroom.dto';
import { UpdateQuestroomDto } from './dto/update-questroom.dto';

@Injectable()
export class QuestroomService {
  create(createQuestroomDto: CreateQuestroomDto) {
    return 'This action adds a new questroom';
  }

  findAll() {
    return `This action returns all questroom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questroom`;
  }

  update(id: number, updateQuestroomDto: UpdateQuestroomDto) {
    return `This action updates a #${id} questroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} questroom`;
  }
}

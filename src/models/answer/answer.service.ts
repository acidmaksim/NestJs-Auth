import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { AnswerEntity } from './entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(AnswerEntity)
    private answerRepositroy: Repository<AnswerEntity>,
  ) {}

  create(createAnswerDto: CreateAnswerDto): Promise<AnswerEntity> {
    const answer = new AnswerEntity();
    return this.answerRepositroy.save({ ...answer, ...createAnswerDto });
  }

  findAll(query): Promise<AnswerEntity[]> {
    return this.answerRepositroy.find(query);
  }

  async findOne(answerId: string): Promise<AnswerEntity> {
    const answer = await this.answerRepositroy.findOne(answerId, {
      withDeleted: true,
      relations: ['review'],
    });
    if (!answer) {
      throw new NotFoundException();
    }
    return answer;
  }

  async updateAnswer(
    answerId: string,
    updateAnswerDto: UpdateAnswerDto,
  ): Promise<AnswerEntity> {
    const answer = await this.findOne(answerId);
    return this.answerRepositroy.save({ ...answer, ...updateAnswerDto });
  }

  async delete(answerId: string): Promise<AnswerEntity> {
    const answer = await this.findOne(answerId);
    return this.answerRepositroy.softRemove(answer);
  }

  async recover(answerId: string): Promise<AnswerEntity> {
    const answer = await this.findOne(answerId);
    return this.answerRepositroy.recover(answer);
  }
}

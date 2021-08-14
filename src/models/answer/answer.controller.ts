import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answersService: AnswerService) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answersService.create(createAnswerDto);
  }

  @Get()
  async getAll(@Query() query) {
    const answers = await this.answersService.findAll(query);
    return answers;
  }

  @Get(':id')
  getOne(@Param('id') answersId: string) {
    return this.answersService.findOne(answersId);
  }

  @Patch(':id')
  update(
    @Param('id') answersId: string,
    @Body() updateAnswerDto: UpdateAnswerDto,
  ) {
    return this.answersService.updateAnswer(answersId, updateAnswerDto);
  }

  @Delete(':id')
  delete(@Param('id') answersId: string) {
    return this.answersService.delete(answersId);
  }

  @Patch(':id')
  recover(@Param('id') answersId: string) {
    return this.answersService.recover(answersId);
  }
}

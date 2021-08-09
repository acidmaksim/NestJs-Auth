import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestroomService } from './questroom.service';
import { CreateQuestroomDto } from './dto/create-questroom.dto';
import { UpdateQuestroomDto } from './dto/update-questroom.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('questrooms')
export class QuestroomController {
  constructor(private readonly questroomsService: QuestroomService) {}

  @Post()
  create(@BodyWithProfile() questroomCreateDto: CreateQuestroomDto) {
    return this.questroomsService.create(questroomCreateDto);
  }

  @Patch(':id')
  update(
    @Body() questroomUpdateDto: UpdateQuestroomDto,
    @Param('id') questroomId: string,
  ) {
    return this.questroomsService.updateQuestroom(
      questroomId,
      questroomUpdateDto,
    );
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const questroom = await this.questroomsService.findAll(query);
    return questroom;
  }

  @Get(':id')
  getOne(@Param('id') questroomId: string) {
    return this.questroomsService.findOne(questroomId);
  }

  @Delete(':id')
  delete(@Param('id') questroomId: string) {
    return this.questroomsService.delete(questroomId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') questroomId: string) {
    return this.questroomsService.recover(questroomId);
  }
}

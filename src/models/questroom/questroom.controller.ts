import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { QuestroomService } from './questroom.service';
import { CreateQuestroomDto } from './dto/create-questroom.dto';
import { UpdateQuestroomDto } from './dto/update-questroom.dto';

@Controller('questroom')
export class QuestroomController {
  constructor(private readonly questroomService: QuestroomService) {}

  @Post()
  create(@Body() createQuestroomDto: CreateQuestroomDto) {
    return this.questroomService.create(createQuestroomDto);
  }

  @Get()
  findAll() {
    return this.questroomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questroomService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestroomDto: UpdateQuestroomDto,
  ) {
    return this.questroomService.update(+id, updateQuestroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questroomService.remove(+id);
  }
}

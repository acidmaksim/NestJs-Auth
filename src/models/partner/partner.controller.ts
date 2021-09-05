import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { Response } from 'express';

@Controller('partner')
export class PartnerController {
  constructor(private readonly partnersService: PartnerService) {}

  @Post()
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Get()
  async getAll(@Query() query) {
    const partners = await this.partnersService.findAll(query);
    return partners;
  }

  @Get(':id')
  findOne(@Param('id') partnerId: string) {
    return this.partnersService.findOne(partnerId);
  }

  @Patch(':id')
  update(
    @Param('id') partnerId: string,
    @Body() updatePartnerDto: UpdatePartnerDto,
  ) {
    return this.partnersService.updatepartner(partnerId, updatePartnerDto);
  }

  @Delete(':id')
  delete(@Param('id') partnerId: string) {
    return this.partnersService.delete(partnerId);
  }

  @Patch(':id')
  recover(@Param('id') partnerId: string) {
    return this.partnersService.recover(partnerId);
  }
}

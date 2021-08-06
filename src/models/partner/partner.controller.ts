import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('partners')
export class PartnerController {
  constructor(private readonly partnersService: PartnerService) {}

  @Post()
  create(@BodyWithProfile() partnerCreateDto: CreatePartnerDto) {
    return this.partnersService.create(partnerCreateDto);
  }

  @Patch(':id')
  update(
    @Param('id') partnerId: string,
    @Body() partnerUpdateDto: UpdatePartnerDto,
  ) {
    return this.partnersService.update(partnerId, partnerUpdateDto);
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const partner = await this.partnersService.findAll(query);

    return partner;
  }

  @Get(':id')
  getOne(@Param('id') partnerId: string) {
    return this.partnersService.findOne(partnerId);
  }

  @Delete(':id')
  delete(@Param('id') partnerId: string) {
    return this.partnersService.delete(partnerId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') partnerId: string) {
    return this.partnersService.recover(partnerId);
  }
}

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
import { TariffService } from './tariff.service';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('tariffs')
export class TariffController {
  constructor(private readonly tariffsService: TariffService) {}

  @Post()
  create(@BodyWithProfile() tariffData: CreateTariffDto) {
    return this.tariffsService.create(tariffData);
  }

  @Patch(':id')
  update(@Param('id') tariffId: string, @Body() tariffData: UpdateTariffDto) {
    return this.tariffsService.updateTariff(tariffId, tariffData);
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const tariffs = await this.tariffsService.findAll(query);
    return tariffs;
  }

  @Get(':id')
  getOne(@Param('id') tariffId: string) {
    return this.tariffsService.findOne(tariffId);
  }

  @Delete(':id')
  delete(@Param('id') tariffId: string) {
    return this.tariffsService.delete(tariffId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') tariffId: string) {
    return this.tariffsService.recover(tariffId);
  }
}

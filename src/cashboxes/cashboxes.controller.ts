import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateCashboxDto } from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';
import { CashboxesService } from './cashboxes.service';

@Controller('cashboxes')
export class CashboxesController {
  constructor(private readonly cashboxsService: CashboxesService) {}

  @Post()
  createCashbox(@Body() cashboxData: CreateCashboxDto) {
    return this.cashboxsService.create(cashboxData);
  }

  @Patch(':id')
  updateCashbox(
    @Body() cashboxData: UpdateCashboxDto,
    @Param('id') cashboxId: string,
  ) {
    return this.cashboxsService.updateCashbox(cashboxId, cashboxData, 1);
  }

  @Get()
  async getAllCashboxes() {
    const cashboxs = await this.cashboxsService.findAll(1);
    return cashboxs;
  }

  @Get(':id')
  getOneCashbox(@Param('id') cashboxId: string) {
    return this.cashboxsService.findOne(cashboxId, 1);
  }

  @Delete(':id')
  deleteCashbox(@Param('id') cashboxId: string) {
    return this.cashboxsService.delete(cashboxId, 1);
  }

  @Patch('/recover/:id')
  recoverCashbox(@Param('id') cashboxId: string) {
    return this.cashboxsService.recover(cashboxId, 1);
  }
}

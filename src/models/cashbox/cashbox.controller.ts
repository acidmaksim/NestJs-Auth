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
import { CashboxService } from './cashbox.service';
import { QueryWithProfile } from 'src/decorators/query-decorator';
import { BodyWithProfile } from 'src/decorators/body-decorator';

@Controller('cashboxes')
export class CashboxesController {
  constructor(private readonly cashboxsService: CashboxService) {}

  @Post()
  createCashbox(@BodyWithProfile() cashboxData: CreateCashboxDto) {
    return this.cashboxsService.create(cashboxData);
  }

  @Patch(':id')
  updateCashbox(
    @Body() cashboxData: UpdateCashboxDto,
    @Param('id') cashboxId: string,
  ) {
    return this.cashboxsService.updateCashbox(cashboxId, cashboxData);
  }

  @Get()
  async getAllCashboxes(@QueryWithProfile() query) {
    const cashboxs = await this.cashboxsService.findAll(query);
    return cashboxs;
  }

  @Get(':id')
  getOneCashbox(@Param('id') cashboxId: string) {
    return this.cashboxsService.findOne(cashboxId);
  }

  @Delete(':id')
  deleteCashbox(@Param('id') cashboxId: string) {
    return this.cashboxsService.delete(cashboxId);
  }

  @Patch('/recover/:id')
  recoverCashbox(@Param('id') cashboxId: string) {
    return this.cashboxsService.recover(cashboxId);
  }
}

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreateCashboxDto } from './dto/create-cashbox.dto';
import { UpdateCashboxDto } from './dto/update-cashbox.dto';
import { CashboxesService } from './cashboxes.service';
import { CrmAuthGuard } from 'src/auth/crm-auth.guard';
import { QueryWithProfile } from 'src/decorators/query-decorator';
import { BodyWithProfile } from 'src/decorators/body-decorator';

@UseGuards(CrmAuthGuard)
@Controller('cashboxes')
export class CashboxesController {
  constructor(private readonly cashboxsService: CashboxesService) {}

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

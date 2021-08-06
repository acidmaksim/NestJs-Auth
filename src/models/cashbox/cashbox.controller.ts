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
import { CashboxService } from './cashbox.service';
import { QueryWithProfile } from '@src/decorators/query-decorator';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { AuthGuard } from '@src/models/user/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('cashboxes')
export class CashboxesController {
  constructor(private readonly cashboxesService: CashboxService) {}

  @Post()
  create(@BodyWithProfile() cashboxData: CreateCashboxDto) {
    return this.cashboxesService.create(cashboxData);
  }

  @Patch(':id')
  update(
    @Body() cashboxData: UpdateCashboxDto,
    @Param('id') cashboxId: string,
  ) {
    return this.cashboxesService.updateCashbox(cashboxId, cashboxData);
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const cashboxes = await this.cashboxesService.findAll(query);
    return cashboxes;
  }

  @Get(':id')
  getOne(@Param('id') cashboxId: string) {
    return this.cashboxesService.findOne(cashboxId);
  }

  @Delete(':id')
  delete(@Param('id') cashboxId: string) {
    return this.cashboxesService.delete(cashboxId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') cashboxId: string) {
    return this.cashboxesService.recover(cashboxId);
  }
}

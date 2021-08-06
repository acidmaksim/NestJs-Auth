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
import { FinanceitemService } from './financeitem.service';
import { CreateFinanceitemDto } from './dto/create-financeitem.dto';
import { UpdateFinanceitemDto } from './dto/update-financeitem.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('financeitems')
export class FinanceitemController {
  constructor(private readonly financeitemsService: FinanceitemService) {}

  @Post()
  create(@BodyWithProfile() financeitemData: CreateFinanceitemDto) {
    return this.financeitemsService.create(financeitemData);
  }

  @Patch(':id')
  update(
    @Body() financeitemData: UpdateFinanceitemDto,
    @Param('id') financeitemId: string,
  ) {
    return this.financeitemsService.updateFinanceitem(
      financeitemId,
      financeitemData,
    );
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const financeitem = this.financeitemsService.findAll(query);
    return financeitem;
  }

  @Get(':id')
  getOne(@Param('id') financeiteId: string) {
    return this.financeitemsService.findOne(financeiteId);
  }

  @Delete(':id')
  remove(@Param('id') financeiteId: string) {
    return this.financeitemsService.delete(financeiteId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') financeiteId: string) {
    return this.financeitemsService.recover(financeiteId);
  }
}

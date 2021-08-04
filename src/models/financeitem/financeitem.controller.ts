import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinanceitemService } from './financeitem.service';
import { CreateFinanceitemDto } from './dto/create-financeitem.dto';
import { UpdateFinanceitemDto } from './dto/update-financeitem.dto';

@Controller('financeitem')
export class FinanceitemController {
  constructor(private readonly financeitemService: FinanceitemService) {}

  @Post()
  create(@Body() createFinanceitemDto: CreateFinanceitemDto) {
    return this.financeitemService.create(createFinanceitemDto);
  }

  @Get()
  findAll() {
    return this.financeitemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financeitemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinanceitemDto: UpdateFinanceitemDto) {
    return this.financeitemService.update(+id, updateFinanceitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financeitemService.remove(+id);
  }
}

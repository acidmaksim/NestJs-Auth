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
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionsService: TransactionService) {}

  @Post()
  create(@BodyWithProfile() transactionCreateDto: CreateTransactionDto) {
    return this.transactionsService.create(transactionCreateDto);
  }

  @Patch(':id')
  update(
    @Param('id') transactionId: string,
    @Body() transactionUpdateDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.updateTransaction(
      transactionId,
      transactionUpdateDto,
    );
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const transactions = await this.transactionsService.findAll(query);
    return transactions;
  }

  @Get(':id')
  getOne(@Param('id') transactionId: string) {
    return this.transactionsService.findOne(transactionId);
  }

  @Delete(':id')
  delete(@Param('id') transactionId: string) {
    return this.transactionsService.delete(transactionId);
  }

  @Delete('/recover/:id')
  recover(@Param('id') transactionId: string) {
    return this.transactionsService.recover(transactionId);
  }
}

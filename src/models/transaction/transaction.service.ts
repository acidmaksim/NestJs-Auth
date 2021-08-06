import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionEntity } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
  ) {}

  create(
    transactionCreateDto: CreateTransactionDto,
  ): Promise<TransactionEntity> {
    const transaction = new TransactionEntity();

    return this.transactionRepository.save({
      ...transaction,
      ...transactionCreateDto,
    });
  }

  findAll(query): Promise<TransactionEntity[]> {
    return this.transactionRepository.find(query);
  }

  async findOne(transactionId: string): Promise<TransactionEntity> {
    const transaction = await this.transactionRepository.findOne(
      transactionId,
      {
        withDeleted: true,
      },
    );

    if (!transaction) {
      throw new NotFoundException();
    }
    return transaction;
  }

  async updateTransaction(
    transactionId: string,
    transactionUpdateDto: UpdateTransactionDto,
  ) {
    const transaction = await this.findOne(transactionId);

    return this.transactionRepository.save({
      ...transaction,
      ...transactionUpdateDto,
    });
  }

  async delete(transactionId: string): Promise<TransactionEntity> {
    const cashbox = await this.findOne(transactionId);
    return this.transactionRepository.softRemove(cashbox);
  }

  async recover(transactionId: string): Promise<TransactionEntity> {
    const cashbox = await this.findOne(transactionId);
    return this.transactionRepository.recover(cashbox);
  }
}

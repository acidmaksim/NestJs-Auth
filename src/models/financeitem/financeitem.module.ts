import { Module } from '@nestjs/common';
import { FinanceitemService } from './financeitem.service';
import { FinanceitemController } from './financeitem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinanceitemEntity } from './entities/financeitem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinanceitemEntity])],
  controllers: [FinanceitemController],
  providers: [FinanceitemService],
})
export class FinanceitemModule {}

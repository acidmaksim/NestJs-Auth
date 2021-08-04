import { Module } from '@nestjs/common';
import { FinanceitemService } from './financeitem.service';
import { FinanceitemController } from './financeitem.controller';

@Module({
  controllers: [FinanceitemController],
  providers: [FinanceitemService]
})
export class FinanceitemModule {}

import { CashboxEntity } from './cashbox.entity';
import { Module } from '@nestjs/common';

import { CashboxesController } from './cashbox.controller';
import { CashboxService } from './cashbox.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CashboxEntity])],
  controllers: [CashboxesController],
  providers: [CashboxService],
})
export class CashboxesModule {}

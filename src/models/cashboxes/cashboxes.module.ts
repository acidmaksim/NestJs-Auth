import { Cashbox } from './cashboxes.entity';
import { Module } from '@nestjs/common';

import { CashboxesController } from './cashboxes.controller';
import { CashboxesService } from './cashboxes.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cashbox])],
  controllers: [CashboxesController],
  providers: [CashboxesService],
})
export class CashboxesModule {}

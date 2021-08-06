import { Module } from '@nestjs/common';
import { CashboxesController } from './cashbox.controller';
import { CashboxService } from './cashbox.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashboxEntity } from './entities/cashbox.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CashboxEntity])],
  controllers: [CashboxesController],
  providers: [CashboxService],
})
export class CashboxesModule {}

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UpsellingEntity } from './entities/upselling.entity';
import { UpsellingController } from './upselling.controller';

import { UpsellingService } from './upselling.service';

@Module({
  imports: [TypeOrmModule.forFeature([UpsellingEntity])],
  controllers: [UpsellingController],
  providers: [UpsellingService],
  exports: [UpsellingService],
})
export class UpsellingModule {}

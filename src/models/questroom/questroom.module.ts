import { Module } from '@nestjs/common';
import { QuestroomService } from './questroom.service';
import { QuestroomController } from './questroom.controller';

@Module({
  controllers: [QuestroomController],
  providers: [QuestroomService]
})
export class QuestroomModule {}

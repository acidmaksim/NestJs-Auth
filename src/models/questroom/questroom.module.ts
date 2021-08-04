import { Module } from '@nestjs/common';
import { QuestroomService } from './questroom.service';
import { QuestroomController } from './questroom.controller';
import { QuestroomEntity } from './entities/questroom.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuestroomEntity])],
  controllers: [QuestroomController],
  providers: [QuestroomService],
})
export class QuestroomModule {}

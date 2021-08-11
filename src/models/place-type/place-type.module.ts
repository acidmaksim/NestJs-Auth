import { Module } from '@nestjs/common';
import { PlaceTypeService } from './place-type.service';
import { PlaceTypeController } from './place-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceTypeEntity } from './entities/place-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceTypeEntity])],
  controllers: [PlaceTypeController],
  providers: [PlaceTypeService],
})
export class PlaceTypeModule {}

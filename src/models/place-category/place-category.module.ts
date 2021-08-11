import { Module } from '@nestjs/common';
import { PlaceCategoryService } from './place-category.service';
import { PlaceCategoryController } from './place-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceCategoryEntity } from './entities/place-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceCategoryEntity])],
  controllers: [PlaceCategoryController],
  providers: [PlaceCategoryService],
})
export class PlaceCategoryModule {}

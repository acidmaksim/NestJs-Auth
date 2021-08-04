import { Module } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { WidgetController } from './widget.controller';
import { WidgetEntity } from './entities/widget.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WidgetEntity])],
  controllers: [WidgetController],
  providers: [WidgetService],
})
export class WidgetModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { WidgetEntity } from './entities/widget.entity';

@Injectable()
export class WidgetService {
  constructor(
    @InjectRepository(WidgetEntity)
    private widgetRepositroy: Repository<WidgetEntity>,
  ) {}

  create(widgetCreateDto: CreateWidgetDto): Promise<WidgetEntity> {
    const widget = new WidgetEntity();

    return this.widgetRepositroy.save({ ...widget, ...widgetCreateDto });
  }

  findAll(query): Promise<WidgetEntity[]> {
    return this.widgetRepositroy.find(query);
  }

  async findOne(widgetId: string): Promise<WidgetEntity> {
    const widget = await this.widgetRepositroy.findOne(widgetId, {
      withDeleted: true,
    });

    if (!widget) {
      throw new NotFoundException();
    }
    return widget;
  }

  async updateWidget(
    widgetId: string,
    widgetUpdateDto: UpdateWidgetDto,
  ): Promise<WidgetEntity> {
    const widget = await this.findOne(widgetId);

    return this.widgetRepositroy.save({ ...widget, ...widgetUpdateDto });
  }

  async delete(widgetId: string): Promise<WidgetEntity> {
    const widget = await this.findOne(widgetId);
    return this.widgetRepositroy.softRemove(widget);
  }

  async recover(widgetId: string): Promise<WidgetEntity> {
    const widget = await this.findOne(widgetId);
    return this.widgetRepositroy.recover(widget);
  }
}

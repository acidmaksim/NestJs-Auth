import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { WidgetService } from './widget.service';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('widgets')
export class WidgetController {
  constructor(private readonly widgetsService: WidgetService) {}

  @Post()
  create(@BodyWithProfile() widgetData: CreateWidgetDto) {
    return this.widgetsService.create(widgetData);
  }

  @Patch(':id')
  update(@Param('id') widgetId: string, @Body() widgetData: UpdateWidgetDto) {
    return this.widgetsService.updateWidget(widgetId, widgetData);
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const widgets = await this.widgetsService.findAll(query);

    return widgets;
  }

  @Get(':id')
  findOne(@Param('id') widgetId: string) {
    return this.widgetsService.findOne(widgetId);
  }

  @Delete(':id')
  remove(@Param('id') widgetId: string) {
    return this.widgetsService.delete(widgetId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') widgetId: string) {
    return this.widgetsService.recover(widgetId);
  }
}

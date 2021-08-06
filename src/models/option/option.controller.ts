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
import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('options')
export class OptionController {
  constructor(private readonly optionsService: OptionService) {}

  @Post()
  create(@BodyWithProfile() optionCreateDto: CreateOptionDto) {
    return this.optionsService.create(optionCreateDto);
  }

  @Patch(':id')
  update(
    @Param('id') optionId: string,
    @Body() optionCreateDto: UpdateOptionDto,
  ) {
    return this.optionsService.updateOption(optionId, optionCreateDto);
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const options = await this.optionsService.findAll(query);
    return options;
  }

  @Get(':id')
  getOne(@Param('id') optionId: string) {
    return this.optionsService.findOne(optionId);
  }

  @Delete(':id')
  delete(@Param('id') optionId: string) {
    return this.optionsService.delete(optionId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') optionId: string) {
    return this.optionsService.recover(optionId);
  }
}

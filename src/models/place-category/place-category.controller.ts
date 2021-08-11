import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PlaceCategoryService } from './place-category.service';
import { CreatePlaceCategoryDto } from './dto/create-place-category.dto';
import { UpdatePlaceCategoryDto } from './dto/update-place-category.dto';

@Controller('place-category')
export class PlaceCategoryController {
  constructor(private readonly placeCategorysService: PlaceCategoryService) {}

  @Post()
  create(@Body() createPlaceCategoryDto: CreatePlaceCategoryDto) {
    return this.placeCategorysService.create(createPlaceCategoryDto);
  }

  @Get()
  async getAll(@Query() query) {
    const placesCategory = await this.placeCategorysService.findAll(query);
    return placesCategory;
  }

  @Get(':id')
  getOne(@Param('id') placeCategoryId: string) {
    return this.placeCategorysService.findOne(placeCategoryId);
  }

  @Patch(':id')
  update(
    @Param('id') placeCategoryId: string,
    @Body() updatePlaceCategoryDto: UpdatePlaceCategoryDto,
  ) {
    return this.placeCategorysService.updatePlaceCategory(
      placeCategoryId,
      updatePlaceCategoryDto,
    );
  }

  @Delete(':id')
  delete(@Param('id') placeCategoryId: string) {
    return this.placeCategorysService.delete(placeCategoryId);
  }

  @Patch(':id')
  recover(@Param('id') placeCategoryId: string) {
    return this.placeCategorysService.recover(placeCategoryId);
  }
}

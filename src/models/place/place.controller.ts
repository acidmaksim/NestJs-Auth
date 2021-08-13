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
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('place')
export class PlaceController {
  constructor(private readonly placesService: PlaceService) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    console.log('createPlaceDto', createPlaceDto);
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  async getAll(@Query() query) {
    const places = await this.placesService.findAll(query);
    return places;
  }

  @Get(':id')
  findOne(@Param('id') placeId: string) {
    return this.placesService.findOne(placeId);
  }

  @Patch(':id')
  update(@Param('id') placeId: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.updatePlace(placeId, updatePlaceDto);
  }

  @Delete(':id')
  delete(@Param('id') placeId: string) {
    return this.placesService.delete(placeId);
  }

  @Patch(':id')
  recover(@Param('id') placeId: string) {
    return this.placesService.recover(placeId);
  }
}

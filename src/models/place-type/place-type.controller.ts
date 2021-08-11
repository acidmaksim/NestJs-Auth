import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { PlaceTypeService } from './place-type.service';
import { CreatePlaceTypeDto } from './dto/create-place-type.dto';
import { UpdatePlaceTypeDto } from './dto/update-place-type.dto';
import { AuthGuard } from '../user/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('place-types')
export class PlaceTypeController {
  constructor(private readonly placeTypesService: PlaceTypeService) {}

  @Post()
  create(@Body() createPlaceTypeDto: CreatePlaceTypeDto) {
    return this.placeTypesService.create(createPlaceTypeDto);
  }

  @Get()
  async getAll(@Query() query) {
    const placesType = await this.placeTypesService.findAll(query);
    return placesType;
  }

  @Get(':id')
  getOne(@Param('id') placeTypeId: string) {
    return this.placeTypesService.findOne(placeTypeId);
  }

  @Patch(':id')
  update(
    @Param('id') placeTypeId: string,
    @Body() updatePlaceTypeDto: UpdatePlaceTypeDto,
  ) {
    return this.placeTypesService.updatePlaceType(
      placeTypeId,
      updatePlaceTypeDto,
    );
  }

  @Delete(':id')
  delete(@Param('id') placeTypeId: string) {
    return this.placeTypesService.delete(placeTypeId);
  }

  @Patch(':id')
  remove(@Param('id') placeTypeId: string) {
    return this.placeTypesService.recover(placeTypeId);
  }
}

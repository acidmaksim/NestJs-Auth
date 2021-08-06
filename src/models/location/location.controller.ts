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
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('locations')
export class LocationController {
  constructor(private readonly locationsService: LocationService) {}

  @Post()
  create(@BodyWithProfile() locationData: CreateLocationDto) {
    return this.locationsService.create(locationData);
  }

  @Patch(':id')
  update(
    @Body() locationData: UpdateLocationDto,
    @Param('id') locationId: string,
  ) {
    return this.locationsService.updateLocation(locationId, locationData);
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const location = await this.locationsService.findAll(query);
    return location;
  }

  @Get(':id')
  getOne(@Param('id') locationId: string) {
    return this.locationsService.findOne(locationId);
  }

  @Delete(':id')
  delete(@Param('id') locationId: string) {
    return this.locationsService.delete(locationId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') locationId: string) {
    return this.locationsService.recover(locationId);
  }
}

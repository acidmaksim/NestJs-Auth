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
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';
import { UpsellingService } from './upselling.service';
import { CreateUpsellingDto } from './dto/create-upselling.dto';
import { UpdateUpsellingDto } from './dto/update-upselling.dto';

@UseGuards(AuthGuard)
@Controller('upsellings')
export class UpsellingController {
  constructor(private readonly upsellingsService: UpsellingService) {}

  @Post()
  create(@BodyWithProfile() upsellingCreateDto: CreateUpsellingDto) {
    return this.upsellingsService.create(upsellingCreateDto);
  }

  @Patch(':id')
  update(
    @Param('id') upsellingId: string,
    @Body() upsellingCreateDto: UpdateUpsellingDto,
  ) {
    return this.upsellingsService.updateUpselling(
      upsellingId,
      upsellingCreateDto,
    );
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const upsellings = await this.upsellingsService.findAll(query);
    return upsellings;
  }

  @Get(':id')
  getOne(@Param('id') upsellingId: string) {
    return this.upsellingsService.findOne(upsellingId);
  }

  @Delete(':id')
  delete(@Param('id') upsellingId: string) {
    return this.upsellingsService.delete(upsellingId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') upsellingId: string) {
    return this.upsellingsService.recover(upsellingId);
  }
}

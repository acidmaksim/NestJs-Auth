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
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewsService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  async getAll(@Query() query) {
    const reviews = await this.reviewsService.findAll(query);
    return reviews;
  }

  @Get(':id')
  getOne(@Param('id') reviewId: string) {
    return this.reviewsService.findOne(reviewId);
  }

  @Patch(':id')
  update(
    @Param('id') reviewId: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewsService.updateReview(reviewId, updateReviewDto);
  }

  @Delete(':id')
  delete(@Param('id') reviewId: string) {
    return this.reviewsService.delete(reviewId);
  }

  @Patch(':id')
  recover(@Param('id') reviewId: string) {
    return this.reviewsService.recover(reviewId);
  }
}

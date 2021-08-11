import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewEntity } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private reviewRepository: Repository<ReviewEntity>,
  ) {}
  create(createReviewDto: CreateReviewDto): Promise<ReviewEntity> {
    const review = new ReviewEntity();
    return this.reviewRepository.save({
      ...review,
      ...createReviewDto,
    });
  }

  findAll(query): Promise<ReviewEntity[]> {
    return this.reviewRepository.find(query);
  }

  async findOne(reviewId: string): Promise<ReviewEntity> {
    const review = await this.reviewRepository.findOne(reviewId, {
      withDeleted: true,
    });

    if (!review) {
      throw new NotFoundException();
    }

    return review;
  }

  async updateReview(
    reviewId: string,
    updateReviewDto: UpdateReviewDto,
  ): Promise<ReviewEntity> {
    const review = await this.findOne(reviewId);

    return this.reviewRepository.save({ ...review, ...updateReviewDto });
  }

  async delete(reviewId: string): Promise<ReviewEntity> {
    const review = await this.findOne(reviewId);
    return this.reviewRepository.softRemove(review);
  }

  async recover(reviewId: string): Promise<ReviewEntity> {
    const review = await this.findOne(reviewId);
    return this.reviewRepository.recover(review);
  }
}

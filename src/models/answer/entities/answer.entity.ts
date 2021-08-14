import { ReviewEntity } from '@src/models/review/entities/review.entity';
import { BaseModel } from 'config/models';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class AnswerEntity extends BaseModel {
  @Column()
  text: string;

  @Column({ nullable: true })
  reviewId: string;

  @OneToOne(() => ReviewEntity, (review) => review.answer)
  @JoinColumn({ name: 'reviewId' })
  review: ReviewEntity;

  // @OneToOne()
  // @JoinColumn()
  // partner:
}

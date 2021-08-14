import { IsNotBlank } from '@src/extensions/is-not-blank';

export class CreateAnswerDto {
  @IsNotBlank()
  text: string;

  @IsNotBlank()
  reviewId: string;
  // @OneToOne()
  // @JoinColumn()
  // review:

  // @OneToOne()
  // @JoinColumn()
  // partner:
}

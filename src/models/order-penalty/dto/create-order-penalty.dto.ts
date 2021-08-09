import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderPenaltyDto {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  sum: number;

  @IsNotEmpty()
  orderId: string;

  @IsNotEmpty()
  profileId: string;
}

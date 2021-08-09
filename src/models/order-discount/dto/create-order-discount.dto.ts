import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDiscountDto {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  sum: number;

  @IsNotEmpty()
  orderId: string;

  @IsNotEmpty()
  profileId: string;
}

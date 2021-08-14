import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateReviewDto {
  @IsNotBlank()
  clientId: string;

  @IsNotBlank()
  placeId: string;

  @IsNotBlank()
  partnerId: string;

  @IsNotBlank()
  clientFullName: string;

  @IsNotBlank()
  clientRank: string;

  // place* Place

  @IsNotBlank()
  text: string;

  @IsNotBlank()
  discountProvided: boolean;

  @IsBoolean()
  @IsOptional()
  blackPearl: boolean;

  @IsBoolean()
  @IsOptional()
  whitePearl: boolean;

  @IsInt()
  @IsOptional()
  impression: number;

  @IsInt()
  service: number;

  @IsInt()
  clean: number;

  @IsInt()
  atmosphere: number;

  @IsInt()
  priceByService: number;
}

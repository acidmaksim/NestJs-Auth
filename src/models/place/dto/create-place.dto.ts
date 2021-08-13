import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePlaceDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  partnerId: string;

  // type* Type
  // category* Category

  @IsNotBlank()
  address: string;

  @IsNotBlank()
  phone: string;

  @IsOptional()
  @IsString()
  site: string;

  @IsNotBlank()
  howToFind: string;

  // reviews Review[]

  @IsInt()
  @IsOptional()
  rating: number;

  @IsInt()
  @IsOptional()
  blackPearls: number;

  @IsInt()
  @IsOptional()
  whitePearls: number;

  @IsInt()
  @IsOptional()
  tmpPearls: number;

  @IsInt()
  impression: number;

  @IsInt()
  service: number;

  @IsInt()
  clean: number;

  @IsInt()
  atmosphere: number;

  @IsInt()
  @IsOptional()
  trustIndex: number;

  @IsNotBlank()
  description: string;

  @IsNotBlank()
  photo: string;

  @IsArray()
  @IsOptional()
  photos: string[];

  @IsString()
  @IsOptional()
  video: string;

  // @Column()
  // coordinates: [lat, lng]

  @IsInt()
  maxDiscount: number;

  @IsNotBlank()
  discountRules: string;
}

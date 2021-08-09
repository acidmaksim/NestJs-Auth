import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsObject, IsOptional, IsString } from 'class-validator';

export class CreateTariffDto {
  @IsNotBlank()
  title: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsObject()
  price: { [x: string]: string };

  @IsNotBlank()
  profileId: string;
}

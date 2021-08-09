import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsObject } from 'class-validator';

export class CreateTariffDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  color: string;

  @IsObject()
  price: { [x: string]: string };

  @IsNotBlank()
  profileId: string;
}

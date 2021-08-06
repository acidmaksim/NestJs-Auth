import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsJSON, IsString } from 'class-validator';

export class CreateTariffDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  color: string;

  @IsJSON()
  price: string;

  @IsNotBlank()
  profileId: string;
}

import { IsJSON, IsString } from 'class-validator';

export class CreateTariffDto {
  @IsString()
  title: string;

  @IsString()
  color: string;

  @IsJSON()
  price: string;

  @IsString()
  profileId: string;
}

import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreateTariffDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  color: string;

  @IsJSON()
  price: string;

  profileId: string;
}

import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsOptional, IsString } from 'class-validator';

export class CreatePartnerDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  phone: string;

  @IsNotBlank()
  managerName: string;

  // email: Type

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  comment: string;

  // places* Place[]
}

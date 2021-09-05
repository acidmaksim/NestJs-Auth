import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsOptional, IsString } from 'class-validator';

export class CreatePartnerDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  email: string;

  @IsNotBlank()
  password: string;

  // @IsNotBlank()
  // phone: string;

  // @IsNotBlank()
  // managerName: string;

  // @IsString()
  // @IsOptional()
  // address: string;

  // @IsString()
  // @IsOptional()
  // comment: string;
}

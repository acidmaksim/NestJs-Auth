import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsOptional, IsString } from 'class-validator';

export class CreatePartnerDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  profileId: string;

  @IsString()
  @IsOptional()
  contact: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  comment: string;
}

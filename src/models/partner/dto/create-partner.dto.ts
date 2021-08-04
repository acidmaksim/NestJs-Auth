import { IsOptional, IsString } from 'class-validator';

export class CreatePartnerDto {
  @IsString()
  title: string;

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

  @IsString()
  profileId: string;
}

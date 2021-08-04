import { IsDefined, IsIn, IsOptional, IsString } from 'class-validator';

// IsString или IsNotEmpty //!!
export class CreateFinanceitemDto {
  @IsString()
  title: string;

  @IsIn(['income', 'expence'])
  type: string;

  @IsOptional()
  @IsString()
  comment: string;

  @IsString()
  profileId: string;
}

import { IsDefined, IsIn, IsOptional, IsString } from 'class-validator';
import { FinanceitemTypeEnum } from '../types/financeitem-type.enum';

// IsString или IsNotEmpty //!!
export class CreateFinanceitemDto {
  @IsString()
  title: string;

  @IsIn(['income', 'expence'])
  type: FinanceitemTypeEnum;

  @IsOptional()
  @IsString()
  comment: string;

  @IsString()
  profileId: string;
}

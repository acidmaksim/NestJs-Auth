import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { FinanceitemTypeEnum } from '../types/financeitem-type.enum';

// IsString или IsNotEmpty //!!
export class CreateFinanceitemDto {
  @IsNotBlank()
  title: string;

  @IsIn(['income', 'expence'])
  type: FinanceitemTypeEnum;

  @IsOptional()
  @IsString()
  comment: string;

  @IsNotBlank()
  profileId: string;
}

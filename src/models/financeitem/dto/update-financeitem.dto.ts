import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateFinanceitemDto } from './create-financeitem.dto';

export class UpdateFinanceitemDto extends PartialType(
  OmitType(CreateFinanceitemDto, ['profileId'] as const),
) {}

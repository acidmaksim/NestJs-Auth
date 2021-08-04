import { CreateCashboxDto } from './create-cashbox.dto';
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class UpdateCashboxDto extends PartialType(
  OmitType(CreateCashboxDto, ['profileId'] as const),
) {}

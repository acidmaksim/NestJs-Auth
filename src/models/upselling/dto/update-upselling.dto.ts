import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUpsellingDto } from './create-upselling.dto';

export class UpdateUpsellingDto extends PartialType(
  OmitType(CreateUpsellingDto, ['profileId'] as const),
) {}

import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateOptionDto } from './create-option.dto';

export class UpdateOptionDto extends PartialType(
  OmitType(CreateOptionDto, ['profileId'] as const),
) {}

import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateQuestroomDto } from './create-questroom.dto';

export class UpdateQuestroomDto extends PartialType(
  OmitType(CreateQuestroomDto, ['profileId'] as const),
) {}

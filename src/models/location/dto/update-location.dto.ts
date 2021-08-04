import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(
  OmitType(CreateLocationDto, ['profileId', 'address'] as const),
) {}

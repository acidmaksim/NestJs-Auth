import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(
  OmitType(CreateRoleDto, ['profileId'] as const),
) {}

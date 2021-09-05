import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrentUserDto } from './create-current-user.dto';

export class UpdateCurrentUserDto extends PartialType(CreateCurrentUserDto) {}

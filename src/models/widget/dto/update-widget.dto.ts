import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateWidgetDto } from './create-widget.dto';

export class UpdateWidgetDto extends PartialType(
  OmitType(CreateWidgetDto, ['profileId'] as const),
) {}

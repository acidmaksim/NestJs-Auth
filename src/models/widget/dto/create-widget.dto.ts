import { IsNotBlank } from '@src/extensions/is-not-blank';
import {
  IsArray,
  IsDefined,
  IsIn,
  IsJSON,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';
import { WidgetTypeEnum } from '../types/widget-type.enum';

export class CreateWidgetDto {
  @IsIn(['oneQuestroom', 'allQuestrooms', 'widgetButton', 'allCertificates'])
  type: WidgetTypeEnum;

  @IsNotBlank()
  color: string;

  @IsString()
  @ValidateIf((o) => o.type === 'oneQuestroom')
  questroomId: string;

  @IsArray()
  @IsOptional()
  questroomIds: string[];

  @IsArray()
  @IsOptional()
  certificateIds: string[];

  @IsNotBlank()
  profileId: string;
}

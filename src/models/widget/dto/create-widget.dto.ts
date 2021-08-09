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
  @ValidateIf((o) => o.type === 'allQuestrooms' || o.type === 'widgetButton')
  @IsOptional()
  questroomIds: string[];

  @IsArray()
  @ValidateIf((o) => o.type === 'widgetButton' || o.type === 'allCertificates')
  @IsOptional()
  certificateIds: string[];

  @IsNotBlank()
  profileId: string;
}

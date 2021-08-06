import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsArray, IsDefined, IsIn, IsJSON } from 'class-validator';

export class CreateWidgetDto {
  @IsArray()
  @IsIn(['oneQuestroom', 'allQuestrooms', 'widgetButton', 'allCertificates'])
  type: string[];

  @IsNotBlank()
  color: string;

  @IsDefined()
  questroomId: string;

  @IsJSON()
  questroomIds: string[];

  @IsJSON()
  certificateIds: string[];

  @IsNotBlank()
  profileId: string;
}

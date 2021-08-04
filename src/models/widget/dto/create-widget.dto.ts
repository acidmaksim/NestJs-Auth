import { IsArray, IsDefined, IsIn, IsJSON, IsString } from 'class-validator';

export class CreateWidgetDto {
  @IsArray()
  @IsIn(['oneQuestroom', 'allQuestrooms', 'widgetButton', 'allCertificates'])
  type: string[];

  @IsString()
  color: string;

  @IsDefined()
  questroomId: string;

  @IsJSON()
  questroomIds: string[];

  @IsJSON()
  certificateIds: string[];

  @IsString()
  profileId: string;
}

import { IsArray, IsDefined, IsIn, IsJSON, IsNotEmpty } from 'class-validator';

export class CreateWidgetDto {
  @IsArray()
  @IsIn(['oneQuestroom', 'allQuestrooms', 'widgetButton', 'allCertificates'])
  type: string[];

  @IsNotEmpty()
  color: string;

  @IsDefined()
  questroomId: string;

  @IsJSON()
  questroomIds: string[];

  @IsJSON()
  certificateIds: string[];

  profileId: string;
}

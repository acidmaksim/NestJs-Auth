import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsBoolean, IsInt, IsJSON, IsOptional } from 'class-validator';

export class CreateUpsellingDto {
  @IsNotBlank()
  title: string;

  @IsInt()
  price: number;

  @IsOptional()
  description: string;

  @IsBoolean()
  allQuestrooms: boolean;

  @IsJSON()
  questroomsIds?: string[];

  @IsNotBlank()
  profileId: string;
}

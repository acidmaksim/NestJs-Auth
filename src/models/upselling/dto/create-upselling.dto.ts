import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsBoolean, IsInt, IsJSON, IsOptional } from 'class-validator';

export class CreateUpsellingDto {
  @IsNotBlank()
  title: string;

  @IsInt()
  price: number;

  @IsOptional()
  description: string;

  @IsOptional()
  @IsBoolean()
  allQuestrooms: boolean;

  @IsOptional()
  @IsJSON()
  questroomsIds?: string[];

  @IsNotBlank()
  profileId: string;
}

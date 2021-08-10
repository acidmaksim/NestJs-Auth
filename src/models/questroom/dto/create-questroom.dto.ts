import { Languages } from '@src/enum/languages.enum';
import { IsNotBlank } from '@src/extensions/is-not-blank';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateQuestroomDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  video: string;

  @IsNotBlank()
  photo: string;

  @IsNotBlank()
  legend: string;

  @IsNotBlank()
  importantInformation: string;

  @IsNotBlank()
  defaultLanguage: string;

  @IsNotBlank()
  locationId: string;

  @IsNotBlank()
  profileId: string;

  @IsArray()
  @IsOptional()
  photos: string[];

  @IsInt()
  @IsOptional()
  time: number;

  @IsInt()
  @IsOptional()
  break: number;

  @IsString()
  @IsOptional()
  type: string;

  @IsInt()
  @IsOptional()
  minAge: number;

  @IsInt()
  @IsOptional()
  difficult: number;

  @IsInt()
  @IsOptional()
  fear: number;

  @IsString()
  @IsOptional()
  teaser: string;

  @IsInt()
  @IsOptional()
  actors: number;

  @IsInt()
  @IsOptional()
  neededModerators: number;

  @IsInt()
  @IsOptional()
  schedulePeriod: number;

  @IsIn(['en', 'de', 'ru'])
  @IsOptional()
  languages: Languages;

  @IsBoolean()
  @IsOptional()
  awailableForNavigator: boolean;

  @IsBoolean()
  @IsOptional()
  awailableForWidgets: boolean;

  @IsInt()
  @IsOptional()
  minDaysForFreeCanceling: number;

  @IsArray()
  @IsOptional()
  questroomIds: string[];

  @IsString()
  @IsOptional()
  walletId: string;

  @IsInt()
  @IsOptional()
  sortPosition: number;

  // @IsBoolean()
  // @IsOptional()
  // ticketSystem: boolean;

  @IsString()
  @IsOptional()
  company: string;

  // @IsJSON()
  @IsArray()
  @IsOptional()
  tags: string[];

  @IsInt()
  @IsOptional()
  playersMin: number;

  @IsInt()
  @IsOptional()
  playersMax: number;
}

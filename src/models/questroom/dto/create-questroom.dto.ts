import {
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateQuestroomDto {
  @IsString()
  title: string;

  @IsString()
  video: string;

  @IsString()
  photo: string;

  @IsString()
  legend: string;

  @IsString()
  importantInformation: string;

  @IsString()
  defaultLanguage: string;

  @IsString()
  locationId: string;

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
  languages: string;

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

  @IsBoolean()
  @IsOptional()
  ticketSystem: boolean;

  @IsString()
  profileId: string;
}

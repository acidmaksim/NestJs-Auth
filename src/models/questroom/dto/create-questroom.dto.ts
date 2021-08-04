import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsIn,
  IsInt,
  IsNotEmpty,
} from 'class-validator';

export class CreateQuestroomDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  video: string;

  @IsNotEmpty()
  photo: string;

  @IsArray()
  photos: string[];

  @IsInt()
  time: number;

  @IsInt()
  break: number;

  @IsDefined()
  type: string;

  @IsInt()
  minAge: number;

  @IsInt()
  difficult: number;

  @IsInt()
  fear: number;

  @IsDefined()
  teaser: string;

  @IsNotEmpty()
  legend: string;

  @IsNotEmpty()
  importantInformation: string;

  @IsInt()
  actors: number;

  @IsInt()
  neededModerators: number;

  @IsInt()
  schedulePeriod: number;

  @IsIn(['en', 'de', 'ru'])
  languages: string;

  @IsNotEmpty()
  defaultLanguage: string;

  @IsBoolean()
  awailableForNavigator: boolean;

  @IsBoolean()
  awailableForWidgets: boolean;

  @IsInt()
  minDaysForFreeCanceling: number;

  @IsArray()
  questroomIds: string[];

  @IsDefined()
  walletId: string;

  @IsNotEmpty()
  locationId: string;

  @IsInt()
  sortPosition: number;

  @IsBoolean()
  ticketSystem: boolean;

  profileId: string;
}

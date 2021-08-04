import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsInt,
  IsJSON,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOptionDto {
  @IsString()
  title: string;

  @IsInt()
  price: number;

  @IsOptional()
  description: string;

  @IsBoolean()
  allQuestrooms: boolean;

  @IsJSON()
  questroomsIds?: string[];

  @IsString()
  profileId: string;
}

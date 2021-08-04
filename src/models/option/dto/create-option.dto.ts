import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsInt,
  IsJSON,
  IsNotEmpty,
} from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @IsDefined()
  description: string;

  @IsBoolean()
  allQuestrooms: boolean;

  @IsJSON()
  questroomsIds?: string[];
}

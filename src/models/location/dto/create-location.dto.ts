import {
  IsBoolean,
  IsDefined,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLocationDto {
  @IsString()
  title: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  @IsString()
  disinfection: string;

  @IsOptional()
  @IsString()
  howToFind: string;

  @IsOptional()
  @IsBoolean()
  wifi: boolean;

  @IsOptional()
  @IsBoolean()
  wardrobe: boolean;

  @IsBoolean()
  freeParking: boolean;

  @IsBoolean()
  parking: boolean;

  @IsBoolean()
  ventilation: boolean;

  @IsBoolean()
  waitingAreaSize: number;

  @IsInt()
  neededEmployees: number;

  @IsInt()
  sortPosition: number;

  profileId: string;
}

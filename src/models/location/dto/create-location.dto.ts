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
  @IsOptional()
  freeParking: boolean;

  @IsBoolean()
  @IsOptional()
  parking: boolean;

  @IsBoolean()
  @IsOptional()
  ventilation: boolean;

  @IsBoolean()
  @IsOptional()
  waitingAreaSize: number;

  @IsInt()
  @IsOptional()
  neededEmployees: number;

  @IsInt()
  @IsOptional()
  sortPosition: number;

  @IsString()
  profileId: string;
}

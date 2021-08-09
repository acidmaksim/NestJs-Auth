import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  address: string;

  @IsNotBlank()
  phone: string;

  @IsNotBlank()
  disinfection: string;

  @IsString()
  @IsOptional()
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

  @IsInt()
  @IsOptional()
  waitingAreaSize: number;

  @IsInt()
  @IsOptional()
  neededEmployees: number;

  @IsInt()
  @IsOptional()
  sortPosition: number;

  @IsNotBlank()
  profileId: string;
}

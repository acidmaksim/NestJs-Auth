import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCertificateDto {
  @IsString()
  photo: string;

  @IsString()
  title: string;

  @IsInt()
  validity: number;

  @IsString()
  downloadLink: string;

  @IsInt()
  nominal: number;

  @IsArray()
  @IsOptional()
  photos: string[];

  @IsBoolean()
  @IsOptional()
  emailPossibility: boolean;

  @IsBoolean()
  @IsOptional()
  deliveryPossibility: boolean;

  @IsBoolean()
  @IsOptional()
  pickupPossibility: boolean;

  @IsInt()
  @IsOptional()
  deliveryPrice: number;

  @IsInt()
  @IsOptional()
  extraPrice: number;

  @IsInt()
  @IsOptional()
  information: string;

  @IsBoolean()
  @IsOptional()
  awailableForNavigator: boolean;

  @IsBoolean()
  @IsOptional()
  awailableForWidgets: boolean;

  @IsString()
  @IsOptional()
  walletId: string;

  @IsBoolean()
  @IsOptional()
  allQuestrooms: boolean;

  @IsArray()
  @IsOptional()
  questroomsIds: string[];

  @IsString()
  profileId: string;
}

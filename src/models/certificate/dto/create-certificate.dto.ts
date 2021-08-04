import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsInt,
  IsNotEmpty,
} from 'class-validator';

export class CreateCertificateDto {
  @IsNotEmpty()
  photo: string;

  @IsArray()
  photos: string[];

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  validity: number;

  @IsNotEmpty()
  downloadLink: string;

  @IsNotEmpty()
  @IsInt()
  nominal: number;

  @IsBoolean()
  emailPossibility: boolean;

  @IsBoolean()
  deliveryPossibility: boolean;

  @IsBoolean()
  pickupPossibility: boolean;

  @IsInt()
  deliveryPrice: number;

  @IsInt()
  extraPrice: number;

  @IsInt()
  information: string;

  @IsBoolean()
  awailableForNavigator: boolean;

  @IsBoolean()
  awailableForWidgets: boolean;

  @IsDefined()
  walletId: string;

  @IsBoolean()
  allQuestrooms: boolean;

  @IsArray()
  questroomsIds: string[];

  profileId: string;
}

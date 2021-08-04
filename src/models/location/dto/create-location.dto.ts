import { IsBoolean, IsDefined, IsInt, IsNotEmpty } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  howToFind: string;

  @IsDefined()
  disinfection: string;

  @IsBoolean()
  wifi: boolean;

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

import { IsNumber, IsString } from 'class-validator';

export class CreateCashboxDto {
  @IsString()
  title: string;

  @IsNumber()
  profileId: number;
}

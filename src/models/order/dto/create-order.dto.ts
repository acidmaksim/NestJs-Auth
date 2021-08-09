import { IsNumber, IsObject } from 'class-validator';
import { IsNotBlank } from '@src/extensions/is-not-blank';

export class CreateOrderDto {
  @IsNotBlank()
  title: string;

  @IsNumber()
  players: number;

  @IsObject()
  tariff: { [x: string]: string };

  @IsNotBlank()
  profileId: string;
}

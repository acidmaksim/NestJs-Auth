import { IsIn, IsString } from 'class-validator';
import { CashboxTypeEnum } from '../types/cashbox-type.enum';

export class CreateCashboxDto {
  @IsString()
  title: string;

  @IsIn(['cash', 'bank', 'paypal', 'yandex', 'tinkoff'])
  type: CashboxTypeEnum;

  @IsString()
  identificator: string;

  @IsString()
  profileId: string;
}

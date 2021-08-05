import { IsIn, IsString, ValidateIf, IsNotEmpty } from 'class-validator';
import { CashboxTypeEnum } from '../types/cashbox-type.enum';

export class CreateCashboxDto {
  @IsString()
  title: string;

  @IsIn(['cash', 'bank', 'paypal', 'yandex', 'tinkoff'])
  type: CashboxTypeEnum;

  @ValidateIf(
    (o) => o.type === 'paypal' || o.type === 'yandex' || o.type === 'tinkoff',
  )
  @IsNotEmpty()
  identificator: string;

  @IsNotEmpty()
  profileId: string;
}
import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsIn, ValidateIf } from 'class-validator';
import { CashboxTypeEnum } from '../types/cashbox-type.enum';

export class CreateCashboxDto {
  @IsNotBlank()
  title: string;

  @IsIn(['cash', 'bank', 'paypal', 'yandex', 'tinkoff'])
  type: CashboxTypeEnum;

  @ValidateIf(
    (o) => o.type === 'paypal' || o.type === 'yandex' || o.type === 'tinkoff',
  )
  @IsNotBlank()
  identificator: string;

  @IsNotBlank()
  profileId: string;
}

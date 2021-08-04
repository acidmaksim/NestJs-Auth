import { OrganizationModel } from 'config/models';
import { Entity, Column } from 'typeorm';
import { CashboxTypeEnum } from './types/cashbox-type.enum';

@Entity()
export class CashboxEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: CashboxTypeEnum,
    default: CashboxTypeEnum.CASH,
  })
  type: CashboxTypeEnum;

  @Column()
  identificator: string;
}

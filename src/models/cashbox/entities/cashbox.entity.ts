import { OrganizationModel } from 'config/models';
import { Entity, Column } from 'typeorm';
import { CashboxTypeEnum } from '../types/cashbox-type.enum';

@Entity('cashboxes')
export class CashboxEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: CashboxTypeEnum,
  })
  type: CashboxTypeEnum;

  @Column({ default: '' })
  identificator: string;

  // @Column({ default: false })
  // deleted: boolean;
}

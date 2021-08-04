import { FinanceitemType } from '@src/enum/financeitem-type.enum';
import { OrganizationModel } from 'config/models';
import { Column } from 'typeorm';

export class FinanceitemEntities extends OrganizationModel {
  @Column({ default: '' }) //!!
  title: string;

  @Column({
    type: 'enum',
    enum: FinanceitemType,
  })
  type: FinanceitemType;

  @Column({ default: '' })
  comment: string;
}

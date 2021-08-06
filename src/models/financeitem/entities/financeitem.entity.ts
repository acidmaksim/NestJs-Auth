import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';
import { FinanceitemTypeEnum } from '../types/financeitem-type.enum';

@Entity({ name: 'financeitems' })
export class FinanceitemEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: FinanceitemTypeEnum,
  })
  type: FinanceitemTypeEnum;

  @Column({ default: '' })
  comment: string;

  // technicalType: string, isIn['orders', 'certificates', 'salary']
  // deleted: string, required: true
}

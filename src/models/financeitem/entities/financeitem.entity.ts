import { FinanceitemType } from '@src/enum/financeitem-type.enum';
import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity()
export class FinanceitemEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: FinanceitemType,
  })
  type: FinanceitemType;

  @Column({ default: '' })
  comment: string;
}

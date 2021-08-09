import { OrderEntity } from '@src/models/order/entities/order.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { OrganizationModel } from './../../../../config/models';

@Entity({ name: 'order-upsellings' })
export class OrderUpsellingEntity extends OrganizationModel {
  @Column()
  sum: number;

  @Column()
  title: string;

  @Column()
  upsellingId: string;

  @ManyToOne(() => OrderEntity, (order) => order.upsellings)
  order: OrderEntity;
}

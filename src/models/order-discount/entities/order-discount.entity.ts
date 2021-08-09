import { OrderEntity } from '@src/models/order/entities/order.entity';
import { OrganizationModel } from './../../../../config/models';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'order-discoiunts' })
export class OrderDiscountEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column()
  sum: number;

  @ManyToOne(() => OrderEntity, (order) => order.discounts)
  order: OrderEntity;
}

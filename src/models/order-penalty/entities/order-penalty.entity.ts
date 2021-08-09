import { OrderEntity } from '@src/models/order/entities/order.entity';
import { OrganizationModel } from './../../../../config/models';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'order-penalties' })
export class OrderPenaltyEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column()
  sum: number;

  @ManyToOne(() => OrderEntity, (order) => order.penalties)
  order: OrderEntity;
}

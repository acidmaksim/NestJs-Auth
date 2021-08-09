import { OrderPenaltyEntity } from './../../order-penalty/entities/order-penalty.entity';
import { OrderDiscountEntity } from './../../order-discount/entities/order-discount.entity';
import { OrderUpsellingEntity } from '@src/models/order-upselling/entities/order-upselling.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { OrganizationModel } from './../../../../config/models';

@Entity({ name: 'orders' })
export class OrderEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column({ type: 'jsonb' })
  tariff: { [x: string]: string };

  @Column({ default: 0 })
  players: number;

  @Column({ default: 0 })
  price: number;

  @Column({ default: 0 })
  payed: number;

  @Column({ default: 0 })
  toPay: number;

  @OneToMany(() => OrderUpsellingEntity, (upselling) => upselling.order)
  upsellings: OrderUpsellingEntity[];

  @OneToMany(() => OrderDiscountEntity, (discounts) => discounts.order)
  discounts: OrderDiscountEntity[];

  @OneToMany(() => OrderPenaltyEntity, (penalties) => penalties.order)
  penalties: OrderPenaltyEntity[];
}

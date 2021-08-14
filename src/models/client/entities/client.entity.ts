import { OrderEntity } from '@src/models/order/entities/order.entity';
import { BaseModel } from 'config/models';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class ClientEntity extends BaseModel {
  @Column()
  clientId: string;

  //   favorites: Place[]

  //   visited: Place[]

  //   reviews: Review[];

  @OneToMany(() => OrderEntity, (orders) => orders.client)
  @JoinColumn()
  orders: OrderEntity[];
}

import { ClientEntity } from '@src/models/client/entities/client.entity';
import { BaseModel } from 'config/models';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class OrderEntity extends BaseModel {
  @Column({ nullable: true })
  clientId: string;

  @ManyToOne(() => ClientEntity, (client) => client.orders)
  @JoinColumn({ name: 'clientId' })
  client: ClientEntity;
}

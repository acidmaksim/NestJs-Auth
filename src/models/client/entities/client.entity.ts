import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'clients' })
export class ClientEntity extends OrganizationModel {
  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ default: '' })
  photo: string;

  @Column({ default: '' })
  address: string;

  @Column({ default: '' })
  city: string;

  @Column({ default: '' })
  postcode: string;

  //   @Column({ default: '' })
  //   blockedDate?: number;

  @Column({ default: '' })
  aboutClient: string;

  @Column({ default: true })
  sendAds: boolean;

  @Column({ default: 0 })
  trustIndex: number;

  @Column({ default: 0 })
  ordersCount: number;

  @Column({ default: 0 })
  certificatesCount: number;

  @Column({ default: 0 })
  communicationsCount: number;

  //   @Column()
  //   deleted?: boolean;

  //   @Column()
  //   lastOrderCreatedDate?: number;

  //   @Column()
  //   lastOrderDate?: number;
}

import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'partners' })
export class PartnerEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column({ default: '' })
  contact: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  comment: string;
}

import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity()
export class CertificateEntity extends OrganizationModel {
  @Column({ default: '' })
  photo: string;

  @Column('simple-array')
  photos: string[];

  @Column({ default: '' })
  title: string;

  @Column({ default: 0 })
  validity: number;

  @Column({ default: '' })
  downloadLink: string;

  @Column({ default: 0 })
  nominal: number;

  @Column({ default: false })
  emailPossibility: boolean;

  @Column({ default: false })
  deliveryPossibility: boolean;

  @Column({ default: false })
  pickupPossibility: boolean;

  @Column({ default: 0 })
  deliveryPrice: number;

  @Column({ default: 0 })
  extraPrice: number;

  @Column({ default: '' })
  information: string;

  @Column({ default: true })
  awailableForNavigator: boolean;

  @Column({ default: true })
  awailableForWidgets: boolean;

  @Column({ default: '' })
  walletId: string;

  @Column({ default: true })
  allQuestrooms: boolean;

  @Column('simple-array')
  questroomsIds: string[];
}

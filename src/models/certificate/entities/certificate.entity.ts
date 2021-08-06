import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'certificates' })
export class CertificateEntity extends OrganizationModel {
  // мише - подумать точно ли обязательные фото
  @Column()
  title: string;

  @Column()
  validity: number;

  @Column()
  downloadLink: string;

  @Column()
  photo: string;

  @Column()
  nominal: number;

  @Column('simple-array', { default: [] })
  photos: string[];

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

  @Column('simple-array', { default: [] })
  questroomsIds: string[];

  // @Column({ default: false })
  // deleted: boolean;
}

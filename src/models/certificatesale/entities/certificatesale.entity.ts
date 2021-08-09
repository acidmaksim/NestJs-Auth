import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';
import { CertificatesaleSourceEnum } from '../types/certificatesale-source.enum';
import { CertificatesaleDeliveryTypeEnum } from '../types/certificatesales-delivery-type.enum';
import { CertificatesaleStatusEnum } from '../types/certificatessales-status.enum';

@Entity({ name: 'certificatesales' })
export class CertificatesaleEntity extends OrganizationModel {
  @Column({ default: 0 })
  expireDate: number;

  @Column({
    type: 'enum',
    enum: CertificatesaleStatusEnum,
    default: CertificatesaleStatusEnum.NEW,
  })
  status: CertificatesaleStatusEnum;

  @Column({ default: '' })
  annulComment: string;

  @Column({ default: '' })
  clientComment: string;

  @Column({ type: 'json', default: {} })
  photos: string[];

  @Column({ type: 'json', default: {} })
  technicalPhotos: string[];

  @Column({
    type: 'enum',
    enum: CertificatesaleDeliveryTypeEnum,
  })
  deliveryType: CertificatesaleDeliveryTypeEnum;

  @Column({ default: '' })
  deliveryAddress: string;

  @Column({ default: '' })
  deliveryPostcode: string;

  @Column({ default: '' })
  deliveryCity: string;

  @Column({ default: '' })
  deliveryEmail: string;

  @Column({ default: '' })
  deliveryComment: string;

  @Column({ default: '' })
  trackingNumber: string;

  @Column({ default: '' })
  trackingCompany: string;

  @Column()
  clientId: string;
  @Column()
  name: string;
  @Column()
  phone: string;
  @Column()
  email: string;

  @Column()
  nominal: number;
  @Column()
  deliveryPrice: number;
  @Column()
  extraPrice: number;
  @Column()
  totalPrice: number;

  @Column({ default: 0 })
  payed: number;

  @Column()
  toPay: number;

  @Column()
  certificateId: string;
  @Column()
  code: string;

  @Column({
    type: 'enum',
    enum: CertificatesaleSourceEnum,
    default: CertificatesaleSourceEnum.USER,
  })
  source: CertificatesaleSourceEnum;
}

import { IsIn, IsInt, IsJSON, IsOptional, IsString } from 'class-validator';
import { CertificatesaleSourceEnum } from '../types/certificatesale-source.enum';
import { CertificatesaleDeliveryTypeEnum } from '../types/certificatesales-delivery-type.enum';
import { CertificatesaleStatusEnum } from '../types/certificatessales-status.enum';

export class CreateCertificatesaleDto {
  @IsInt()
  @IsOptional()
  expireDate: number;

  @IsIn(['new', 'sended', 'used', 'annul', 'hold'])
  status: CertificatesaleStatusEnum;

  @IsString()
  @IsOptional()
  annulComment: string;

  @IsString()
  @IsOptional()
  clientComment: string;

  @IsJSON()
  @IsOptional()
  photos: string[];

  @IsJSON()
  @IsOptional()
  technicalPhotos: string[];

  @IsIn(['pickup', 'email', 'post'])
  deliveryType: CertificatesaleDeliveryTypeEnum;

  @IsString()
  @IsOptional()
  deliveryAddress: string;

  @IsString()
  @IsOptional()
  deliveryPostcode: string;

  @IsString()
  @IsOptional()
  deliveryCity: string;

  @IsString()
  @IsOptional()
  deliveryEmail: string;

  @IsString()
  @IsOptional()
  deliveryComment: string;

  @IsString()
  @IsOptional()
  trackingNumber: string;

  @IsString()
  @IsOptional()
  trackingCompany: string;

  @IsString()
  clientId: string;
  @IsString()
  name: string;
  @IsString()
  phone: string;
  @IsString()
  email: string;

  @IsInt()
  nominal: number;
  @IsInt()
  deliveryPrice: number;
  @IsInt()
  extraPrice: number;
  @IsInt()
  totalPrice: number;

  @IsInt()
  @IsOptional()
  payed: number;

  @IsInt()
  toPay: number;

  @IsString()
  certificateId: string;
  @IsString()
  code: string;

  @IsIn(['www', 'user', 'support', 'agregator'])
  source: CertificatesaleSourceEnum;

  @IsString()
  profileId: string;
}

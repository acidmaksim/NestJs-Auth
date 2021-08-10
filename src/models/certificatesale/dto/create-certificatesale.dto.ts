import { IsNotBlank } from '@src/extensions/is-not-blank';
import {
  IsArray,
  IsIn,
  IsInt,
  IsJSON,
  IsOptional,
  IsString,
} from 'class-validator';
import { CertificatesaleSourceEnum } from '../types/certificatesale-source.enum';
import { CertificatesaleDeliveryTypeEnum } from '../types/certificatesales-delivery-type.enum';
import { CertificatesaleStatusEnum } from '../types/certificatessales-status.enum';

export class CreateCertificatesaleDto {
  @IsInt()
  nominal: number;
  @IsInt()
  deliveryPrice: number;
  @IsInt()
  extraPrice: number;
  @IsInt()
  totalPrice: number;

  @IsNotBlank()
  certificateId: string;
  @IsNotBlank()
  code: string;

  @IsNotBlank()
  profileId: string;

  @IsInt()
  @IsOptional()
  expireDate: number;

  @IsIn(['new', 'sended', 'used', 'annul', 'hold'])
  @IsOptional()
  status: CertificatesaleStatusEnum;

  @IsString()
  @IsOptional()
  annulComment: string;

  @IsString()
  @IsOptional()
  clientComment: string;

  @IsArray()
  @IsOptional()
  photos: string[];

  @IsArray()
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

  @IsNotBlank()
  clientId: string;
  @IsNotBlank()
  name: string;
  @IsNotBlank()
  phone: string;
  @IsNotBlank()
  email: string;

  @IsInt()
  @IsOptional()
  payed: number;

  @IsInt()
  toPay: number;

  @IsIn(['www', 'user', 'support', 'agregator'])
  @IsOptional()
  source: CertificatesaleSourceEnum;
}

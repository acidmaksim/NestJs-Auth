import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNotBlank()
  name: string;

  @IsNotBlank()
  surname: string;

  @IsNotBlank()
  phone: string;

  @IsNotBlank()
  email: string;

  @IsNotBlank()
  profileId: string;

  @IsString()
  @IsOptional()
  photo: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  postcode: string;

  //   @Column({ default: '' })
  //   blockedDate?: number;

  @IsString()
  @IsOptional()
  aboutClient: string;

  @IsBoolean()
  @IsOptional()
  sendAds: boolean;

  // @IsInt()
  // @IsOptional()
  // trustIndex: number;

  // @IsInt()
  // @IsOptional()
  // ordersCount: number;

  // @IsInt()
  // @IsOptional()
  // certificatesCount: number;

  // @IsInt()
  // @IsOptional()
  // communicationsCount: number;

  //   @Column()
  //   deleted?: boolean;

  //   @Column()
  //   lastOrderCreatedDate?: number;

  //   @Column()
  //   lastOrderDate?: number;
}

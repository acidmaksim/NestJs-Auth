import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

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

  @IsInt()
  @IsOptional()
  trustIndex: number;

  @IsInt()
  @IsOptional()
  ordersCount: number;

  @IsInt()
  @IsOptional()
  certificatesCount: number;

  @IsInt()
  @IsOptional()
  communicationsCount: number;

  @IsString()
  profileId: string;

  //   @Column()
  //   deleted?: boolean;

  //   @Column()
  //   lastOrderCreatedDate?: number;

  //   @Column()
  //   lastOrderDate?: number;
}

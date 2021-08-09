import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsArray } from 'class-validator';
import { OrganizationModel } from './../../../../config/models';

export type UpsellingData = {
  id: string;
  sum?: number;
};

export class CreateOrderUpsellingDto extends OrganizationModel {
  @IsArray()
  upsellings: UpsellingData[];

  @IsNotBlank()
  orderId: string;

  @IsNotBlank()
  profileId: string;
}

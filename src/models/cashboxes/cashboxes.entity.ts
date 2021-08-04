import { OrganizationModel } from 'config/models';
import { Entity, Column } from 'typeorm';

@Entity()
export class Cashbox extends OrganizationModel {
  @Column()
  title: string;
}

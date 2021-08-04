import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity()
export class TariffEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column()
  color: string;

  @Column()
  price: { [x: string]: number | string };
}

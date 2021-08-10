import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tariffs' })
export class TariffEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column({ default: '' })
  color: string;

  @Column({ type: 'jsonb' })
  price: { [x: string]: string };
}

import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'locations' })
export class LocationEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  disinfection: string;

  @Column({ default: '' })
  howToFind: string;

  @Column({ default: false })
  wifi: boolean;

  @Column({ default: false })
  wardrobe: boolean;

  @Column({ default: false })
  freeParking: boolean;

  @Column({ default: false })
  parking: boolean;

  @Column({ default: false })
  ventilation: boolean;

  @Column({ default: 0 })
  waitingAreaSize: number;

  @Column({ default: 0 })
  neededEmployees: number;

  @Column({ default: 0 })
  sortPosition: number;
}

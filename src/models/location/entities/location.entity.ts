import { OrganizationModel } from 'config/models';
import { Column } from 'typeorm';

export class LocationEntities extends OrganizationModel {
  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  address: string;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  howToFind: string;

  @Column({ default: '' })
  disinfection: string;

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

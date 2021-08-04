import { OrganizationModel } from 'config/models';
import { Column } from 'typeorm';

export class OptionEntities extends OrganizationModel {
  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  contact: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  comment: string;
}

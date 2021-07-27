import { OrganizationModel } from 'config/models';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends OrganizationModel {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

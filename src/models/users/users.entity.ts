import { OrganizationModel } from 'config/models';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends OrganizationModel {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  photo: string;

  @Column()
  password: string;

  @Column({ default: true })
  access: boolean;

  @Column()
  roleId: string;
}

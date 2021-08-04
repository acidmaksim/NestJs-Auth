import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column({ default: false })
  totalAccess: boolean;

  @Column({ default: false })
  calendarAccess: boolean;

  @Column({ default: false })
  sheduleAccess: boolean;

  @Column({ default: false })
  certificateAccess: boolean;

  @Column({ default: false })
  financeAccess: boolean;

  @Column({ default: false })
  employeeAccess: boolean;

  @Column({ default: false })
  settingsAccess: boolean;

  @Column({ default: false })
  statisticsAccess: boolean;
}

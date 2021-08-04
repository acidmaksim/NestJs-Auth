import { OrganizationModel } from 'config/models';
import { hash } from 'bcrypt';
import { BeforeRemove, Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends OrganizationModel {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ default: true })
  access: boolean;

  @Column({ default: '' })
  roleId: string;

  @Column({ default: '' })
  photo: string;

  @Column({ select: false })
  password: string;

  @BeforeRemove()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}

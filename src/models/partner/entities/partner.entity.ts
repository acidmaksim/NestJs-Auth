import { BaseModel } from 'config/models';
import { BeforeUpdate, Column, Entity, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';
@Entity()
export class PartnerEntity extends BaseModel {
  // @Column()
  // phone: string;

  // @Column()
  // managerName: string;

  // @Column({ default: '' })
  // address: string;

  // @Column({ default: '' })
  // comment: string;

  @Column()
  title: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}

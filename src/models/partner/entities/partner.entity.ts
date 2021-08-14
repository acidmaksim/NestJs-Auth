import { PlaceEntity } from '@src/models/place/entities/place.entity';
import { BaseModel } from 'config/models';
import { BeforeUpdate, Column, Entity, OneToMany, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';
@Entity()
export class PartnerEntity extends BaseModel {
  @Column()
  title: string;

  @Column()
  phone: string;

  @Column()
  managerName: string;

  @Column()
  email: string;

  @Column({ default: '' })
  address: string;

  @Column({ default: '' })
  comment: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(() => PlaceEntity, (place) => place.partner)
  places: PlaceEntity[];
}

import { PlaceEntity } from '@src/models/place/entities/place.entity';
import { BaseModel } from 'config/models';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class PartnerEntity extends BaseModel {
  @Column()
  title: string;

  @Column()
  phone: string;

  @Column()
  managerName: string;

  // email: Type

  @Column({ default: '' })
  address: string;

  @Column({ default: '' })
  comment: string;

  @ManyToMany(() => PlaceEntity)
  @JoinTable()
  places: PlaceEntity[];
}

import { PlaceEntity } from '@src/models/place/entities/place.entity';
import { BaseModel } from 'config/models';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class PlaceCategoryEntity extends BaseModel {
  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => PlaceEntity, (places) => places.category)
  places: PlaceEntity[];
}

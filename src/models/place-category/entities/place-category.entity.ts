import { PlaceEntity } from '@src/models/place/entities/place.entity';
import { BaseModel } from 'config/models';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class PlaceCategoryEntity extends BaseModel {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => PlaceEntity)
  @JoinTable()
  places: PlaceEntity[];
}

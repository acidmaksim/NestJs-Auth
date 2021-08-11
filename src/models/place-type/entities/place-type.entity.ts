import { BaseModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity()
export class PlaceTypeEntity extends BaseModel {
  @Column()
  title: string;
}

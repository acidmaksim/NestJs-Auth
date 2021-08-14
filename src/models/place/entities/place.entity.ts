import { PlaceTypeEntity } from './../../place-type/entities/place-type.entity';
import { PartnerEntity } from '@src/models/partner/entities/partner.entity';
import { ReviewEntity } from '@src/models/review/entities/review.entity';
import { BaseModel } from 'config/models';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { PlaceCategoryEntity } from '@src/models/place-category/entities/place-category.entity';

@Entity()
export class PlaceEntity extends BaseModel {
  @Column()
  title: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ default: '' })
  site: string;

  @Column()
  howToFind: string;

  @Column({ default: 0 })
  rating: number;

  @Column({ default: 0 })
  blackPearls: number;

  @Column({ default: 0 })
  whitePearls: number;

  @Column({ default: 0 })
  tmpPearls: number;

  @Column()
  impression: number;

  @Column()
  service: number;

  @Column()
  clean: number;

  @Column()
  atmosphere: number;

  @Column({ default: 100 })
  trustIndex: number;

  @Column()
  description: string;

  @Column()
  photo: string;

  @Column('simple-array', { default: [] })
  photos: string[];

  @Column({ default: '' })
  video: string;

  @Column()
  maxDiscount: number;

  @Column()
  discountRules: string;

  @OneToMany(() => ReviewEntity, (review) => review.place)
  reviews: ReviewEntity[];

  @Column({ nullable: true })
  partnerId: string;

  @ManyToOne(() => PartnerEntity, (partner) => partner.places)
  @JoinColumn({ name: 'partnerId' })
  partner: PartnerEntity;

  // @Column()
  // coordinates: [lat, lng]

  // type* Type
  @Column({ nullable: true })
  categoryId: string;

  @ManyToOne(() => PlaceCategoryEntity, (category) => category.places)
  @JoinColumn({ name: 'categoryId' })
  category: PlaceCategoryEntity;
}

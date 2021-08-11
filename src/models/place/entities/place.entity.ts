import { PartnerEntity } from '@src/models/partner/entities/partner.entity';
import { ReviewEntity } from '@src/models/review/entities/review.entity';
import { BaseModel } from 'config/models';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class PlaceEntity extends BaseModel {
  @Column()
  title: string;

  @OneToOne(() => PartnerEntity)
  @JoinColumn()
  partner: PartnerEntity;

  // type* Type

  // category* Category

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ default: '' })
  site: string;

  @Column()
  howToFind: string;

  @ManyToMany(() => ReviewEntity)
  @JoinTable()
  reviews: ReviewEntity[];

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

  @Column()
  photos: string[];

  @Column({ default: '' })
  video: string;

  // @Column()
  // coordinates: [lat, lng]

  @Column()
  maxDiscount: number;

  @Column()
  discountRules: string;
}

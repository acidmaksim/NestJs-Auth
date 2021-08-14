import { AnswerEntity } from '@src/models/answer/entities/answer.entity';
import { PartnerEntity } from '@src/models/partner/entities/partner.entity';
import { PlaceEntity } from '@src/models/place/entities/place.entity';
import { BaseModel } from 'config/models';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class ReviewEntity extends BaseModel {
  @Column()
  clientId: string;

  @Column()
  clientFullName: string;

  @Column()
  clientRank: string;

  @Column()
  text: string;

  @Column()
  discountProvided: boolean;

  @Column({ default: false })
  blackPearl: boolean;

  @Column()
  whitePearl: boolean;

  @Column({ default: 0 })
  impression: number;

  @Column()
  service: number;

  @Column()
  clean: number;

  @Column()
  atmosphere: number;

  @Column()
  priceByService: number;

  @Column({ nullable: true })
  placeId: string;

  @ManyToOne(() => PlaceEntity, (place) => place.reviews)
  @JoinColumn({ name: 'placeId' })
  place: PlaceEntity;

  @OneToOne(() => AnswerEntity, (answer) => answer.review)
  answer: AnswerEntity;

  @Column({ nullable: true })
  partnerId: string;

  @OneToOne(() => PartnerEntity)
  @JoinColumn({ name: 'partnerId' })
  partner: PartnerEntity;
}

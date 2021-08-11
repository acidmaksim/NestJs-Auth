import { PartnerEntity } from '@src/models/partner/entities/partner.entity';
import { PlaceEntity } from '@src/models/place/entities/place.entity';
import { BaseModel } from 'config/models';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class ReviewEntity extends BaseModel {
  @Column()
  clientId: string;

  @Column()
  clientFullName: string;

  @Column()
  clientRank: string;

  @ManyToOne(() => PartnerEntity)
  @JoinColumn()
  partner: PartnerEntity;

  @ManyToOne(() => PlaceEntity)
  @JoinColumn()
  place: PlaceEntity;

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
}

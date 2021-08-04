import { Languages } from '@src/enum/languages.enum';
import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity()
export class QuestroomEntity extends OrganizationModel {
  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  video: string;

  @Column({ default: '' })
  photo: string;

  @Column('simple-array')
  photos: string[];

  @Column({ default: 60 })
  time: number;

  @Column({ default: 30 })
  break: number;

  @Column({ default: 'Escape Navigator' })
  type: string;

  @Column({ default: 6 })
  minAge: number;

  @Column({ default: 3 })
  difficult: number;

  @Column({ default: 0 })
  fear: number;

  @Column({ default: '' })
  teaser: string;

  @Column({ default: '' })
  legend: string;

  @Column({ default: '' })
  importantInformation: string;

  @Column({ default: 2 })
  actors: number;

  @Column({ default: 0 })
  neededModerators: number;

  @Column({ default: 21 })
  schedulePeriod: number;

  @Column({
    type: 'enum',
    enum: Languages,
    default: Languages.RU,
  })
  languages: Languages;

  @Column({ default: '' })
  defaultLanguage: string;

  @Column({ default: true })
  awailableForNavigator: boolean;

  @Column({ default: true })
  awailableForWidgets: boolean;

  @Column({ default: 7 })
  minDaysForFreeCanceling: number;

  @Column('simple-array')
  questroomIds: string[];

  @Column({ default: '' })
  walletId: string;

  @Column({ default: '' })
  locationId: string;

  @Column({ default: 1 })
  sortPosition: number;

  @Column({ default: false })
  ticketSystem: boolean;
}

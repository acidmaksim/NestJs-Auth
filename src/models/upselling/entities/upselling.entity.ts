import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'upsellings' })
export class UpsellingEntity extends OrganizationModel {
  @Column()
  title: string;

  @Column()
  price: number;

  @Column({ default: '' })
  description: string;

  @Column({ default: true })
  allQuestrooms: boolean;

  @Column({ type: 'json' })
  questroomsIds?: string[];
}

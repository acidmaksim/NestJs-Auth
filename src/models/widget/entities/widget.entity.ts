import { WidgetType } from '@src/enum/widget-type.enum';
import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';

@Entity()
export class WidgetEntity extends OrganizationModel {
  @Column({
    type: 'enum',
    enum: WidgetType,
  })
  type: string[];

  @Column()
  color: string;

  @Column()
  questroomId: string;

  @Column({ type: 'json' })
  questroomIds: string[];

  @Column({ type: 'json' })
  certificateIds: string[];
}

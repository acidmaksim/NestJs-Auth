import { ValidateIf } from 'class-validator';
import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';
import { WidgetTypeEnum } from '../types/widget-type.enum';

@Entity({ name: 'widgets' })
export class WidgetEntity extends OrganizationModel {
  @Column({
    type: 'enum',
    enum: WidgetTypeEnum,
  })
  type: WidgetTypeEnum;

  @Column()
  color: string;

  @Column()
  questroomId: string;

  @Column({ type: 'json' })
  questroomIds: string[];

  @Column({ type: 'json' })
  certificateIds: string[];
}

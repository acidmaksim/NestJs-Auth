import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CurrentUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  firstName: string;

  @Column({ default: '' })
  lastName: string;
}

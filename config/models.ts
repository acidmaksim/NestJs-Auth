import {
  // Column,
  CreateDateColumn,
  DeleteDateColumn,
  // DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseModel {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @DeleteDateColumn()
  deletedAt?: Date;
}

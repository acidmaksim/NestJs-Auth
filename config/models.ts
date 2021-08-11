import {
  // Column,
  CreateDateColumn,
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
}

// export class OrganizationModel extends BaseModel {
//   // @Column()
//   // profileId: string;

//   @DeleteDateColumn()
//   deletedAt?: Date;
// }

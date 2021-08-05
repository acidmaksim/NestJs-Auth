import { OrganizationModel } from 'config/models';
import { Column, Entity } from 'typeorm';
import { TransactionFeeEnum } from '../types/transaction-fee.enum';
import { TransactionSourceEnum } from '../types/transaction-source.enum';
// import { TransactionStatusEnum } from '../types/transaction-status.enum';
import { TransactionTypeEnum } from '../types/transaction-type.enum';

@Entity({ name: 'transactions' })
export class TransactionEntity extends OrganizationModel {
  @Column({
    type: 'enum',
    enum: TransactionTypeEnum,
  })
  type: TransactionTypeEnum;

  @Column({ default: false })
  online: boolean; // false

  @Column({ default: '' })
  cashboxId: string;

  @Column({ default: '' })
  financeitemId: string;

  @Column({ default: '' })
  onlinePaymentId: string;

  @Column({ default: '' })
  partnerId: string;

  @Column({ default: 0 })
  amount: number; // 0

  @Column({ default: 0 })
  actualAmount: number; // 0

  @Column({ default: 0 })
  commissionAmount: number; // 0

  @Column({ default: 0 })
  balance: number;

  @Column()
  comment: string;
  // privat
  // связки используются если запрещено прямое изменение данных
  @Column({
    type: 'enum',
    enum: TransactionFeeEnum,
    default: TransactionFeeEnum.ZERO,
  })
  fee: TransactionFeeEnum; // 0

  @Column({
    type: 'enum',
    enum: TransactionSourceEnum,
    default: TransactionSourceEnum.USER,
  })
  source: TransactionSourceEnum; // user

  //   @Column({
  //     type: 'enum',
  //     enum: TransactionStatusEnum,
  //     default: TransactionStatusEnum.ACCEPTED,
  //   })
  //   status: TransactionStatusEnum; // accepted

  //   certificateId: string;
  //   orderId?: string;
  //   clientId?: string;
  //   clientFullName?: string;
  //   deleted?: boolean; // false
}

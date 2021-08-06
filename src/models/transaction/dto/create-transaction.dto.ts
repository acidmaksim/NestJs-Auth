import { IsNotBlank } from '@src/extensions/is-not-blank';
import { IsBoolean, IsIn, IsInt, IsOptional, IsString } from 'class-validator';
import { TransactionFeeEnum } from '../types/transaction-fee.enum';
import { TransactionSourceEnum } from '../types/transaction-source.enum';
import { TransactionTypeEnum } from '../types/transaction-type.enum';

export class CreateTransactionDto {
  @IsIn(['income', 'expense'])
  type: TransactionTypeEnum;

  @IsBoolean()
  @IsOptional()
  online: boolean; // false

  @IsString()
  @IsOptional()
  cashboxId: string;

  @IsString()
  @IsOptional()
  financeitemId: string;

  @IsString()
  @IsOptional()
  onlinePaymentId: string;

  @IsString()
  @IsOptional()
  partnerId: string;

  @IsInt()
  @IsOptional()
  amount: number; // 0

  @IsInt()
  @IsOptional()
  actualAmount: number; // 0

  @IsInt()
  @IsOptional()
  commissionAmount: number; // 0

  @IsInt()
  @IsOptional()
  balance: number;

  @IsString()
  @IsOptional()
  comment: string;
  // privat
  // связки используются если запрещено прямое изменение данных
  @IsIn([0, 1, 15])
  @IsOptional()
  fee: TransactionFeeEnum; // 0

  @IsIn(['user', 'widget', 'agregator', 'client'])
  source: TransactionSourceEnum; // user

  @IsNotBlank()
  profileId: string;

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

import { IsDefined, IsIn, IsNotEmpty, IsString } from 'class-validator';

// IsString или IsNotEmpty //!!
export class CreateFinanceitemDto {
  @IsNotEmpty()
  title: string;

  @IsIn(['income', 'expence'])
  type: string;

  @IsDefined()
  comment: string;

  @IsString()
  profileId: string;
}

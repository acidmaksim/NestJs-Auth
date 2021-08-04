import { IsDefined, IsIn, IsNotEmpty } from 'class-validator';

export class CreateFinanceitemDto {
  @IsNotEmpty()
  title: string;

  @IsIn(['income', 'expence'])
  type: string;

  @IsDefined()
  comment: string;
  //!!
  profileId: string;
}

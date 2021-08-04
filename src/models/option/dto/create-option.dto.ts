import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  title: string;

  @IsDefined()
  contact: string;

  @IsEmail()
  email: string;

  @IsDefined()
  phone: string;

  @IsDefined()
  comment: string;

  profileId: string;
}

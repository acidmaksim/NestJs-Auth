import { IsString } from 'class-validator';

export class CreateCurrentUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

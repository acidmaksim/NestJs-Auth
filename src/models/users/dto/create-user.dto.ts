import { IsDefined, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsDefined()
  photo: string;

  @IsString()
  roleId: string;

  @IsString()
  profileId: string;
}

//@ValidateIf(o => o.otherProperty === 'value')

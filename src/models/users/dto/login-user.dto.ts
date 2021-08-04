import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

//@ValidateIf(o => o.otherProperty === 'value')

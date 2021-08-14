import { IsNotBlank } from '@src/extensions/is-not-blank';

export class CreateClientDto {
  @IsNotBlank()
  clientId: string;
}

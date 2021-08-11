import { IsNotBlank } from '@src/extensions/is-not-blank';

export class CreatePlaceTypeDto {
  @IsNotBlank()
  title: string;
}

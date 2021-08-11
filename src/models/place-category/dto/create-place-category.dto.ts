import { IsNotBlank } from '@src/extensions/is-not-blank';

export class CreatePlaceCategoryDto {
  @IsNotBlank()
  title: string;

  @IsNotBlank()
  description: string;

  //   places: Place[];
}

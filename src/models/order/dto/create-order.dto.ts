import { IsNotBlank } from '@src/extensions/is-not-blank';

export class CreateOrderDto {
  @IsNotBlank()
  clientId: string;

  //   @OneToMany()
  //   @JoinColumn()
  //   client:;
  //   @OneToOne()
  //   @JoinColumn()
  //   client:;
}

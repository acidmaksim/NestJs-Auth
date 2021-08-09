import { Test, TestingModule } from '@nestjs/testing';
import { OrderDiscountService } from './order-discount.service';

describe('OrderDiscountService', () => {
  let service: OrderDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderDiscountService],
    }).compile();

    service = module.get<OrderDiscountService>(OrderDiscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OrderUpsellingService } from './order-upselling.service';

describe('OrderUpsellingService', () => {
  let service: OrderUpsellingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderUpsellingService],
    }).compile();

    service = module.get<OrderUpsellingService>(OrderUpsellingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

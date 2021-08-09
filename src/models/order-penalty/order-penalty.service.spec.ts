import { Test, TestingModule } from '@nestjs/testing';
import { OrderPenaltyService } from './order-penalty.service';

describe('OrderPenaltyService', () => {
  let service: OrderPenaltyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderPenaltyService],
    }).compile();

    service = module.get<OrderPenaltyService>(OrderPenaltyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

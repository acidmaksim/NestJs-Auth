import { Test, TestingModule } from '@nestjs/testing';
import { OrderPenaltyController } from './order-penalty.controller';
import { OrderPenaltyService } from './order-penalty.service';

describe('OrderPenaltyController', () => {
  let controller: OrderPenaltyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderPenaltyController],
      providers: [OrderPenaltyService],
    }).compile();

    controller = module.get<OrderPenaltyController>(OrderPenaltyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

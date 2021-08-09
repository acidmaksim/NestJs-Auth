import { Test, TestingModule } from '@nestjs/testing';
import { OrderUpsellingController } from './order-upselling.controller';
import { OrderUpsellingService } from './order-upselling.service';

describe('OrderUpsellingController', () => {
  let controller: OrderUpsellingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderUpsellingController],
      providers: [OrderUpsellingService],
    }).compile();

    controller = module.get<OrderUpsellingController>(OrderUpsellingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

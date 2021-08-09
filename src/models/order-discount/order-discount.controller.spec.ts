import { Test, TestingModule } from '@nestjs/testing';
import { OrderDiscountController } from './order-discount.controller';
import { OrderDiscountService } from './order-discount.service';

describe('OrderDiscountController', () => {
  let controller: OrderDiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderDiscountController],
      providers: [OrderDiscountService],
    }).compile();

    controller = module.get<OrderDiscountController>(OrderDiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

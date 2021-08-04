import { Test, TestingModule } from '@nestjs/testing';
import { FinanceitemController } from './financeitem.controller';
import { FinanceitemService } from './financeitem.service';

describe('FinanceitemController', () => {
  let controller: FinanceitemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceitemController],
      providers: [FinanceitemService],
    }).compile();

    controller = module.get<FinanceitemController>(FinanceitemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

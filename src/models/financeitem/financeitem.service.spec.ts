import { Test, TestingModule } from '@nestjs/testing';
import { FinanceitemService } from './financeitem.service';

describe('FinanceitemService', () => {
  let service: FinanceitemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceitemService],
    }).compile();

    service = module.get<FinanceitemService>(FinanceitemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

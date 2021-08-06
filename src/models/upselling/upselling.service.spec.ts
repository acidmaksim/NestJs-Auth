import { Test, TestingModule } from '@nestjs/testing';
import { UpsellingService } from './upselling.service';

describe('UpsellingService', () => {
  let service: UpsellingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpsellingService],
    }).compile();

    service = module.get<UpsellingService>(UpsellingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

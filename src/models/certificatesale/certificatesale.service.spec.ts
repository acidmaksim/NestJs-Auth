import { Test, TestingModule } from '@nestjs/testing';
import { CertificatesaleService } from './certificatesale.service';

describe('CertificatesaleService', () => {
  let service: CertificatesaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CertificatesaleService],
    }).compile();

    service = module.get<CertificatesaleService>(CertificatesaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

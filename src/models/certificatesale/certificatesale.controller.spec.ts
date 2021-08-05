import { Test, TestingModule } from '@nestjs/testing';
import { CertificatesaleController } from './certificatesale.controller';
import { CertificatesaleService } from './certificatesale.service';

describe('CertificatesaleController', () => {
  let controller: CertificatesaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CertificatesaleController],
      providers: [CertificatesaleService],
    }).compile();

    controller = module.get<CertificatesaleController>(CertificatesaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

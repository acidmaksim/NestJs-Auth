import { Test, TestingModule } from '@nestjs/testing';
import { UpsellingController } from './upselling.controller';
import { UpsellingService } from './upselling.service';

describe('UpsellingController', () => {
  let controller: UpsellingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpsellingController],
      providers: [UpsellingService],
    }).compile();

    controller = module.get<UpsellingController>(UpsellingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

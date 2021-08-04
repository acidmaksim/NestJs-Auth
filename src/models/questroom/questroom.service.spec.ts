import { Test, TestingModule } from '@nestjs/testing';
import { QuestroomService } from './questroom.service';

describe('QuestroomService', () => {
  let service: QuestroomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestroomService],
    }).compile();

    service = module.get<QuestroomService>(QuestroomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

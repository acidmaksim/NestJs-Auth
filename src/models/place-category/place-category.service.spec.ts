import { Test, TestingModule } from '@nestjs/testing';
import { PlaceCategoryService } from './place-category.service';

describe('PlaceCategoryService', () => {
  let service: PlaceCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceCategoryService],
    }).compile();

    service = module.get<PlaceCategoryService>(PlaceCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

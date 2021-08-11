import { Test, TestingModule } from '@nestjs/testing';
import { PlaceCategoryController } from './place-category.controller';
import { PlaceCategoryService } from './place-category.service';

describe('PlaceCategoryController', () => {
  let controller: PlaceCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceCategoryController],
      providers: [PlaceCategoryService],
    }).compile();

    controller = module.get<PlaceCategoryController>(PlaceCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

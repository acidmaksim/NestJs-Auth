import { Test, TestingModule } from '@nestjs/testing';
import { QuestroomController } from './questroom.controller';
import { QuestroomService } from './questroom.service';

describe('QuestroomController', () => {
  let controller: QuestroomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestroomController],
      providers: [QuestroomService],
    }).compile();

    controller = module.get<QuestroomController>(QuestroomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CurrentUsersController } from './current-users.controller';
import { CurrentUsersService } from './current-users.service';

describe('CurrentUsersController', () => {
  let controller: CurrentUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentUsersController],
      providers: [CurrentUsersService],
    }).compile();

    controller = module.get<CurrentUsersController>(CurrentUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

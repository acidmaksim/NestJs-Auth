import { Test, TestingModule } from '@nestjs/testing';
import { CurrentUsersService } from './current-users.service';

describe('CurrentUsersService', () => {
  let service: CurrentUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrentUsersService],
    }).compile();

    service = module.get<CurrentUsersService>(CurrentUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

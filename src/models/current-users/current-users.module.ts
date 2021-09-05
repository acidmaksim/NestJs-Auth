import { Module } from '@nestjs/common';
import { CurrentUsersService } from './current-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrentUserEntity } from './entities/current-user.entity';
import CurrentUsersController from './current-users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CurrentUserEntity])],
  controllers: [CurrentUsersController],
  providers: [CurrentUsersService],
})
export class CurrentUsersModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCurrentUserDto } from './dto/create-current-user.dto';
import { UpdateCurrentUserDto } from './dto/update-current-user.dto';
import { CurrentUserEntity } from './entities/current-user.entity';

@Injectable()
export class CurrentUsersService {
  constructor(
    @InjectRepository(CurrentUserEntity)
    private currentUserRepositroy: Repository<CurrentUserEntity>,
  ) {}

  createCurrentUser(
    createCurrentUserDto: CreateCurrentUserDto,
  ): Promise<CurrentUserEntity> {
    const currentUser = new CurrentUserEntity();
    return this.currentUserRepositroy.save({
      ...currentUser,
      ...createCurrentUserDto,
    });
  }

  findAll(query): Promise<CurrentUserEntity[]> {
    return this.currentUserRepositroy.find(query);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} currentUser`;
  // }

  // update(id: number, updateCurrentUserDto: UpdateCurrentUserDto) {
  //   return `This action updates a #${id} currentUser`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} currentUser`;
  // }
}

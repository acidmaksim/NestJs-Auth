import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(currentUserId: string): Promise<CurrentUserEntity> {
    const currentUser = await this.currentUserRepositroy.findOne(
      currentUserId,
      {
        withDeleted: true,
      },
    );

    if (!currentUser) {
      throw new NotFoundException();
    }

    return currentUser;
  }

  async updatepartner(
    currentUserId: string,
    updateCurrentUserDto: UpdateCurrentUserDto,
  ): Promise<CurrentUserEntity> {
    const currentUser = await this.findOne(currentUserId);
    return this.currentUserRepositroy.save({
      ...currentUser,
      ...updateCurrentUserDto,
    });
  }

  async delete(currentUserId: string): Promise<CurrentUserEntity> {
    const currentUser = await this.findOne(currentUserId);
    return this.currentUserRepositroy.softRemove(currentUser);
  }

  async recover(currentUserId: string): Promise<CurrentUserEntity> {
    const currentUser = await this.findOne(currentUserId);
    return this.currentUserRepositroy.recover(currentUser);
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

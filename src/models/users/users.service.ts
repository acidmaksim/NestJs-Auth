import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Paginated, PaginateQuery } from 'nestjs-paginate';

import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /**
   * Create user
   */
  async create(userBody: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(userBody);
    return this.usersRepository.save(newUser);
  }

  /**
   * Find all users
   */
  public findAll(query: PaginateQuery): Promise<Paginated<User>> {
    return paginate(query, this.usersRepository, {
      sortableColumns: ['id', 'firstName'],
      searchableColumns: ['firstName'],
      defaultSortBy: [['createdAt', 'DESC']],
    });
  }

  /**
   * Find one user
   */
  findOne(userId: string) {
    return this.usersRepository.findOneOrFail(userId);
  }

  /**
   * Find one user by email
   */
  findByEmail(email: string) {
    return this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  /**
   * Update User
   */
  async updateUser(userId: string, userBody: UpdateUserDto) {
    const user = await this.findOne(userId);

    return this.usersRepository.save({
      ...user,
      ...userBody,
    });
  }

  /**
   * Delete user
   */
  async delete(userId: string) {
    const user = await this.findOne(userId);
    return this.usersRepository.softRemove(user);
  }

  /**
   * Restore user
   */
  async recover(userId: string) {
    const user = await this.findOne(userId);
    return this.usersRepository.recover(user);
  }
}

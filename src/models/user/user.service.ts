import { JWT_SECRET } from '@src/constants';
import { UserJwtData } from '@src/interfaces/user-jwt-data';
import { UserEntity } from './entities/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = new UserEntity();

    return this.userRepository.save({ ...user, ...createUserDto });
  }

  findAll() {
    return this.userRepository.find();
  }
  // public findAll(query: PaginateQuery): Promise<Paginated<User>> {
  //   return paginate(query, this.usersRepository, {
  //     sortableColumns: ['id', 'firstName'],
  //     searchableColumns: ['firstName'],
  //     defaultSortBy: [['createdAt', 'DESC']],
  //   });
  // }

  findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne(
      { email: loginUserDto.email },
      { select: ['password', 'id'] },
    );

    if (!user) {
      throw new HttpException(
        'Email or password incorrect',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isPasswordCorrect = compare(loginUserDto.password, user.password);

    if (!isPasswordCorrect) {
      throw new HttpException(
        'Email or password incorrect',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    delete user.password;

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  getUserToken({ id, profileId }: UserEntity): string {
    const data: UserJwtData = {
      id,
      profileId,
      accessType: 'user',
    };

    return sign(data, JWT_SECRET, { expiresIn: '360d' });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import { JWT_SECRET } from '@src/constants/index';
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

  findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOne(id);
    return this.userRepository.save({ ...user, ...updateUserDto });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const user = new UserEntity();
    // await this.userRepository.findOne(
    //   UserEntity,
    //   { email: loginUserDto.email },
    //   { select: ['password', 'id', 'profileId'] },
    // );

    const isPasswordCorrect =
      !!user && compare(loginUserDto.password, user.password);

    if (!isPasswordCorrect) {
      throw new HttpException(
        'Email or password incorrect',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    delete user.password;

    return user;
  }

  getUserToken({ id }: UserEntity): string {
    const data: UserJwtData = {
      id,
      accessType: 'user',
    };

    return sign(data, JWT_SECRET, { expiresIn: '360d' });
  }
}

// public findAll(query: PaginateQuery): Promise<Paginated<User>> {
//   return paginate(query, this.usersRepository, {
//     sortableColumns: ['id', 'firstName'],
//     searchableColumns: ['firstName'],
//     defaultSortBy: [['createdAt', 'DESC']],
//   });
// }

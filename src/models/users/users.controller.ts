import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Res,
  UnauthorizedException,
  Query,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Users login
   */
  @Post('/login')
  async login(
    @Body('email') email: string,
    @Body('password') pass: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { profileId, id, password } = await this.usersService.findByEmail(
      email,
    );

    if (password !== pass) {
      throw new UnauthorizedException();
    }

    const token = await this.authService.getCrmAuthToken({
      sub: id,
      type: 'user',
      profileId,
    });

    res.cookie('auth-cookie', token, { httpOnly: true });

    return { success: true };
  }

  /**
   * Create user
   */
  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  /**
   * Update user
   */
  @Patch(':id')
  updateUser(@Param('id') userId: string, @Body() userData: UpdateUserDto) {
    return this.usersService.updateUser(userId, userData);
  }

  /**
   * Get all users
   */
  @Get()
  async getAllUsers(@Query() query) {
    return this.usersService.findAll(query);
  }

  /**
   * Get one user
   */
  @Get(':id')
  getOneUser(@Param('id') userId: string) {
    return this.usersService.findOne(userId);
  }

  /**
   * Delete user
   */
  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return this.usersService.delete(userId);
  }

  /**
   * Recover user
   */
  @Patch('/recover/:id')
  recoverUser(@Param('id') userId: string) {
    return this.usersService.recover(userId);
  }
}

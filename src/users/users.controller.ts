import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { AuthService } from './../auth/auth.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
  Res,
  Req,
  Query,
  UnauthorizedException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';

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
    @Body() body: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.usersService.findByEmail(body.username);

    if (user.password !== body.password) {
      throw new UnauthorizedException();
    }

    const token = this.authService.getAuthToken(user);
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
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateUser(
    @Req() req,
    @Param('id') userId: string,
    @Body() userData: UpdateUserDto,
  ) {
    console.log(req.user);
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

import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import JwtAuthenticationGuard from '../authentication/guard/jwt-authentication.guard';

import { CurrentUsersService } from './current-users.service';
import { CreateCurrentUserDto } from './dto/create-current-user.dto';

@Controller('cuerrent-users')
export default class CurrentUsersController {
  constructor(private readonly currentUsersService: CurrentUsersService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createCurrentUsert(@Body() currentUser: CreateCurrentUserDto) {
    return this.currentUsersService.createCurrentUser(currentUser);
  }

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  async findAll(@Query() query) {
    const currentUsers = await this.currentUsersService.findAll(query);
    return currentUsers;
  }
  // (...)
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import JwtAuthenticationGuard from '../authentication/guard/jwt-authentication.guard';

import { CurrentUsersService } from './current-users.service';
import { CreateCurrentUserDto } from './dto/create-current-user.dto';
import { UpdateCurrentUserDto } from './dto/update-current-user.dto';

@Controller('cuerrent-users')
export default class CurrentUsersController {
  constructor(private readonly currentUsersService: CurrentUsersService) {}

  @Post()
  // @UseGuards(JwtAuthenticationGuard)
  async createCurrentUsert(@Body() currentUser: CreateCurrentUserDto) {
    return this.currentUsersService.createCurrentUser(currentUser);
  }

  @Get()
  // @UseGuards(JwtAuthenticationGuard)
  async findAll(@Query() query) {
    const currentUsers = await this.currentUsersService.findAll(query);
    return currentUsers;
  }

  @Get(':id')
  findOne(@Param('id') currentUserId: string) {
    return this.currentUsersService.findOne(currentUserId);
  }

  @Patch(':id')
  update(
    @Param('id') currentUserId: string,
    @Body() updateCurrentUserDto: UpdateCurrentUserDto,
  ) {
    return this.currentUsersService.updatepartner(
      currentUserId,
      updateCurrentUserDto,
    );
  }

  @Delete(':id')
  delete(@Param('id') currentUserId: string) {
    return this.currentUsersService.delete(currentUserId);
  }

  @Patch(':id')
  recover(@Param('id') currentUserId: string) {
    return this.currentUsersService.recover(currentUserId);
  }
}

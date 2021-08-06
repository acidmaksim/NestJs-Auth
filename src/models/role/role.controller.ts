import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AuthGuard } from '../user/guards/auth.guard';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';

@UseGuards(AuthGuard)
@Controller('roles')
export class RoleController {
  constructor(private readonly rolesService: RoleService) {}

  @Post()
  create(@BodyWithProfile() roleData: CreateRoleDto) {
    return this.rolesService.create(roleData);
  }

  @Patch(':id')
  update(@Param('id') roleId: string, @Body() roleData: UpdateRoleDto) {
    return this.rolesService.updateRole(roleId, roleData);
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const roles = await this.rolesService.findAll(query);
    return roles;
  }

  @Get(':id')
  getOne(@Param('id') roleId: string) {
    return this.rolesService.findOne(roleId);
  }

  @Delete(':id')
  delete(@Param('id') roleId: string) {
    return this.rolesService.delete(roleId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') roleId: string) {
    return this.rolesService.recover(roleId);
  }
}

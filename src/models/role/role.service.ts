import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) {}
  async create(roleCreateDto: CreateRoleDto): Promise<RoleEntity> {
    const role = new RoleEntity();
    return await this.roleRepository.save({ ...role, ...roleCreateDto });
  }

  findAll(query): Promise<RoleEntity[]> {
    return this.roleRepository.find(query);
  }

  async findOne(roleId: string): Promise<RoleEntity> {
    const role = await this.roleRepository.findOne(roleId, {
      withDeleted: true,
    });

    if (!role) {
      throw new NotFoundException();
    }

    return role;
  }

  async updateRole(
    roleId: string,
    roleUpdateDto: UpdateRoleDto,
  ): Promise<RoleEntity> {
    const role = await this.findOne(roleId);

    return this.roleRepository.save({ ...role, ...roleUpdateDto });
  }

  async delete(roleId: string): Promise<RoleEntity> {
    const role = await this.findOne(roleId);
    return this.roleRepository.softRemove(role);
  }

  async recover(roleId: string): Promise<RoleEntity> {
    const role = await this.findOne(roleId);
    return this.roleRepository.recover(role);
  }
}

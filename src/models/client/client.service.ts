import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>,
  ) {}
  create(createClientDto: CreateClientDto): Promise<ClientEntity> {
    const client = new ClientEntity();
    return this.clientRepository.save({ ...client, ...createClientDto });
  }

  findAll(query): Promise<ClientEntity[]> {
    return this.clientRepository.find(query);
  }

  async findOne(cleintId: string): Promise<ClientEntity> {
    const client = await this.clientRepository.findOne(cleintId, {
      withDeleted: true,
    });
    if (!client) {
      throw new NotFoundException();
    }

    return client;
  }

  async updateClient(
    cleintId: string,
    updateClientDto: UpdateClientDto,
  ): Promise<ClientEntity> {
    const client = await this.findOne(cleintId);
    return this.clientRepository.save({ ...client, ...updateClientDto });
  }

  async delete(cleintId: string): Promise<ClientEntity> {
    const client = await this.findOne(cleintId);
    return this.clientRepository.softRemove(client);
  }

  async recover(cleintId: string): Promise<ClientEntity> {
    const client = await this.findOne(cleintId);
    return this.clientRepository.recover(client);
  }
}

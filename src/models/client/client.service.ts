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

  async findOne(clientId: string): Promise<ClientEntity> {
    const client = await this.clientRepository.findOne(clientId, {
      withDeleted: true,
    });

    if (!client) {
      throw new NotFoundException();
    }

    return client;
  }

  async updateClient(
    clientId: string,
    updateClientDto: UpdateClientDto,
  ): Promise<ClientEntity> {
    const client = await this.findOne(clientId);

    return this.clientRepository.save({ ...client, ...updateClientDto });
  }

  async delete(clientId: string): Promise<ClientEntity> {
    const client = await this.findOne(clientId);
    return this.clientRepository.softRemove(client);
  }

  async recover(clientId: string): Promise<ClientEntity> {
    const client = await this.findOne(clientId);
    return this.clientRepository.recover(client);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientsService: ClientService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  async getAll(@Query() query) {
    const clients = this.clientsService.findAll(query);
    return clients;
  }

  @Get(':id')
  getOne(@Param('id') clientId: string) {
    return this.clientsService.findOne(clientId);
  }

  @Patch(':id')
  update(
    @Param('id') clientId: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientsService.updateClient(clientId, updateClientDto);
  }

  @Delete(':id')
  delete(@Param('id') clientId: string) {
    return this.clientsService.delete(clientId);
  }

  @Patch(':id')
  recover(@Param('id') clientId: string) {
    return this.clientsService.recover(clientId);
  }
}

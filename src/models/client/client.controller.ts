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
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';
import { AuthGuard } from '../user/guards/auth.guard';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@UseGuards(AuthGuard)
@Controller('clients')
export class ClientController {
  constructor(private readonly clientsService: ClientService) {}

  @Post()
  create(@BodyWithProfile() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Patch(':id')
  update(
    @Param('id') clientId: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientsService.updateClient(clientId, updateClientDto);
  }

  @Get()
  async findAll(@QueryWithProfile() query) {
    const clients = await this.clientsService.findAll(query);
    return clients;
  }

  @Get(':id')
  findOne(@Param('id') clientId: string) {
    return this.clientsService.findOne(clientId);
  }

  @Delete(':id')
  delete(@Param('id') clientId: string) {
    return this.clientsService.delete(clientId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') clientId: string) {
    return this.clientsService.recover(clientId);
  }
}

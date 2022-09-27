import { CreateClientDto, UpdateClientDto } from './../dtos/client.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientService } from 'src/services/client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() createClientPayload: CreateClientDto) {
    return this.clientService.create(createClientPayload);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.clientService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientPayload: UpdateClientDto,
  ) {
    return this.clientService.update(id, updateClientPayload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clientService.delete(id);
  }
}

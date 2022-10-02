import { UpdateCustomerDto, CreateCustomerDto } from './../dtos/customer.dto';
import { CustomerService } from './../services/customer.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  /**
   * Il prend un objet CreateCustomerDto comme paramètre et renvoie une promesse d'un objet client
   * @param {CreateCustomerDto} createClientPayload - CreateCustomerDto
   * @returns La valeur de retour est une Promesse&lt;Client&gt;.
   */
  @Post()
  create(@Body() createClientPayload: CreateCustomerDto) {
    return this.customerService.create(createClientPayload);
  }

  /**
   * Elle renvoie le résultat de la fonction findAll() dans le customerService.
   * @returns Une liste de clients.
   */
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  /**
   * Cette fonction prend un id comme paramètre et renvoie le résultat de la fonction findOneById dans
   * le service client.
   * @param {string} id - Le nom du paramètre dans la route.
   * @returns La méthode customerService.findOneById(id) est renvoyée.
   */
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.customerService.findOneById(id);
  }

  /**
   * Cette fonction prend un identifiant client et une charge utile client, et renvoie le client mis à
   * jour.
   * @param {string} id - L'identifiant du client à mettre à jour
   * @param {UpdateCustomerDto} updateClientPayload - UpdateCustomerDto
   * @returns La valeur de retour est le résultat de la méthode update.
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientPayload: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, updateClientPayload);
  }

  /**
   * Il prend un identifiant en paramètre, puis il appelle la fonction de suppression dans le service
   * client et lui transmet l'identifiant
   * @param {string} id - L'identifiant du client à supprimer.
   * @returns La valeur de retour est une Promesse&lt;Client&gt;.
   */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customerService.delete(id);
  }
}

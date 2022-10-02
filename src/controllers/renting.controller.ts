import { CreateRentingDto, UpdateRentingDto } from './../dtos/renting.dto';
import { RentingService } from './../services/renting.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('rentings')
export class RentingController {
  constructor(private readonly rentingService: RentingService) {}

  /**
   * Cette fonction prend un objet CreateRentingDto comme paramètre et renvoie une promesse d'un objet
   * Renting.
   * @param {CreateRentingDto} createLocationPayload - CreateRentingDto
   * @returns La valeur de retour est une Promesse&lt;Location&gt;.
   */
  @Post()
  create(@Body() createLocationPayload: CreateRentingDto) {
    return this.rentingService.create(createLocationPayload);
  }

  /**
   * Elle renvoie le résultat de la fonction findAll() dans le rentingService.
   * @returns La méthode findAll() du rentingService.
   */
  @Get()
  findAll() {
    return this.rentingService.findAll();
  }

  /**
   * Cette fonction prend un id comme paramètre et renvoie le résultat de la fonction findOneById dans
   * rentingService.
   * @param {string} id - L'identifiant de la location que vous souhaitez rechercher.
   * @returns Le résultat de la méthode findOneById dans rentingService.
   */
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.rentingService.findOnyById(id);
  }

  /**
   * Cette fonction prend un id et un updateLocationPayload, et renvoie le résultat de l'appel de la
   * fonction de mise à jour sur le rentingService, en transmettant l'id et updateLocationPayload.
   * @param {string} id - L'identifiant de la location que nous voulons mettre à jour.
   * @param {UpdateRentingDto} updateLocationPayload - UpdateRentingDto
   * @returns L'objet de location mis à jour.
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocationPayload: UpdateRentingDto,
  ) {
    return this.rentingService.update(id, updateLocationPayload);
  }

  /**
   * Il supprime une location de la base de données par son identifiant
   * @param {string} id - string - l'identifiant de la location à supprimer
   * @returns Le résultat de la méthode delete dans le rentingService.
   */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.rentingService.delete(id);
  }

  /**
   * Cette fonction prend un userId comme paramètre et renvoie une liste des locations qui ont le même
   * userId comme paramètre.
   * @param {string} userId - Le nom du paramètre qui sera passé dans l'URL.
   * @returns Un tableau d'objets de location.
   */
  @Post(':id')
  findRentingsByUserId(@Param('id') userId: string) {
    return this.rentingService.findAllByUserId(userId);
  }
}
